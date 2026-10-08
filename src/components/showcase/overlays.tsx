import { useState } from "react";
import { Bell, Info, ArrowRight } from "lucide-react";
import { DemoCard } from "./demo-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "sonner";
export function Overlays() {
  const [dialog, setDialog] = useState(false),
    [name, setName] = useState("Alex Morgan");
  return (
    <>
      <DemoCard
        title="Dialog"
        description="Focused tasks with an accessible modal and focus restoration."
      >
        <div className="demo-stack">
          <p className="text-sm text-muted-foreground">
            Edit account details in a centered dialog. Press Escape or click
            outside to dismiss.
          </p>
          <Dialog open={dialog} onOpenChange={setDialog}>
            <DialogTrigger asChild>
              <Button>
                Edit profile
                <ArrowRight />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile. Click save when you’re done.
                </DialogDescription>
              </DialogHeader>
              <div className="demo-stack py-4">
                <Label htmlFor="profile-name">Full name</Label>
                <Input
                  id="profile-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button
                  onClick={() => {
                    setDialog(false);
                    toast.success("Profile updated", { description: name });
                  }}
                >
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </DemoCard>
      <DemoCard
        title="Alert dialog"
        description="Deliberate confirmation for destructive actions."
      >
        <div className="demo-stack">
          <p className="text-sm text-muted-foreground">
            Clear language, a safe cancel action, and a distinct destructive
            button.
          </p>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Delete draft</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete this draft?</AlertDialogTitle>
                <AlertDialogDescription>
                  This removes the example draft from this preview. Your saved
                  invoice remains available.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Keep draft</AlertDialogCancel>
                <AlertDialogAction
                  className="bg-destructive text-white hover:bg-destructive/90"
                  onClick={() => toast.success("Example draft deleted")}
                >
                  Delete draft
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </DemoCard>
      <DemoCard
        title="Sheet"
        description="A side panel for secondary details and navigation."
      >
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <Bell />
              Open notifications
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Notifications</SheetTitle>
              <SheetDescription>
                You’re all caught up on the important things.
              </SheetDescription>
            </SheetHeader>
            <div className="p-6 demo-stack">
              <div className="p-4 rounded-md bg-accent">
                <strong className="text-sm">Design system ready</strong>
                <p className="text-sm text-muted-foreground mt-2">
                  Your themed components are ready to explore.
                </p>
              </div>
              <div className="p-4 rounded-md bg-muted">
                <strong className="text-sm">Invoice draft created</strong>
                <p className="text-sm text-muted-foreground mt-2">
                  Continue editing INV-2026-0042.
                </p>
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button>Mark as read</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </DemoCard>
      <DemoCard
        title="Drawer"
        description="A touch-friendly bottom overlay powered by Vaul."
      >
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Review monthly goal</Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Set your monthly goal</DrawerTitle>
                <DrawerDescription>
                  Give your team something to work toward.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <Label htmlFor="goal">Revenue goal ($)</Label>
                <Input
                  id="goal"
                  type="number"
                  min="0"
                  defaultValue="10000"
                  className="mt-3"
                />
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button onClick={() => toast.success("Monthly goal updated")}>
                    Save goal
                  </Button>
                </DrawerClose>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </DemoCard>
      <DemoCard
        title="Popover"
        description="Lightweight settings anchored to their trigger."
      >
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Display settings</Button>
          </PopoverTrigger>
          <PopoverContent>
            <h3 className="mb-2 text-sm">Dimensions</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Set the dimensions for the panel.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" />
              <Label htmlFor="height">Height</Label>
              <Input id="height" defaultValue="Auto" />
            </div>
          </PopoverContent>
        </Popover>
      </DemoCard>
      <DemoCard
        title="Hover card & tooltip"
        description="Helpful detail, available without leaving the page."
      >
        <div className="demo-row">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">@alexmorgan</Button>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="demo-row">
                <Avatar>
                  <AvatarFallback>AM</AvatarFallback>
                </Avatar>
                <div>
                  <h3>Alex Morgan</h3>
                  <p className="text-sm text-muted-foreground">
                    Workspace administrator
                  </p>
                </div>
              </div>
              <p className="text-sm mt-3">
                Creating thoughtful digital experiences, one component at a
                time.
              </p>
            </HoverCardContent>
          </HoverCard>
          {["top", "right", "bottom", "left"].map((side) => (
            <Tooltip key={side}>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label={`${side} tooltip`}
                >
                  <Info />
                </Button>
              </TooltipTrigger>
              <TooltipContent side={side as "top"}>
                Helpful information · {side}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </DemoCard>
    </>
  );
}
