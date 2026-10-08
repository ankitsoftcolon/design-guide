import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "@/components/ui/switch";
const meta = {
  title: "Forms/Switch",
  component: Switch,
  args: { "aria-label": "Notifications", disabled: false },
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ padding: 24, maxWidth: 560 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Switch>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Enabled: Story = { args: { defaultChecked: true } };
export const Disabled: Story = { args: { disabled: true } };
