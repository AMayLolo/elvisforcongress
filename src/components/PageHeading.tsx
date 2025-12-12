import React from "react";

type Props = {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export default function PageHeading({ children, as = "h1", className = "" }: Props) {
  const Tag = as as any;
  // default sizes: h1 -> 4xl, h2 -> 3xl, h3 -> 2xl
  const sizeClass = as === "h1" ? "text-4xl" : as === "h2" ? "text-3xl" : "text-2xl";
  const classes = ["font-bold text-sky-900 dark:text-white", sizeClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="mb-6">
      <Tag className={classes}>{children}</Tag>
      <div className="w-20 h-1 bg-red-700 rounded mt-3" aria-hidden />
    </div>
  );
}
