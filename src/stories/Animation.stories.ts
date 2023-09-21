import type { Meta, StoryObj } from "@storybook/svelte";

import Animation from "$lib/components/Animation.svelte";

const meta = {
    title: "Example/Animation",
    component: Animation,
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<Animation>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary: Story = {
    args: {},
};
