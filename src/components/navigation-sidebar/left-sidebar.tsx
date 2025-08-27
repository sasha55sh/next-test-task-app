"use client";

import * as React from "react";
import DashboarIcon from "@/images/dashboard-icon.svg";
import SettingIcon from "@/images/setting-icon.svg";
import SidebarHeaderIcon from "@/images/sidebar-header-icon.svg";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@/hooks/userContext";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      src: DashboarIcon,
    },
    {
      title: "Setting",
      url: "/setting",
      src: SettingIcon,
    },
  ],
};

export function LeftSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser();
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <div className="pt-14 pb-10 pl-6 flex flex-col h-full">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/" className="flex gap-3">
                  <Image src={SidebarHeaderIcon} alt="Sidebar header icon" />
                  <p className="text-xl font-semibold">TESTAPP</p>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent className="my-8">
          <NavMain items={data.navMain} />
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={user} />
        </SidebarFooter>
      </div>
    </Sidebar>
  );
}
