import { FC, PropsWithChildren } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { DarkBackground } from "./dark-background";
import { Container } from "./container";
import { DragEvents } from "@/shared/lib/drag-events";

export const Root: FC<PropsWithChildren> = ({ children }) => {
    const darkTheme = createTheme({
        palette: {
            mode: "dark"
        }
    });

    const DE = new DragEvents();

    return (
        <DarkBackground onDrop={DE.getDragEvent()} onDragOver={DE.getDragEvent()}>
            <ThemeProvider theme={darkTheme}>
                <Container>{children}</Container>
            </ThemeProvider>
        </DarkBackground>
    );
};
