"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Task } from "@/config/types";

const fetchTasks = async (): Promise<Task[]> => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/tasks`);
  return data;
};

export const useTasks = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
    staleTime: 1000 * 60,
  });
};
