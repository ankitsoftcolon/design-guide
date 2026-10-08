import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@/components/ui/input";
const meta = {
  title: "Forms/Input",
  component: Input,
  args: {
    placeholder: "Enter your name",
    "aria-label": "Your name",
    disabled: false,
    type: "text",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search"],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 24, maxWidth: 560 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
export const Invalid: Story = {
  args: { "aria-invalid": true, defaultValue: "Invalid value" },
};
