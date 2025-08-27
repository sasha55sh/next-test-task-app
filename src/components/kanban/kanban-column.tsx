import { useDroppable } from "@dnd-kit/core";
import { KanbanCard } from "./kanban-card";
import { KanbanCardSkeleton } from "./card-sceleton";
import { KanbanCardPlaceholder } from "./card-placeholder";
import { KanbanColumnProps } from "@/config/types";

export function KanbanColumn({
  id,
  title,
  tasks,
  isLoading,
  maxTasks = 0,
}: KanbanColumnProps & { id: string; isLoading?: boolean; maxTasks?: number }) {
  const { setNodeRef, isOver } = useDroppable({ id });

  const placeholdersCount = Math.max(0, maxTasks - tasks.length);

  return (
    <div className="flex flex-col space-y-5">
      <h2 className="text-very-dark text-medium text-lg">
        {title}
        <span> ({tasks.length})</span>
      </h2>

      <div
        ref={setNodeRef}
        className={`flex flex-col gap-7 rounded-lg transition ${
          isOver ? "bg-blue-50" : "bg-transparent"
        }`}
      >
        {isLoading ? (
          Array(3)
            .fill(0)
            .map((_, i) => <KanbanCardSkeleton key={i} />)
        ) : (
          <>
            {tasks.map((task) => (
              <KanbanCard key={task.id} task={task} />
            ))}
            {Array(placeholdersCount)
              .fill(0)
              .map((_, i) => (
                <KanbanCardPlaceholder key={`placeholder-${i}`} />
              ))}
          </>
        )}
      </div>
    </div>
  );
}
