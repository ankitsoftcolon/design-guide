import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Search, Mail, Eye } from "lucide-react";
import { DemoCard } from "./demo-card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Slider } from "@/components/ui/slider";
import { Calendar } from "@/components/ui/calendar";
import { DatePicker } from "@/components/ui/date-picker";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupButton,
} from "@/components/ui/input-group";
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
} from "@/components/ui/field";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
} from "@/components/ui/combobox";
import { toast } from "sonner";
const schema = z.object({
  email: z.string().email("Please enter a valid email address."),
});
export function Forms() {
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 9, 8)),
    [volume, setVolume] = useState([65]),
    [show, setShow] = useState(false);
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
  });
  return (
    <>
      <DemoCard
        title="Inputs & labels"
        description="Clear labels, subtle borders, confident focus states."
      >
        <div className="demo-stack">
          <Field>
            <FieldLabel htmlFor="demo-name">
              Full name <span className="text-destructive">*</span>
            </FieldLabel>
            <Input id="demo-name" placeholder="e.g. Alex Morgan" />
            <FieldDescription>
              Your name as it appears on your account.
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="demo-error">Email address</FieldLabel>
            <Input id="demo-error" defaultValue="alex@" aria-invalid="true" />
            <FieldError>Please enter a valid email address.</FieldError>
          </Field>
          <Field>
            <FieldLabel htmlFor="demo-success">Workspace URL</FieldLabel>
            <Input
              id="demo-success"
              defaultValue="bluebox.design"
              className="border-[var(--success)]"
            />
            <FieldDescription className="text-[var(--success)]">
              ✓ This URL is available.
            </FieldDescription>
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="readonly">Read only</FieldLabel>
              <Input id="readonly" value="INV-2026-0042" readOnly />
            </Field>
            <Field>
              <FieldLabel htmlFor="disabled">Disabled</FieldLabel>
              <Input id="disabled" value="Not available" disabled />
            </Field>
          </div>
        </div>
      </DemoCard>
      <DemoCard
        title="Input groups & textarea"
        description="Composable prefixes, suffixes, and actions."
      >
        <div className="demo-stack">
          <InputGroup>
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
            <InputGroupInput
              aria-label="Search customers"
              placeholder="Search customers..."
            />
            <InputGroupAddon align="inline-end">⌘ K</InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupAddon>
              <Mail />
            </InputGroupAddon>
            <InputGroupInput
              type="email"
              aria-label="Contact email"
              placeholder="hello@example.com"
            />
          </InputGroup>
          <InputGroup>
            <InputGroupInput
              type={show ? "text" : "password"}
              aria-label="Password"
              placeholder="Enter your password"
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                aria-label="Show password"
                onClick={() => setShow(!show)}
              >
                <Eye />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupAddon>https://</InputGroupAddon>
            <InputGroupInput aria-label="Domain" placeholder="your-workspace" />
            <InputGroupAddon align="inline-end">.bluebox.app</InputGroupAddon>
          </InputGroup>
          <Field>
            <FieldLabel htmlFor="bio">About your business</FieldLabel>
            <Textarea
              id="bio"
              rows={4}
              placeholder="Tell us a little about what you do..."
            />
            <FieldDescription>Keep it short and meaningful.</FieldDescription>
          </Field>
        </div>
      </DemoCard>
      <DemoCard
        title="Checkboxes, radios & switches"
        description="Accessible selection controls with keyboard support."
      >
        <div className="demo-stack">
          <div className="demo-row">
            <Checkbox id="agree" defaultChecked />
            <Label htmlFor="agree">I agree to the terms and conditions</Label>
          </div>
          <div className="demo-row">
            <Checkbox id="unchecked" />
            <Label htmlFor="unchecked">Send me product updates</Label>
          </div>
          <div className="demo-row">
            <Checkbox id="check-disabled" disabled />
            <Label htmlFor="check-disabled">Unavailable option</Label>
          </div>
          <div className="demo-row">
            <Checkbox id="check-indeterminate" checked="indeterminate" />
            <Label htmlFor="check-indeterminate">Some items selected</Label>
          </div>
          <hr />
          <RadioGroup defaultValue="monthly">
            <div className="demo-row">
              <RadioGroupItem value="monthly" id="monthly" />
              <Label htmlFor="monthly">Monthly billing</Label>
            </div>
            <div className="demo-row">
              <RadioGroupItem value="yearly" id="yearly" />
              <Label htmlFor="yearly">Yearly billing · Save 20%</Label>
            </div>
            <div className="demo-row">
              <RadioGroupItem value="custom" id="custom" disabled />
              <Label htmlFor="custom">Custom plan</Label>
            </div>
          </RadioGroup>
          <hr />
          <div className="flex justify-between">
            <Label htmlFor="notify">Email notifications</Label>
            <Switch id="notify" defaultChecked />
          </div>
          <div className="flex justify-between">
            <Label htmlFor="auto-save">Automatically save drafts</Label>
            <Switch id="auto-save" />
          </div>
          <div className="flex justify-between">
            <Label htmlFor="switch-disabled">
              Managed by your organization
            </Label>
            <Switch id="switch-disabled" disabled />
          </div>
        </div>
      </DemoCard>
      <DemoCard
        title="Select & combobox"
        description="Choose one option, or search a larger collection."
      >
        <div className="demo-stack">
          <Field>
            <FieldLabel htmlFor="country">Country</FieldLabel>
            <Select defaultValue="us">
              <SelectTrigger id="country" className="w-full">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="in">India</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <FieldLabel htmlFor="native">Native select</FieldLabel>
            <NativeSelect id="native" className="w-full" defaultValue="draft">
              <NativeSelectOption value="draft">Draft</NativeSelectOption>
              <NativeSelectOption value="pending">Pending</NativeSelectOption>
              <NativeSelectOption value="paid">Paid</NativeSelectOption>
            </NativeSelect>
          </Field>
          <Field>
            <FieldLabel>Searchable framework</FieldLabel>
            <Combobox items={["React", "Vue", "Svelte", "Angular", "Solid"]}>
              <ComboboxInput
                placeholder="Select framework"
                aria-label="Framework"
              />
              <ComboboxContent>
                <ComboboxEmpty>No framework found.</ComboboxEmpty>
                <ComboboxList>
                  {(item: string) => (
                    <ComboboxItem key={item} value={item}>
                      {item}
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </Field>
          <Select disabled>
            <SelectTrigger className="w-full" aria-label="Disabled select">
              <SelectValue placeholder="Unavailable selection" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </DemoCard>
      <DemoCard
        title="Calendar & date picker"
        description="A consistent calendar for scheduling and invoices."
      >
        <div className="flex flex-wrap gap-6">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            defaultMonth={new Date(2026, 9, 1)}
            className="border rounded-md"
          />
          <div className="flex-1 min-w-40">
            <Field>
              <FieldLabel htmlFor="showcase-date">Selected date</FieldLabel>
              <DatePicker id="showcase-date" value={date} onChange={setDate} />
              <FieldDescription>
                Click to choose a different date.
              </FieldDescription>
            </Field>
          </div>
        </div>
      </DemoCard>
      <DemoCard
        title="Slider & one-time password"
        description="Fine adjustments and secure code entry."
      >
        <div className="demo-stack">
          <div>
            <div className="flex justify-between mb-4">
              <Label>Volume</Label>
              <span className="text-primary">{volume[0]}%</span>
            </div>
            <Slider
              aria-label="Volume"
              value={volume}
              onValueChange={setVolume}
              max={100}
              step={1}
            />
          </div>
          <div>
            <p className="demo-caption">Range</p>
            <Slider
              aria-label="Price range"
              defaultValue={[20, 80]}
              max={100}
            />
          </div>
          <div>
            <p className="demo-caption">Disabled</p>
            <Slider aria-label="Disabled slider" defaultValue={[40]} disabled />
          </div>
          <hr />
          <Field>
            <FieldLabel htmlFor="otp">Verification code</FieldLabel>
            <InputOTP
              id="otp"
              maxLength={6}
              onComplete={() => toast.success("Code entered successfully")}
            >
              <InputOTPGroup>
                {[0, 1, 2].map((n) => (
                  <InputOTPSlot index={n} key={n} />
                ))}
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                {[3, 4, 5].map((n) => (
                  <InputOTPSlot index={n} key={n} />
                ))}
              </InputOTPGroup>
            </InputOTP>
            <FieldDescription>
              Enter the six-digit code sent to your email.
            </FieldDescription>
          </Field>
        </div>
      </DemoCard>
      <DemoCard
        title="Validated form"
        description="React Hook Form + Zod. Submit to see inline validation."
        full
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) =>
              toast.success(`Subscribed ${values.email}`),
            )}
            className="flex flex-wrap items-start gap-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1 min-w-52">
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <Input placeholder="you@company.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    We’ll only send useful product updates.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="mt-6" type="submit">
              Subscribe
            </Button>
          </form>
        </Form>
      </DemoCard>
    </>
  );
}
