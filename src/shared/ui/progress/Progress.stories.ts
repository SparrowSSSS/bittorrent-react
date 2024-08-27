import { Progress } from "./ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Progress> = {
    title: "Progress",
    component: Progress,
    argTypes: {
        progress: {
            description: "Прогресс в процентах"
        },
        backgroudColor: {
            control: {
                type: "color"
            }
        }
    }
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
    args: {
        progress: 50
    }
};
