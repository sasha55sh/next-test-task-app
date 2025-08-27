import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Task } from "@/config/types";
import { Button } from "../ui/button";
import Image from "next/image";
import MoreIcon from "@/images/more-icon.svg";
import ClockIcon from "@/images/clock-icon.svg";
import AvatarIcon from "@/images/avatar-icon.svg";
import { useDraggable } from "@dnd-kit/core";

export function KanbanCard({ task }: { task: Task }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id: task.id });

  const style: React.CSSProperties = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
    zIndex: isDragging ? 50 : "auto",
    opacity: isDragging ? 0.6 : 1,
    transition: "transform 200ms ease",
  };

  return (
    <Card
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="px-1 py-4 xl:min-w-70 xl:h-54 xl:flex xl:flex-col xl:justify-between cursor-grab"
    >
      <CardHeader className="flex justify-between items-center">
        <CardTitle
          className="capitalize font-medium text-base h-12
        "
        >
          {task.title}
        </CardTitle>
        <CardAction>
          <Button variant="ghost" size="icon">
            <Image src={MoreIcon} alt="More icon" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-very-dark/60 text-sm h-15">{task.description}</p>
      </CardContent>
      <CardFooter>
        <div className="flex items-center justify-between w-full">
          <Badge
            variant="secondary"
            className="px-2.5 py-2 bg-green flex items-center gap-2"
          >
            <Image src={ClockIcon} alt="Clock icon" />
            <p className="text-white text-xs">
              {new Date(task.createdAt).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "long",
              })}
            </p>
          </Badge>
        </div>
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <Avatar key={i} className="ring-1 ring-white">
              <Image src={AvatarIcon} alt={`Avatar ${i}`} />
            </Avatar>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
