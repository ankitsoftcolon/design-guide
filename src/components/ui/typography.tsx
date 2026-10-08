import type { ComponentProps, ElementType } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const typographyVariants = cva("", {
  variants: {
    variant: {
      display: "text-3xl font-semibold tracking-tight leading-tight",
      h1: "text-2xl font-semibold tracking-tight",
      h2: "text-xl font-semibold",
      h3: "text-base font-semibold",
      body: "text-[length:var(--text-body)] leading-[var(--line-body)]",
      label: "text-[length:var(--text-label)] font-medium",
      helper: "text-[length:var(--text-helper)] text-muted-foreground",
      code: "font-mono text-xs bg-muted rounded px-1.5 py-1",
    },
  },
  defaultVariants: { variant: "body" },
});
export function Typography({
  as: Tag = "p",
  variant,
  className,
  ...props
}: ComponentProps<"p"> &
  VariantProps<typeof typographyVariants> & { as?: ElementType }) {
  return (
    <Tag
      className={cn(typographyVariants({ variant, className }))}
      {...props}
    />
  );
}
