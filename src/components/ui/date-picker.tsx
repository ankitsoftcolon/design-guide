import { useState } from "react";
import { CalendarDays } from "lucide-react";
import { format } from "date-fns";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
export function DatePicker({
  value,
  onChange,
  id,
}: {
  value?: Date;
  onChange: (value: Date | undefined) => void;
  id?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          id={id}
          variant="outline"
          className="w-full justify-between font-normal"
        >
          {value ? (
            format(value, "MMM dd, yyyy")
          ) : (
            <span className="text-muted-foreground">Select date</span>
          )}
          <CalendarDays className="text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={(date) => {
            onChange(date);
            setOpen(false);
          }}
          autoFocus
        />
      </PopoverContent>
    </Popover>
  );
}
