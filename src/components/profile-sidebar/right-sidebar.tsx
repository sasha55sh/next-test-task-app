"use client";

import * as React from "react";
import { Profile } from "./profile";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Button } from "../ui/button";
import { useUser } from "@/hooks/userContext";

export function RightSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser();
  return (
    <Sidebar
      collapsible="offcanvas"
      {...props}
      side="right"
      className="min-w-80"
    >
      <div className="flex flex-col h-full px-6 py-12">
        <SidebarHeader>
          <p className="capitalize font-medium text-xl">my profile</p>
          <p className="text-green text-sm">75% completed your profile</p>
        </SidebarHeader>

        <SidebarContent className="flex-1">
          <Profile user={user} />
        </SidebarContent>

        <SidebarFooter>
          <Button
            variant="destructive"
            className="text-white font-bold text-xs bg-destructive"
          >
            Logout
          </Button>
        </SidebarFooter>
      </div>
    </Sidebar>
  );
}
