import { developerSource } from "../../.storybook/source-code";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Cards } from "@/components/showcase/catalog";
import { DemoFilter } from "@/components/showcase/demo-filter";
const meta = {
  title: "Layout/Aspect Ratio",
  parameters: {
    docs: {
      source: { code: developerSource("", { title: "Layout/Aspect Ratio" }) },
      description: {
        component:
          "Interactive aspect ratio composition using the Bluebox light theme. Source components live in src/components/ui/aspect-ratio.tsx.",
      },
    },
  },
  render: () => (
    <DemoFilter title="Aspect ratio & surfaces">
      <Cards />
    </DemoFilter>
  ),
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Preview: Story = {};
