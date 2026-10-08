import { developerSource } from "../../.storybook/source-code";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Overlays } from "@/components/showcase/overlays";
import { DemoFilter } from "@/components/showcase/demo-filter";
const meta = {
  title: "Overlays/Popover",
  parameters: {
    docs: {
      source: { code: developerSource("", { title: "Overlays/Popover" }) },
      description: {
        component:
          "Interactive popover composition using the Bluebox light theme. Source components live in src/components/ui/popover.tsx.",
      },
    },
  },
  render: () => (
    <DemoFilter title="Popover">
      <Overlays />
    </DemoFilter>
  ),
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Preview: Story = {};
