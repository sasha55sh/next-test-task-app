"use client";

import { createContext, useState, useContext } from "react";
import AvatarIcon from "@/images/avatar-icon.svg";
import { User } from "@/config/types";

const UserContext = createContext<{
  user: User;
  setUser: (user: User) => void;
} | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>({
    name: "User R.",
    password: "1234",
    email: "test-mail@email.com",
    avatar: AvatarIcon,
    position: "Developer at White Digital",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within UserProvider");
  return context;
};
