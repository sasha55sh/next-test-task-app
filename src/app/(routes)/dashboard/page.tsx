import { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { KanbanBoard } from "@/app/sections/dashboard-page/kanban-board";

export const metadata: Metadata = {
  title: "TESTAPP - Dashboard",
  description:
    "Stay updated with the latest news and analytics in your personal dashboard",
  icons: { icon: "@/app/favicon.ico" },
};

export const generateViewport = () => ({
  initialScale: 1.0,
  width: "device-width",
});

const Page = () => {
  return (
    <main className="px-8 py-12 flex flex-col gap-6">
      <SiteHeader title="my tasks" />
      <KanbanBoard/>
    </main>
  );
};

export default Page;
