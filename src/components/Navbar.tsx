"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
 

export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <>
      <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive} >
                <Link href={"/"}>
                <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
                </Link>

                <MenuItem setActive={setActive} active={active} item="Our Courses">
                <div  className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href={"/Courses"}>All Courses</HoveredLink>
                  <HoveredLink href={"/Courses"}>Basic Music Theory </HoveredLink>
                  <HoveredLink href={"/Courses"}>Advanced Composition</HoveredLink>
                  <HoveredLink href={"/Courses"}>Song Writing</HoveredLink>
                  <HoveredLink href={"/Courses"}>Music Production</HoveredLink>
                </div>
                </MenuItem>
                <Link href={"/Contact"}>
                <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
                </Link>
            </Menu>
        </div>  
    </>
  )
}
