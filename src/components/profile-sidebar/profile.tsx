"use client";

import * as React from "react";
import Image from "next/image";
import { User } from "@/config/types";
import { Loader2 } from "lucide-react";
import { SidebarGroup, SidebarGroupContent } from "@/components/ui/sidebar";

export const Icons = { spinner: Loader2 };

export function Profile({
  user,
  ...props
}: { user: User } & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <div className="relative flex items-center justify-center my-5">
          <div className="w-24 h-24 rounded-full border-4 border-transparent border-y-green border-r-green rotate-10" />

          <div className="absolute w-20 h-20 rounded-full overflow-hidden bg-white">
            <Image
              src={user.avatar}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center">
          <p className="text-base text-very-dark font-medium">{user.name}</p>
          <p className="text-sm text-primary">{user.position}</p>
          <hr className="h-0.1 bg-soft-gray min-w-64" />
        </div>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
