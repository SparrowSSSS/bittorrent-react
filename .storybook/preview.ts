import type { Preview } from "@storybook/react";

const preview: Preview = {
    parameters: {
        backgrounds: {
            default: "bittorent",
            values: [{ name: "bittorent", value: "#212121" }]
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    }
};

export default preview;
