import type { Meta, StoryObj } from "@storybook/react-vite";
import { Typography } from "@/components/ui/typography";
const meta = {
  title: "Foundations/Typography",
  component: Typography,
  args: { children: "Design for clarity.", variant: "body" },
  argTypes: {
    variant: {
      control: "select",
      options: ["display", "h1", "h2", "h3", "body", "label", "helper", "code"],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 24, maxWidth: 560 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Typography>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Heading: Story = { args: { variant: "h1" } };
export const Helper: Story = { args: { variant: "helper" } };
