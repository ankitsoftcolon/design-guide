import { useState } from "react";
import {
  ArrowRight,
  Check,
  Plus,
  Download,
  Settings,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Layers,
  Info,
  TriangleAlert,
  CircleCheck,
  Inbox,
  FileText,
  ChevronDown,
  Mail,
  DollarSign,
  Users,
  TrendingUp,
} from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, Area, AreaChart } from "recharts";
import { Typography as Text } from "@/components/ui/typography";
import { DemoCard } from "@/components/showcase/demo-card";
import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty";
import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemGroup,
  ItemSeparator,
} from "@/components/ui/item";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { DataTable, type InvoiceRow } from "@/components/ui/data-table";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableCaption,
  TableFooter,
} from "@/components/ui/table";
import { toast } from "sonner";
export const componentNames = [
  "Accordion",
  "Alert",
  "Alert Dialog",
  "Aspect Ratio",
  "Avatar",
  "Badge",
  "Breadcrumb",
  "Button",
  "Button Group",
  "Calendar",
  "Card",
  "Carousel",
  "Chart",
  "Checkbox",
  "Collapsible",
  "Combobox",
  "Command",
  "Context Menu",
  "Dialog",
  "Drawer",
  "Dropdown Menu",
  "Empty",
  "Field",
  "Form",
  "Hover Card",
  "Input",
  "Input Group",
  "Input OTP",
  "Item",
  "Kbd",
  "Label",
  "Menubar",
  "Native Select",
  "Navigation Menu",
  "Pagination",
  "Popover",
  "Progress",
  "Radio Group",
  "Resizable",
  "Scroll Area",
  "Select",
  "Separator",
  "Sheet",
  "Sidebar",
  "Skeleton",
  "Slider",
  "Sonner",
  "Spinner",
  "Switch",
  "Table",
  "Tabs",
  "Textarea",
  "Toggle",
  "Toggle Group",
  "Tooltip",
  "Date Picker",
  "Data Table",
  "Typography",
];
const chartData = [
  { month: "May", revenue: 1800, expenses: 900 },
  { month: "Jun", revenue: 2400, expenses: 1400 },
  { month: "Jul", revenue: 1900, expenses: 1000 },
  { month: "Aug", revenue: 3200, expenses: 1700 },
  { month: "Sep", revenue: 2900, expenses: 1300 },
  { month: "Oct", revenue: 4200, expenses: 2000 },
];
const chartConfig = {
  revenue: { label: "Revenue", color: "var(--chart-1)" },
  expenses: { label: "Expenses", color: "var(--chart-2)" },
};
const rows: InvoiceRow[] = [
  {
    id: "INV-0042",
    customer: "Acme Corporation",
    email: "billing@acme.com",
    date: "Oct 08, 2026",
    amount: 3561.6,
    status: "Draft",
  },
  {
    id: "INV-0041",
    customer: "Linear Studio",
    email: "hello@linear.studio",
    date: "Oct 06, 2026",
    amount: 2400,
    status: "Paid",
  },
  {
    id: "INV-0040",
    customer: "Orbit Labs",
    email: "accounts@orbit.io",
    date: "Oct 03, 2026",
    amount: 1850,
    status: "Pending",
  },
  {
    id: "INV-0039",
    customer: "Northstar Inc.",
    email: "finance@northstar.co",
    date: "Oct 01, 2026",
    amount: 4200,
    status: "Paid",
  },
  {
    id: "INV-0038",
    customer: "Forma Design",
    email: "hello@forma.design",
    date: "Sep 28, 2026",
    amount: 960,
    status: "Overdue",
  },
  {
    id: "INV-0037",
    customer: "Atlas Agency",
    email: "billing@atlas.co",
    date: "Sep 25, 2026",
    amount: 3200,
    status: "Paid",
  },
  {
    id: "INV-0036",
    customer: "Studio Eight",
    email: "hello@eight.co",
    date: "Sep 22, 2026",
    amount: 1500,
    status: "Pending",
  },
];
export function Tokens() {
  return (
    <>
      <DemoCard
        title="The blue palette"
        description="The reference OKLCH palette, from subtle surfaces to strong actions."
        full
      >
        <div className="palette-grid">
          {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((n) => (
            <button
              key={n}
              className="text-left"
              onClick={() => {
                navigator.clipboard?.writeText(`var(--color-primary-${n})`);
                toast.success(`Primary ${n} token copied`);
              }}
            >
              <div
                className="swatch"
                style={{ background: `var(--color-primary-${n})` }}
              />
              <span>
                {n}
                {n === 600 && " · Primary"}
              </span>
            </button>
          ))}
        </div>
      </DemoCard>
      <DemoCard
        title="Semantic surfaces"
        description="Shared light-theme variables that give every component the same identity."
        full
      >
        <div className="token-grid">
          {[
            "background",
            "foreground",
            "card",
            "primary",
            "secondary",
            "muted",
            "accent",
            "border",
          ].map((token) => (
            <div className="token-block" key={token}>
              <i style={{ background: `var(--${token})` }} />
              <strong className="capitalize">{token}</strong>
              <code>--{token}</code>
            </div>
          ))}
        </div>
      </DemoCard>
      <DemoCard
        title="Status colors"
        description="Meaningful feedback with matching subtle surfaces."
      >
        <div className="demo-stack">
          {[
            ["Success", "success", "success-soft"],
            ["Warning", "warning", "warning-soft"],
            ["Error", "error", "error-soft"],
            ["Info", "info", "accent"],
          ].map(([name, fg, bg]) => (
            <div
              key={name}
              className="flex items-center justify-between rounded-md px-4 py-3 text-sm"
              style={{ background: `var(--${bg})`, color: `var(--${fg})` }}
            >
              <span>{name}</span>
              <code>--{fg}</code>
            </div>
          ))}
        </div>
      </DemoCard>
      <DemoCard
        title="Layout & spacing"
        description="Compact rhythm, consistent dimensions."
      >
        <div className="demo-stack">
          {[
            ["Gallery maximum", "1160px"],
            ["Control height", "40px"],
            ["Card spacing", "24px"],
            ["Base radius", "6px"],
            ["Body text", "14px / 1.6"],
            ["Font family", "Inter"],
          ].map(([name, value]) => (
            <div
              key={name}
              className="flex justify-between text-sm border-b pb-2"
            >
              <span className="text-muted-foreground">{name}</span>
              <code>{value}</code>
            </div>
          ))}
        </div>
      </DemoCard>
      <DemoCard
        title="Interaction states"
        description="Hover, focus, selection, and disabled values inherit shared tokens."
        full
      >
        <div className="demo-row">
          <Button>Default</Button>
          <Button className="bg-primary/90">Hover</Button>
          <Button className="ring-3 ring-ring/50">Focus</Button>
          <Button disabled>Disabled</Button>
          <Badge className="bg-accent text-primary">Selected</Badge>
          <Badge variant="destructive">Error</Badge>
        </div>
        <p className="helper mt-4">
          Every category uses the same light theme and shared interaction tokens.
        </p>
      </DemoCard>
    </>
  );
}
export function Typography() {
  return (
    <>
      <DemoCard
        title="Type scale"
        description="Inter. A clear hierarchy for dense, practical interfaces."
        full
      >
        <div className="sample-typography">
          <div>
            <Text as="p" variant="display">
              Build with clarity.
            </Text>
            <code>Display · 30px / 600</code>
          </div>
          <div>
            <Text as="h2" variant="h1">
              Every detail belongs.
            </Text>
            <code>Page heading · 26px / 600</code>
          </div>
          <div>
            <Text as="h3" variant="h2">
              A place for your next idea
            </Text>
            <code>Section heading · 20px / 600</code>
          </div>
          <div>
            <Text as="h4" variant="h3">
              Thoughtful defaults
            </Text>
            <code>Card heading · 16px / 600</code>
          </div>
          <div>
            <p>Simple, readable text for everyday work.</p>
            <code>Body · 14px / 400</code>
          </div>
          <div>
            <span className="text-muted-foreground text-sm">
              Helpful context when you need it.
            </span>
            <code>Helper · 13px / 400</code>
          </div>
        </div>
      </DemoCard>
      <DemoCard
        title="Rich text"
        description="Prose, links, quotes, and inline code."
      >
        <div className="demo-stack">
          <p>
            Your interface should feel consistent, from the{" "}
            <strong>first interaction</strong> to the last detail. Bluebox makes
            that easier.
          </p>
          <blockquote className="border-l-2 border-primary pl-4 text-muted-foreground">
            Good design is as little design as possible.
          </blockquote>
          <p>
            Compose components with{" "}
            <code className="bg-muted px-1.5 py-1 rounded text-sm">cn()</code>{" "}
            and shared tokens.
          </p>
          <a
            className="text-primary underline underline-offset-4"
            href="/?path=/story/foundations-design-tokens--palette" target="_top"
          >
            Explore the design tokens →
          </a>
        </div>
      </DemoCard>
      <DemoCard title="Lists & keyboard shortcuts">
        <ul className="list-disc pl-5 space-y-3 text-sm">
          <li>A consistent blue color palette</li>
          <li>Accessible, functional primitives</li>
          <li>Responsive by default</li>
        </ul>
        <Separator className="my-5" />
        <div className="demo-row">
          <span>Open search</span>
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
        </div>
      </DemoCard>
    </>
  );
}
export function Buttons() {
  const [loading, setLoading] = useState(false);
  const load = () => {
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      toast.success("Changes saved");
    }, 1200);
  };
  return (
    <>
      <DemoCard
        title="Button variants"
        description="Six useful variants, one consistent foundation."
        full
      >
        <div className="demo-row">
          {(
            [
              "default",
              "secondary",
              "outline",
              "ghost",
              "destructive",
              "link",
            ] as const
          ).map((variant) => (
            <Button
              key={variant}
              variant={variant}
              onClick={() => toast(`${variant} button selected`)}
            >
              {variant === "default"
                ? "Primary"
                : variant[0].toUpperCase() + variant.slice(1)}
            </Button>
          ))}
        </div>
      </DemoCard>
      <DemoCard
        title="Sizes & icon actions"
        description="Compact for tables. Comfortable for primary actions."
      >
        <div className="demo-stack">
          <div className="demo-row">
            <Button size="xs">Extra small</Button>
            <Button size="sm">Small</Button>
            <Button>Default</Button>
            <Button size="lg">Large</Button>
          </div>
          <div className="demo-row">
            <Button>
              <Plus />
              New project
            </Button>
            <Button variant="outline">
              <Download />
              Export
            </Button>
            <Button size="icon" aria-label="Add">
              <Plus />
            </Button>
            <Button size="icon" variant="outline" aria-label="Settings">
              <Settings />
            </Button>
          </div>
        </div>
      </DemoCard>
      <DemoCard
        title="States"
        description="Clear feedback while actions are in progress."
      >
        <div className="demo-stack">
          <div className="demo-row">
            <Button disabled>Disabled primary</Button>
            <Button variant="outline" disabled>
              Disabled outline
            </Button>
          </div>
          <div className="demo-row">
            <Button loading={loading} onClick={load}>
              {loading ? "Saving..." : "Save changes"}
            </Button>
            <Button loading>Loading</Button>
            <Button className="ring-3 ring-ring/50">Focus preview</Button>
          </div>
        </div>
      </DemoCard>
      <DemoCard
        title="Button group"
        description="Related actions belong together."
      >
        <div className="demo-stack">
          <ButtonGroup>
            <Button
              variant="outline"
              onClick={() => toast("Previous selected")}
            >
              Previous
            </Button>
            <Button variant="outline" onClick={() => toast("Next selected")}>
              Next
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button onClick={() => toast.success("Invoice saved")}>
              Save document
            </Button>
            <ButtonGroupSeparator />
            <Button
              size="icon"
              aria-label="More save actions"
              onClick={() => toast("Choose a save action for your document")}
            >
              <ChevronDown />
            </Button>
          </ButtonGroup>
        </div>
      </DemoCard>
      <DemoCard
        title="Toggle & toggle group"
        description="Pressed states for formatting and view controls."
      >
        <div className="demo-stack">
          <div className="demo-row">
            <Toggle aria-label="Bold">
              <Bold />
            </Toggle>
            <Toggle aria-label="Italic" variant="outline">
              <Italic />
            </Toggle>
            <Toggle aria-label="Underline" disabled>
              <Underline />
            </Toggle>
          </div>
          <ToggleGroup type="single" defaultValue="left" variant="outline">
            <ToggleGroupItem value="left" aria-label="Align left">
              <AlignLeft />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <AlignCenter />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <AlignRight />
            </ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="multiple" defaultValue={["bold"]}>
            <ToggleGroupItem value="bold" aria-label="Bold format">
              <Bold />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic format">
              <Italic />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </DemoCard>
    </>
  );
}
export function Cards() {
  return (
    <>
      <DemoCard
        title="Metric cards"
        description="Lightweight surfaces, clear numbers, useful context."
        full
      >
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            ["Revenue", "$24,680", "+12.8%", DollarSign],
            ["Customers", "1,248", "+8.2%", Users],
            ["Growth", "18.6%", "+4.3%", TrendingUp],
          ].map(([label, value, change, Icon]) => {
            const I = Icon as typeof DollarSign;
            return (
              <Card key={String(label)}>
                <CardContent>
                  <div className="flex justify-between items-center text-muted-foreground">
                    <span className="text-sm">{String(label)}</span>
                    <I size={17} />
                  </div>
                  <p className="text-2xl font-semibold mt-4">{String(value)}</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    <span className="text-[var(--success)]">
                      {String(change)}
                    </span>{" "}
                    vs. last month
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </DemoCard>
      <DemoCard
        title="Content card"
        description="Composable headers, bodies, and footers."
      >
        <Card>
          <CardHeader>
            <Badge variant="secondary" className="w-fit mb-2">
              Workspace
            </Badge>
            <CardTitle>Your next project starts here</CardTitle>
            <CardDescription>
              Bring your team, ideas, and work together.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              A flexible foundation for everything you want to build. Start with
              a template or a blank canvas.
            </p>
          </CardContent>
          <CardFooter className="gap-2">
            <Button onClick={() => toast.success("New project created")}>
              <Plus />
              Create project
            </Button>
            <Button
              variant="ghost"
              onClick={() =>
                toast("Invite teammates from your workspace settings")
              }
            >
              Learn more
              <ArrowRight />
            </Button>
          </CardFooter>
        </Card>
      </DemoCard>
      <DemoCard
        title="Aspect ratio & surfaces"
        description="Consistent media framing without layout shifts."
      >
        <AspectRatio
          ratio={16 / 9}
          className="rounded-md bg-accent border flex items-center justify-center"
        >
          <div className="text-center text-primary">
            <Layers size={40} className="mx-auto mb-3" />
            <strong className="text-sm">Room for your next idea</strong>
            <p className="text-sm mt-1">16 : 9 aspect ratio</p>
          </div>
        </AspectRatio>
        <Separator className="my-4" />
        <div className="demo-row">
          <span className="text-sm">Border radius: 6px</span>
          <Separator orientation="vertical" className="h-4" />
          <span className="text-sm text-muted-foreground">
            Subtle card shadow
          </span>
        </div>
      </DemoCard>
      <DemoCard
        title="Accordion"
        description="Progressive disclosure, with keyboard navigation."
        full
      >
        <Accordion type="single" collapsible defaultValue="one">
          <AccordionItem value="one">
            <AccordionTrigger>
              What makes this a reusable design system?
            </AccordionTrigger>
            <AccordionContent>
              Every component uses centralized semantic tokens for colors,
              spacing, borders, and interaction states. Pages use the same
              reusable building blocks.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="two">
            <AccordionTrigger>
              How do I customize the theme?
            </AccordionTrigger>
            <AccordionContent>
              Update the semantic variables in theme.css. Shared values apply
              consistently to overlays, charts, forms, and navigation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="three">
            <AccordionTrigger>
              Can I use this for a data-heavy application?
            </AccordionTrigger>
            <AccordionContent>
              The boxed shell, compact type scale, accessible controls, and
              responsive tables are designed for everyday business workflows.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </DemoCard>
      <DemoCard
        title="Items & separators"
        description="Reusable rows for contacts, files, and actions."
      >
        <ItemGroup>
          <Item variant="outline">
            <ItemMedia>
              <Avatar>
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Alex Morgan</ItemTitle>
              <ItemDescription>Workspace administrator</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Contact Alex"
                onClick={() => toast("alex@example.com")}
              >
                <Mail />
              </Button>
            </ItemActions>
          </Item>
          <ItemSeparator />
          <Item>
            <ItemMedia variant="icon">
              <FileText />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Design system guide</ItemTitle>
              <ItemDescription>Updated today · Draft</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  toast("Open a component from Storybook’s sidebar");
                }}
              >
                Open
              </Button>
            </ItemActions>
          </Item>
        </ItemGroup>
      </DemoCard>
      <DemoCard
        title="Empty state"
        description="A useful next step when there’s nothing to show."
      >
        <Empty className="border border-dashed">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Inbox />
            </EmptyMedia>
            <EmptyTitle>No projects yet</EmptyTitle>
            <EmptyDescription>
              Your next great idea needs a place to start.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button onClick={() => toast.success("First project created")}>
              <Plus />
              Create your first project
            </Button>
          </EmptyContent>
        </Empty>
      </DemoCard>
    </>
  );
}
export function Tables() {
  return (
    <>
      <DemoCard
        title="Data table"
        description="Search, sort by amount, select rows, paginate, and export CSV."
        full
      >
        <DataTable rows={rows} />
      </DemoCard>
      <DemoCard
        title="Simple table"
        description="Subtle header backgrounds and consistent row spacing."
        full
      >
        <Table>
          <TableCaption>A list of your recent payments.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Payment method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["INV-0041", "Paid", "Bank transfer", "$2,400.00"],
              ["INV-0040", "Pending", "Credit card", "$1,850.00"],
              ["INV-0039", "Paid", "Bank transfer", "$4,200.00"],
            ].map((row) => (
              <TableRow key={row[0]}>
                {row.map((cell, i) => (
                  <TableCell key={i} className={i === 3 ? "text-right" : ""}>
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$8,450.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </DemoCard>
      <DemoCard
        title="Badges"
        description="Compact status indicators, with semantic variants."
      >
        <div className="demo-stack">
          <div className="demo-row">
            <Badge>Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
          <div className="demo-row">
            <Badge className="bg-[var(--success-soft)] text-[var(--success)]">
              <Check />
              Paid
            </Badge>
            <Badge className="bg-[var(--warning-soft)] text-[var(--warning)]">
              Pending
            </Badge>
            <Badge className="bg-[var(--error-soft)] text-destructive">
              Overdue
            </Badge>
            <Badge variant="secondary">Draft</Badge>
          </div>
        </div>
      </DemoCard>
      <DemoCard
        title="Avatars"
        description="Images, meaningful initials, and fallback states."
      >
        <div className="demo-row">
          <Avatar className="size-12">
            <AvatarFallback className="bg-accent text-primary">
              AM
            </AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>JL</AvatarFallback>
          </Avatar>
          <Avatar className="size-8">
            <AvatarImage src="/missing-avatar.png" alt="Sam Lee" />
            <AvatarFallback>SL</AvatarFallback>
          </Avatar>
          <div className="flex -space-x-2">
            <Avatar className="border-2 border-card">
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-card">
              <AvatarFallback>JL</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-card">
              <AvatarFallback>+4</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </DemoCard>
      <DemoCard
        title="Revenue chart"
        description="Recharts with theme-aware axes, tooltips, and legend."
        full
      >
        <ChartContainer config={chartConfig} className="h-64 w-full">
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="revenue"
              fill="var(--color-revenue)"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="expenses"
              fill="var(--color-expenses)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </DemoCard>
    </>
  );
}
export function Feedback() {
  const [progress, setProgress] = useState(68);
  return (
    <>
      <DemoCard
        title="Alerts"
        description="Useful context with clear visual priority."
        full
      >
        <div className="demo-stack">
          <Alert>
            <Info />
            <AlertTitle>A little context goes a long way</AlertTitle>
            <AlertDescription>
              Your draft is saved locally on this device.
            </AlertDescription>
          </Alert>
          <Alert className="bg-[var(--success-soft)] text-[var(--success)] border-transparent">
            <CircleCheck />
            <AlertTitle>Invoice saved successfully</AlertTitle>
            <AlertDescription className="text-[var(--success)]">
              Everything is ready for your review.
            </AlertDescription>
          </Alert>
          <Alert className="bg-[var(--warning-soft)] text-[var(--warning)] border-transparent">
            <TriangleAlert />
            <AlertTitle>Payment due soon</AlertTitle>
            <AlertDescription className="text-[var(--warning)]">
              This invoice is due in three days.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <TriangleAlert />
            <AlertTitle>Something needs your attention</AlertTitle>
            <AlertDescription>
              Check the email address and try again.
            </AlertDescription>
          </Alert>
        </div>
      </DemoCard>
      <DemoCard
        title="Progress"
        description="A clear signal for work in motion."
      >
        <div className="demo-stack">
          <div className="flex justify-between text-sm">
            <span>Workspace setup</span>
            <strong>{progress}%</strong>
          </div>
          <Progress aria-label="Workspace setup" value={progress} />
          <div className="demo-row">
            <Button
              variant="outline"
              size="sm"
              disabled={progress === 100}
              onClick={() => setProgress(Math.min(100, progress + 8))}
            >
              Continue setup
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setProgress(0)}>
              Reset
            </Button>
          </div>
          <Separator />
          <Progress aria-label="Completed upload" value={100} />
          <p className="text-sm text-[var(--success)]">✓ Upload complete</p>
        </div>
      </DemoCard>
      <DemoCard
        title="Skeleton & spinner"
        description="Calm loading placeholders that preserve layout."
      >
        <div className="demo-stack">
          <div className="flex gap-4">
            <Skeleton className="size-10 rounded-full" />
            <div className="space-y-2 flex-1">
              <Skeleton className="h-3 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          </div>
          <Skeleton className="h-24 w-full" />
          <div className="demo-row">
            <Spinner />
            <span className="text-sm text-muted-foreground">
              Loading your workspace...
            </span>
            <Spinner className="size-6 text-primary" />
          </div>
        </div>
      </DemoCard>
      <DemoCard
        title="Toast notifications"
        description="Sonner feedback with accessible, dismissible messages."
        full
      >
        <div className="demo-row">
          <Button
            variant="outline"
            onClick={() => toast("Your changes have been saved")}
          >
            Default
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.success("Invoice saved successfully")}
          >
            Success
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.warning("Your payment is due soon")}
          >
            Warning
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.error("Please check your email address")}
          >
            Error
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.info("You have two new notifications")}
          >
            Info
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast("Invoice archived", {
                action: {
                  label: "Undo",
                  onClick: () => toast.success("Invoice restored"),
                },
              })
            }
          >
            With action
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.promise(
                new Promise((resolve) => setTimeout(resolve, 1500)),
                {
                  loading: "Preparing export...",
                  success: "Export ready",
                  error: "Export failed",
                },
              )
            }
          >
            Promise
          </Button>
        </div>
      </DemoCard>
    </>
  );
}
export function Advanced() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <DemoCard
        title="Carousel"
        description="Keyboard-friendly slides, built on Embla."
        full
      >
        <Carousel className="mx-12" opts={{ loop: true }}>
          <CarouselContent>
            {[
              "Plan with intention",
              "Build with consistency",
              "Ship with confidence",
            ].map((title, i) => (
              <CarouselItem key={title} className="sm:basis-1/2">
                <div className="h-48 rounded-md border bg-accent flex flex-col items-center justify-center">
                  <span className="text-primary text-4xl font-semibold mb-4">
                    0{i + 1}
                  </span>
                  <strong className="text-sm">{title}</strong>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </DemoCard>
      <DemoCard
        title="Collapsible"
        description="Expand the details you need, keep the rest quiet."
      >
        <Collapsible open={open} onOpenChange={setOpen}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm">Project files</h3>
            <CollapsibleTrigger asChild>
              <Button variant="outline" size="sm">
                {open ? "Hide" : "Show"} all
                <ChevronDown />
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="rounded border p-3 text-sm">brand-guidelines.pdf</div>
          <CollapsibleContent className="space-y-2 mt-2">
            <div className="rounded border p-3 text-sm">website-design.fig</div>
            <div className="rounded border p-3 text-sm">
              project-proposal.docx
            </div>
          </CollapsibleContent>
        </Collapsible>
      </DemoCard>
      <DemoCard
        title="Scroll area"
        description="Long content with a contained, accessible scroll surface."
      >
        <ScrollArea className="h-48 rounded-md border p-4">
          <h3 className="text-sm mb-3">Recent activity</h3>
          {Array.from({ length: 16 }, (_, i) => (
            <div key={i} className="py-3 border-b text-sm">
              <span className="text-muted-foreground mr-3">
                {String(i + 1).padStart(2, "0")}
              </span>
              {
                [
                  "Invoice saved",
                  "Project updated",
                  "Comment added",
                  "Payment received",
                ][i % 4]
              }
            </div>
          ))}
        </ScrollArea>
      </DemoCard>
      <DemoCard
        title="Resizable panels"
        description="Drag the divider or use arrow keys to adjust the split."
        full
      >
        <ResizablePanelGroup
          orientation="horizontal"
          className="min-h-52 rounded-md border"
        >
          <ResizablePanel defaultSize="35%" minSize="20%">
            <div className="h-52 grid place-items-center bg-muted text-sm">
              Navigation panel
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize="65%" minSize="25%">
            <div className="h-52 grid place-items-center text-sm">
              Content panel
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </DemoCard>
      <DemoCard
        title="Area chart"
        description="Another data view using the same semantic chart palette."
        full
      >
        <ChartContainer config={chartConfig} className="h-56 w-full">
          <AreaChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              dataKey="revenue"
              fill="var(--color-revenue)"
              fillOpacity={0.12}
              stroke="var(--color-revenue)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </DemoCard>
      <DemoCard
        title="Component coverage"
        description="All installed registry components plus composed date picker, data table, and typography."
        full
      >
        <div className="coverage-grid">
          {componentNames.map((name) => (
            <div key={name}>
              <Check />
              <span>{name}</span>
            </div>
          ))}
        </div>
        <p className="helper mt-5">
          All components inherit the shared theme. The sidebar navigation
          organizes their interactive previews by category.
        </p>
      </DemoCard>
    </>
  );
}
