import type { Meta, StoryObj } from "@storybook/react-vite";
import { Slider } from "@/components/ui/slider";
const meta = {
  title: "Forms/Slider",
  component: Slider,
  args: {
    "aria-label": "Volume",
    defaultValue: [45],
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ padding: 24, maxWidth: 560 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Slider>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Range: Story = { args: { defaultValue: [20, 70] } };
export const Disabled: Story = { args: { disabled: true } };
