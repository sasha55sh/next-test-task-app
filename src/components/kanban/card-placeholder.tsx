import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function KanbanCardPlaceholder() {
  return (
    <Card className="px-1 py-4 xl:min-w-70 xl:h-54 xl:flex xl:flex-col border-2 border-dashed border-gray-300 bg-transparent">
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="h-12"></CardTitle>
      </CardHeader>
      <CardContent>
        <p className="h-15"></p>
      </CardContent>
      <CardFooter>
        <div className="px-2.5 py-2 h-6 w-24"></div>
        <div className="flex -space-x-2 mt-2"></div>
      </CardFooter>
    </Card>
  );
}
