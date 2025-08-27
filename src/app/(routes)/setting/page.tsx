import { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { RightSidebar } from "@/components/profile-sidebar/right-sidebar";
import { ProfileSettings } from "@/app/sections/setting-page/profile-settings";

export const metadata: Metadata = {
  title: "TESTAPP - Setting",
  description: "Manage your account data",
  icons: { icon: "@/app/favicon.ico" },
};

export const generateViewport = () => ({
  initialScale: 1.0,
  width: "device-width",
});

const Page = () => {
  return (
    <main className="px-8 py-12 w-full flex flex-col gap-6">
      <SiteHeader title="Setting" />
      <div className="flex gap-6">
        <div className="flex-1 pr-[40px]">
          <ProfileSettings />
        </div>
        <RightSidebar />
      </div>
    </main>
  );
};

export default Page;
