export interface User {
  name: string;
  avatar: string;
  email: string;
  position: string;
  password: string;
}

export type Task = {
  title: string;
  description: string;
  createdAt: string;
  src: string;
  status: "to-do" | "in-progress" | "review" | "completed" | string;
  id: string;
};

export interface KanbanColumnProps {
  title: string;
  tasks: Task[];
}
