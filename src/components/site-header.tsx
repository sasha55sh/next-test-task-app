"use client";

import * as React from "react";

export function SiteHeader({ title }: { title: string }) {
  const today = new Date();

  const formatedWeekday = today.toLocaleDateString("en-GB", {
    weekday: "long",
  });

  const formattedDate = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="flex flex-col gap-4">
      <h1 className="text-very-dark text-xl font-medium capitalize">{title}</h1>
      <p className="text-primary">
        <span className="text-green">{formatedWeekday},</span> {formattedDate}
      </p>
    </header>
  );
}
