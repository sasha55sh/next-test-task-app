"use client";

import * as React from "react";
import { useTasks } from "@/hooks/useTasks";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { KanbanColumn } from "@/components/kanban/kanban-column";
import { Task } from "@/config/types";

export function KanbanBoard() {
  const { data: tasks = [], isLoading } = useTasks();
  const [localTasks, setLocalTasks] = React.useState<Task[]>([]);

  React.useEffect(() => {
    setLocalTasks((prev) => {
      if (prev.length !== tasks.length) return tasks;
      return prev;
    });
  }, [tasks]);

  const columns = [
    { title: "To do", status: "to-do" },
    { title: "In Progress", status: "in-progress" },
    { title: "Review", status: "review" },
    { title: "Completed", status: "completed" },
  ];

  const maxTasksCount = Math.max(
    ...columns.map(
      (col) => localTasks.filter((t) => t.status === col.status).length
    ),
    0
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    setLocalTasks((prev) =>
      prev.map((task) =>
        task.id === active.id ? { ...task, status: String(over.id) } : task
      )
    );
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-7">
        {columns.map((col) => (
          <KanbanColumn
            key={col.status}
            id={col.status}
            title={col.title}
            tasks={localTasks.filter((task) => task.status === col.status)}
            isLoading={isLoading}
            maxTasks={maxTasksCount}
          />
        ))}
      </div>
    </DndContext>
  );
}
