import { useState } from "react";
import {
  Home,
  FileText,
  Plus,
  Search,
  Settings,
  User,
  CreditCard,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { DemoCard } from "./demo-card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuCheckboxItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
} from "@/components/ui/context-menu";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
} from "@/components/ui/menubar";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { toast } from "sonner";
export function NavigationDemos() {
  const [page, setPage] = useState(1),
    [checked, setChecked] = useState(true),
    [density, setDensity] = useState("comfortable");
  return (
    <>
      <DemoCard
        title="Tabs"
        description="Switch sections without losing context."
      >
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="disabled" disabled>
              Archived
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="overview"
            className="p-5 mt-4 bg-muted rounded-md"
          >
            <h3 className="mb-2">Your workspace at a glance</h3>
            <p className="text-muted-foreground text-sm">
              24 projects · 8 team members · Everything in sync.
            </p>
          </TabsContent>
          <TabsContent
            value="activity"
            className="p-5 mt-4 bg-muted rounded-md"
          >
            Alex created invoice INV-0042 today.
          </TabsContent>
          <TabsContent
            value="settings"
            className="p-5 mt-4 bg-muted rounded-md"
          >
            <Button
              variant="outline"
              onClick={() => toast.success("Workspace settings saved")}
            >
              Save workspace settings
            </Button>
          </TabsContent>
        </Tabs>
      </DemoCard>
      <DemoCard
        title="Breadcrumb & pagination"
        description="Keep your place, even in larger applications."
      >
        <div className="demo-stack">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/?path=/story/foundations-design-tokens--palette" target="_top">
                  <Home size={15} />
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/?path=/story/layout-card--preview" target="_top">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Explore cards</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <hr />
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#navigation"
                  aria-disabled={page === 1}
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(Math.max(1, page - 1));
                  }}
                />
              </PaginationItem>
              {[1, 2, 3].map((n) => (
                <PaginationItem key={n}>
                  <PaginationLink
                    href="#navigation"
                    isActive={page === n}
                    onClick={(e) => {
                      e.preventDefault();
                      setPage(n);
                    }}
                  >
                    {n}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  href="#navigation"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(Math.min(3, page + 1));
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
          <p className="text-sm text-muted-foreground text-center">
            Page {page} of 3 · 30 results
          </p>
        </div>
      </DemoCard>
      <DemoCard
        title="Dropdown & context menus"
        description="Actions, checked settings, submenus, and radio selection."
      >
        <div className="demo-stack">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Workspace actions
                <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Workspace</DropdownMenuLabel>
              <DropdownMenuItem onSelect={() => toast("Create a new project")}>
                <Plus />
                New project
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => toast("Profile selected")}>
                <User />
                Profile
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={checked}
                onCheckedChange={setChecked}
              >
                Show archived projects
              </DropdownMenuCheckboxItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Display density</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuRadioGroup
                    value={density}
                    onValueChange={setDensity}
                  >
                    <DropdownMenuRadioItem value="comfortable">
                      Comfortable
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="compact">
                      Compact
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuItem disabled>Export (coming soon)</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="text-destructive"
                onSelect={() => toast("Local demo: no session to sign out")}
              >
                <LogOut />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ContextMenu>
            <ContextMenuTrigger className="grid place-items-center border border-dashed rounded-md h-32 text-muted-foreground text-sm">
              Right-click here for contextual actions
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem onSelect={() => toast.success("Item copied")}>
                Copy
              </ContextMenuItem>
              <ContextMenuItem onSelect={() => toast("Item renamed")}>
                Rename
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem
                className="text-destructive"
                onSelect={() => toast("Demo item removed")}
              >
                Delete
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </div>
      </DemoCard>
      <DemoCard
        title="Navigation menu & menubar"
        description="Structured menus for websites and application tools."
      >
        <div className="demo-stack">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-64 p-3">
                    <NavigationMenuLink href="/?path=/story/foundations-design-tokens--palette" target="_top">
                      Design tokens
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/?path=/story/actions-button--primary" target="_top">
                      Component variants
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/?path=/story/layout-card--preview" target="_top">
                      Layout examples
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/?path=/story/advanced-carousel--preview" target="_top" className="px-3">
                  Components
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem onSelect={() => toast("New document created")}>
                  New document<MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem onSelect={() => toast.success("Document saved")}>
                  Save<MenubarShortcut>⌘S</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem disabled>Print</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem onSelect={() => toast("Undo selected")}>
                  Undo
                </MenubarItem>
                <MenubarItem onSelect={() => toast("Redo selected")}>
                  Redo
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarItem onSelect={() => toast("Zoom: 100%")}>
                  Actual size
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </DemoCard>
      <DemoCard
        title="Command palette"
        description="Filter with the keyboard. Also available globally with ⌘K."
      >
        <Command className="border rounded-md">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem
                onSelect={() => {
                  toast("Explore Card in the Storybook sidebar");
                }}
              >
                <FileText />
                Explore cards<CommandShortcut>⌘I</CommandShortcut>
              </CommandItem>
              <CommandItem
                onSelect={() => {
                  toast("Explore Design Tokens in the Storybook sidebar");
                }}
              >
                <Search />
                Explore design tokens
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem onSelect={() => toast("Profile selected")}>
                <User />
                Profile
              </CommandItem>
              <CommandItem onSelect={() => toast("Billing selected")}>
                <CreditCard />
                Billing
              </CommandItem>
              <CommandItem onSelect={() => toast("Settings selected")}>
                <Settings />
                Settings
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DemoCard>
      <DemoCard
        title="Sidebar primitive"
        description="The registry sidebar API, with the same shared tokens."
      >
        <SidebarProvider
          className="min-h-64 h-64 border rounded-md overflow-hidden"
          style={{ "--sidebar-width": "12rem" } as React.CSSProperties}
        >
          <Sidebar
            collapsible="icon"
            className="!relative !inset-auto !h-full"
            variant="sidebar"
          >
            <SidebarHeader className="px-4 font-semibold">
              Bluebox
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Workspace</SidebarGroupLabel>
                <SidebarMenu>
                  {[
                    ["Home", Home],
                    ["Components", FileText],
                    ["Settings", Settings],
                  ].map(([name, Icon]) => {
                    const I = Icon as typeof Home;
                    return (
                      <SidebarMenuItem key={String(name)}>
                        <SidebarMenuButton
                          isActive={name === "Components"}
                          onClick={() => toast(`${name} selected`)}
                          tooltip={String(name)}
                        >
                          <I />
                          <span>{String(name)}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="text-sm text-muted-foreground">
              Bluebox workspace
            </SidebarFooter>
          </Sidebar>
          <div className="p-3">
            <SidebarTrigger />
            <p className="text-sm text-muted-foreground mt-5">
              Toggle this sidebar independently.
            </p>
          </div>
        </SidebarProvider>
      </DemoCard>
    </>
  );
}
