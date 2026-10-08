import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@/components/ui/button";
import { fn, expect, userEvent, within } from "storybook/test";
const meta = {
  title: "Actions/Button",
  component: Button,
  args: {
    children: "Save changes",
    variant: "default",
    size: "default",
    disabled: false,
    loading: false,
    onClick: fn(),
  },
  argTypes: {
    asChild: { control: false },
    type: { control: "select", options: ["button", "submit", "reset"] },
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "outline",
        "ghost",
        "destructive",
        "link",
      ],
    },
    size: { control: "select", options: ["default", "xs", "sm", "lg", "icon"] },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 24, maxWidth: 560 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "Save changes" }));
    await expect(args.onClick).toHaveBeenCalled();
  },
};
export const Disabled: Story = { args: { disabled: true } };
export const Loading: Story = { args: { loading: true } };
export const Outline: Story = { args: { variant: "outline" } };
export const Small: Story = { args: { size: "sm" } };
