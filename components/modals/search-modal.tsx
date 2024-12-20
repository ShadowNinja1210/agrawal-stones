"use client";

import useStateStore from "@/lib/state-store";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";

import { products } from "@/public/assets/data";
import { productsData } from "@/lib/types";
import Image from "next/image";
import _ from "lodash";
import Link from "next/link";
import SmallLoader from "../loaders/small-loader";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SearchModal() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [searchedStones, setSearchedStones] = useState<productsData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
      setIsLoading(false);
    }, 1000);

    // Cleanup timeout if searchTerm changes before 1000ms
    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchFunc(debouncedSearchTerm);
    } else {
      setSearchedStones([]);
    }
  }, [debouncedSearchTerm]);
  const searchFunc = (text: string) => {
    text = text.toLowerCase().trim();
    if (text.length === 0) setSearchedStones([]);
    let searchedWords = [text];

    if (text.includes(" ")) {
      searchedWords = text.split(" ");
      searchedWords = searchedWords.filter((word) => word !== "stone");
    }

    const filteredProducts = products.filter((product) =>
      searchedWords.some(
        (word) =>
          (product.name && product.name.toLowerCase().includes(word)) ||
          product.model.toLowerCase().includes(word) ||
          product.category.toLowerCase().includes(word)
      )
    );

    setSearchedStones(filteredProducts as productsData[]);
  };

  const { isOpen, onClose, type } = useStateStore();

  const redefinedOnClose = () => {
    setSearchedStones([]);
    onClose();
  };
  const isSearchModalOpen = type === "Search" && isOpen;
  return (
    <Dialog open={isSearchModalOpen} onOpenChange={redefinedOnClose}>
      <DialogContent className="h-[calc(100vh-10%)] sm:p-6 p-4 flex flex-col bg-neutral-100">
        <div className="relative">
          <Input
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setIsLoading(true);
            }}
            className="w-full mt-5 relative"
          />
          <button
            className={cn(
              " p-1 flex justify-center items-center rounded-full w-6 h-6 scale-90 absolute top-1/2 slide-out-to-top-1/2 right-3 text-sm bg-neutral-400 bg-opacity-70 hover:bg-opacity-85 active:bg-opacity-100 text-black",
              searchTerm.length === 0 && "hidden"
            )}
            onClick={() => setSearchTerm("")}
          >
            <X />
          </button>
        </div>
        {isLoading ? (
          <SmallLoader />
        ) : searchedStones.length <= 0 ? (
          // No stones found
          <div className="flex items-center flex-col">
            <p className="text-center p-2">No stones found.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 overflow-y-scroll p-2">
            {searchedStones.map((stone) => {
              // Category of the stone in lower case
              const category = stone.category.toLowerCase();

              // Dynamic URL's Middle part
              const urlCategory = category.includes("slabs")
                ? _.kebabCase(
                    category
                      .split(" ")
                      .filter((item) => item != "slabs")
                      .join(" ")
                  ) + "/slabs"
                : category.includes("wall cladding")
                ? _.kebabCase(
                    category
                      .split(" ")
                      .filter((item) => item != "wall cladding")
                      .join(" ") + "/wall-cladding"
                  )
                : _.kebabCase(category);

              // Dynamic URL
              const stoneLink = "/products/" + urlCategory + "/" + _.kebabCase(stone.name);

              return (
                <Link
                  href={stoneLink}
                  key={stone.model}
                  onClick={redefinedOnClose}
                  className="flex gap-2 p-2 min-w-[220] bg-neutral-200 rounded-lg items-center max-h-[108px] hover:shadow-md hover:scale-105 transition-all"
                >
                  <Image
                    src={stone.mainImg || (stone.src as string)}
                    alt={stone.name}
                    width={100}
                    height={100}
                    className="max-h-16"
                  />
                  <div className="flex flex-col">
                    <strong>
                      <p className="">{stone.name}</p>
                    </strong>
                    <p className=" text-sm">{stone.model}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
