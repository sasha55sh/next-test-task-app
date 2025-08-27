"use client";

import { Noto_Sans } from "next/font/google";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUser } from "@/hooks/userContext";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters",
  }),
  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters" })
    .max(12, { message: "Password must be at most 12 characters" }),
});

export function ProfileSettings() {
  const { user, setUser } = useUser();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: user,
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setUser({ ...user, ...data });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`${notoSans.className} flex flex-col space-y-5 w-full`}
      >
        <div className="flex flex-col space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex flex-col space-y-2">
                <FormLabel className="font-semibold text-xs text-dark-gray">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter name"
                    {...field}
                    className="border border-light-gray placeholder-dark-gray text-base py-6"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-xs text-dark-gray">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter password"
                    {...field}
                    className="border border-light-gray placeholder-dark-gray text-base py-6 w-full"
                  />
                </FormControl>
                <FormDescription className="text-xs text-dark-gray">
                  Your password is between 4 and 12 characters
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            className="min-w-67.5 bg-green text-white text-xs font-bold"
          >
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
}
