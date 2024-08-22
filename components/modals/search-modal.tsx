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

export default function SearchModal() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [searchedStones, setSearchedStones] = useState<productsData[]>([]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 1500);

    // Cleanup timeout if searchTerm changes before 1500ms
    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchFunc(debouncedSearchTerm);
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
          product.name.toLowerCase().includes(word) ||
          product.model.toLowerCase().includes(word) ||
          product.category.toLowerCase().includes(word)
      )
    );

    setSearchedStones(filteredProducts);
  };

  const { isOpen, onClose, type } = useStateStore();

  const redefinedOnClose = () => {
    setSearchedStones([]);
    onClose();
  };
  const isSearchModalOpen = type === "Search" && isOpen;
  return (
    <Dialog open={isSearchModalOpen} onOpenChange={redefinedOnClose}>
      <DialogContent className="h-[calc(100vh-10%)] sm:p-6 p-4 flex flex-col max-h-[108px]">
        <Input placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)} className="w-full" />
        {searchedStones.length <= 0 ? (
          // No stones found
          <div className="flex items-center flex-col">
            <p className="text-center">No stones found.</p>
          </div>
        ) : (
          <div className=" grid grid-cols-2 gap-2 justify-between h-full overflow-y-scroll">
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
              const stoneLink = "/services/" + urlCategory + "/" + _.kebabCase(stone.name);

              return (
                <Link
                  href={stoneLink}
                  key={stone.model}
                  onClick={redefinedOnClose}
                  className="flex gap-2 p-2 w-56 bg-neutral-100 rounded-lg items-center"
                >
                  <Image src={stone.mainImg} alt={stone.name} width={100} height={100} className="max-h-16" />
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
