import { useState } from "react";
import { ArrowUpDown, Search, Download } from "lucide-react";
import { Input } from "./input";
import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { Badge } from "./badge";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "./table";
import { money } from "@/lib/format";
export type InvoiceRow = {
  id: string;
  customer: string;
  email: string;
  date: string;
  amount: number;
  status: "Paid" | "Pending" | "Draft" | "Overdue";
};
export function DataTable({ rows }: { rows: InvoiceRow[] }) {
  const [query, setQuery] = useState(""),
    [ascending, setAscending] = useState(true),
    [selected, setSelected] = useState<string[]>([]),
    [page, setPage] = useState(1);
  const filtered = rows
    .filter((row) =>
      `${row.id} ${row.customer} ${row.status}`
        .toLowerCase()
        .includes(query.toLowerCase()),
    )
    .sort((a, b) => (ascending ? a.amount - b.amount : b.amount - a.amount));
  const pages = Math.max(1, Math.ceil(filtered.length / 5)),
    current = Math.min(page, pages),
    visible = filtered.slice((current - 1) * 5, current * 5);
  const toggle = (id: string) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    );
  const exportRows = () => {
    const output = rows.filter((row) =>
      selected.length ? selected.includes(row.id) : true,
    );
    const csv = [
      "ID,Customer,Date,Amount,Status",
      ...output.map((r) =>
        [r.id, r.customer, r.date, r.amount, r.status]
          .map((v) => `"${String(v).replaceAll('"', '""')}"`)
          .join(","),
      ),
    ].join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "invoices.csv";
    a.click();
    URL.revokeObjectURL(url);
  };
  return (
    <div>
      <div className="flex justify-between gap-3 mb-5">
        <div className="relative max-w-64">
          <Search className="absolute top-3 left-3 size-4 text-muted-foreground" />
          <Input
            aria-label="Search invoices"
            className="pl-9"
            placeholder="Search invoices..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
          />
        </div>
        <Button variant="outline" onClick={exportRows}>
          <Download />
          Export {selected.length ? `(${selected.length})` : ""}
        </Button>
      </div>
      <div className="rounded-md border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-10">
                <Checkbox
                  aria-label="Select all visible invoices"
                  checked={
                    visible.length > 0 &&
                    visible.every((r) => selected.includes(r.id))
                      ? true
                      : visible.some((r) => selected.includes(r.id))
                        ? "indeterminate"
                        : false
                  }
                  onCheckedChange={(value) =>
                    setSelected(
                      value
                        ? [
                            ...new Set([
                              ...selected,
                              ...visible.map((r) => r.id),
                            ]),
                          ]
                        : selected.filter(
                            (s) => !visible.some((r) => r.id === s),
                          ),
                    )
                  }
                />
              </TableHead>
              <TableHead>Invoice</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>
                <button
                  className="flex items-center gap-2"
                  onClick={() => setAscending(!ascending)}
                >
                  Amount
                  <ArrowUpDown size={12} />
                </button>
              </TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {visible.map((row) => (
              <TableRow
                key={row.id}
                data-state={selected.includes(row.id) ? "selected" : undefined}
              >
                <TableCell>
                  <Checkbox
                    aria-label={`Select ${row.id}`}
                    checked={selected.includes(row.id)}
                    onCheckedChange={() => toggle(row.id)}
                  />
                </TableCell>
                <TableCell className="text-primary font-medium">
                  {row.id}
                </TableCell>
                <TableCell>
                  <strong className="font-medium text-sm">
                    {row.customer}
                  </strong>
                  <p className="text-xs text-muted-foreground">{row.email}</p>
                </TableCell>
                <TableCell className="whitespace-nowrap text-muted-foreground">
                  {row.date}
                </TableCell>
                <TableCell className="font-medium">
                  {money(row.amount)}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      row.status === "Paid"
                        ? "bg-[var(--success-soft)] text-[var(--success)] border-transparent"
                        : row.status === "Overdue"
                          ? "bg-[var(--error-soft)] text-destructive border-transparent"
                          : row.status === "Pending"
                            ? "bg-[var(--warning-soft)] text-[var(--warning)] border-transparent"
                            : "bg-muted text-muted-foreground border-transparent"
                    }
                  >
                    {row.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
            {visible.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="text-center h-24 text-muted-foreground"
                >
                  No invoices match your search.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-between items-center mt-4 gap-3 text-sm text-muted-foreground">
        <span>
          {selected.length} of {rows.length} rows selected
        </span>
        <div className="demo-row">
          <Button
            size="sm"
            variant="outline"
            disabled={current === 1}
            onClick={() => setPage(current - 1)}
          >
            Previous
          </Button>
          <span>
            {current} / {pages}
          </span>
          <Button
            size="sm"
            variant="outline"
            disabled={current === pages}
            onClick={() => setPage(current + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
