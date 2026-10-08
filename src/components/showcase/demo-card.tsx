import { useDemoFilter } from "./demo-filter";
import type { ReactNode } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
export function DemoCard({
  title,
  description,
  children,
  full = false,
}: {
  title: string;
  description?: string;
  children: ReactNode;
  full?: boolean;
}) {
  const filter = useDemoFilter();
  if (filter && filter !== title) return null;
  return (
    <Card className={`demo-card ${full ? "full" : ""}`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
