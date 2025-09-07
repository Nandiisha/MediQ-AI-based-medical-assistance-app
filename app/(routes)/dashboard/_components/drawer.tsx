"use client";

import { useId } from "react";
import {
  Drawer as DrawerComponent,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import { IoMenuSharp } from "react-icons/io5";

const menuItems = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "History", href: "/history" },
  { id: 3, label: "Pricing", href: "/pricing" },
  { id: 4, label: "Profile", href: "/profile" },
];

export default function Drawer() {
  const drawerId = useId(); 

  return (
    <DrawerComponent>
  <DrawerTrigger id={drawerId}>
    <IoMenuSharp className="text-2xl" />
  </DrawerTrigger>

  <DrawerContent aria-labelledby={drawerId}>
    <DrawerHeader className="px-6">
      <div>
        {menuItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="mr-10 font-medium text-gray-500 hover:text-gray-900 flex items-center justify-start gap-2"
          >
            <span className="text-2xl">{item.label}</span>
            <div className="w-full h-[1px] bg-gray-200" />
          </Link>
        ))}
      </div>
    </DrawerHeader>
  </DrawerContent>
</DrawerComponent>

  );
}
