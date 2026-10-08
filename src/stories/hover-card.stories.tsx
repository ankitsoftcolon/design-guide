import { developerSource } from "../../.storybook/source-code";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Overlays } from "@/components/showcase/overlays";
import { DemoFilter } from "@/components/showcase/demo-filter";
const meta = {
  title: "Overlays/Hover Card",
  parameters: {
    docs: {
      source: { code: developerSource("", { title: "Overlays/Hover Card" }) },
      description: {
        component:
          "Interactive hover card composition using the Bluebox light theme. Source components live in src/components/ui/hover-card.tsx.",
      },
    },
  },
  render: () => (
    <DemoFilter title="Hover card & tooltip">
      <Overlays />
    </DemoFilter>
  ),
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Preview: Story = {};
