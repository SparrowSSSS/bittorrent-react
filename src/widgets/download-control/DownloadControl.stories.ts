import { DownloadControl } from "./ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DownloadControl> = {
    title: "DownloadControl",
    component: DownloadControl,
    args: {
        electronApi: {
            finishDowload(callback) {
                return callback;
            },
            destroyDownload() {
                return;
            },
            getDownloadData(callback) {
                callback({
                    progress: 50,
                    speed: 1000,
                    timeRemaining: 1000,
                    magnetUrl: ""
                });
            },
            setPause(state, callback) {
                callback ? callback() : null;

                return state;
            }
        }
    }
};

export default meta;
type Story = StoryObj<typeof DownloadControl>;

export const Default: Story = {};
