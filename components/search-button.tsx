"use client";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import useStateStore from "@/lib/state-store";

export default function SearchButton({ className }: { className?: string }) {
  const { onOpen } = useStateStore();

  const searchToggle = () => {
    onOpen("Search");
  };

  return (
    <button
      className={cn("p-2 rounded-full bg-neutral-200 hover:bg-neutral-300 active:bg-neutral-400", className)}
      onClick={searchToggle}
    >
      <Search />
    </button>
  );
}
