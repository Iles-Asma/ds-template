import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "./chip";

const meta = {
  title: "Components/Chip",
  component: Chip,
  argTypes: {
    children: {
      control: "text",
    },
    variant: {
      options: ["default", "success", "error"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
