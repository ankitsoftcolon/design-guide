import { developerSource } from "../../.storybook/source-code";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Typography } from "@/components/showcase/catalog";
import { DemoFilter } from "@/components/showcase/demo-filter";
const meta = {
  title: "Foundations/Kbd",
  parameters: { docs: { source: { code: developerSource("", { title: "Foundations/Kbd" }) } } },
  render: () => (
    <DemoFilter title="Lists & keyboard shortcuts">
      <Typography />
    </DemoFilter>
  ),
} satisfies Meta;
export default meta;
export const Preview: StoryObj<typeof meta> = {};
