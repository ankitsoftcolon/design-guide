import { developerSource } from "../../.storybook/source-code";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Forms } from "@/components/showcase/forms";
import { DemoFilter } from "@/components/showcase/demo-filter";
const meta = {
  title: "Forms/Input OTP",
  parameters: {
    docs: {
      source: { code: developerSource("", { title: "Forms/Input OTP" }) },
      description: {
        component:
          "Interactive input otp composition using the Bluebox light theme. Source components live in src/components/ui/input-otp.tsx.",
      },
    },
  },
  render: () => (
    <DemoFilter title="Slider & one-time password">
      <Forms />
    </DemoFilter>
  ),
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Preview: Story = {};
