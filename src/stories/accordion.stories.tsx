import { developerSource } from "../../.storybook/source-code";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Cards } from "@/components/showcase/catalog";
import { DemoFilter } from "@/components/showcase/demo-filter";
const meta = {
  title: "Layout/Accordion",
  parameters: {
    docs: {
      source: { code: developerSource("", { title: "Layout/Accordion" }) },
      description: {
        component:
          "Interactive accordion composition using the Bluebox light theme. Source components live in src/components/ui/accordion.tsx.",
      },
    },
  },
  render: () => (
    <DemoFilter title="Accordion">
      <Cards />
    </DemoFilter>
  ),
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Preview: Story = {};
