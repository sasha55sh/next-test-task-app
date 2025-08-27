"use client";

import * as React from "react";
import Image from "next/image";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useState } from "react";
import Link from "next/link";

export function NavMain({
  items,
  ...props
}: {
  items: {
    title: string;
    url: string;
    src: string;
  }[];
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const [activeTitle, setActiveTitle] = useState<string>("Dashboard");
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link
                  href={item.url}
                  className="flex items-center gap-2"
                  onClick={() => {
                    setActiveTitle(item.title);
                  }}
                >
                  <Image src={item.src} alt={item.title} />
                  <p
                    className={`text-font ${
                      activeTitle === item.title ? "text-green" : "text-primary"
                    }`}
                  >
                    {item.title}
                  </p>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
