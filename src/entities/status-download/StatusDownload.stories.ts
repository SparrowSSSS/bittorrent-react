import { StatusDownload } from "./ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof StatusDownload> = {
    title: "StatusDownload",
    component: StatusDownload
};

export default meta;
type Story = StoryObj<typeof StatusDownload>;

export const Default: Story = {
    args: {
        finish: false,
        speed: 0,
        time: 0,
        pause: false,
        ready: false
    }
};