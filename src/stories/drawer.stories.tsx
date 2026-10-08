import { developerSource } from "../../.storybook/source-code";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Overlays } from "@/components/showcase/overlays";
import { DemoFilter } from "@/components/showcase/demo-filter";
const meta = {
  title: "Overlays/Drawer",
  parameters: {
    docs: {
      source: { code: developerSource("", { title: "Overlays/Drawer" }) },
      description: {
        component:
          "Interactive drawer composition using the Bluebox light theme. Source components live in src/components/ui/drawer.tsx.",
      },
    },
  },
  render: () => (
    <DemoFilter title="Drawer">
      <Overlays />
    </DemoFilter>
  ),
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Preview: Story = {};
