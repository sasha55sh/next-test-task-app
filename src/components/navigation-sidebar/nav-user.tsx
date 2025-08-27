"use client";

import { Avatar } from "@/components/ui/avatar";
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import { User } from "@/config/types";
import Image from "next/image";

export function NavUser({ user }: { user: User }) {
  return (
    <SidebarMenu>
      <SidebarMenuItem className="flex items-center gap-3">
        <Avatar className="h-8 w-8 rounded-full">
          <Image src={user.avatar} alt={user.name} />
        </Avatar>
        <div className="flex flex-col gap-1">
          <p className="font-medium text-black text-base">{user.name}</p>
          <p className="text-sm text-primary">{user.email}</p>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
