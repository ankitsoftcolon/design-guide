import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "@/components/ui/textarea";
const meta = {
  title: "Forms/Textarea",
  component: Textarea,
  args: {
    placeholder: "Write a message",
    "aria-label": "Message",
    disabled: false,
    rows: 4,
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ padding: 24, maxWidth: 560 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Textarea>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
export const Invalid: Story = { args: { "aria-invalid": true } };
