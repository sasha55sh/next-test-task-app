"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export function KanbanCardSkeleton() {
  return (
    <Card className="px-1 py-4 xl:min-w-70 xl:h-54 xl:flex xl:flex-col xl:justify-between animate-pulse bg-gray-300">
      <CardHeader className="h-12 bg-gray-300 rounded-md" />
      <CardContent className="flex-1 bg-gray-300 rounded-md mt-2" />
      <CardFooter className="h-12 bg-gray-300 rounded-md mt-2" />
    </Card>
  );
}
