import { FC, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { DarkBackground } from "./dark-background";
import { Container } from "./container";
import { DragEvents } from "@/shared/lib/drag-events";
import { Outlet, useNavigate } from "react-router-dom";
import { paths } from "@/shared/router";
import { localStorages } from "@/shared/consts";
import { useTorrentId } from "@/shared/hooks";

export const Root: FC = () => {
    const darkTheme = createTheme({
        palette: {
            mode: "dark"
        }
    });

    const DE = new DragEvents();

    const navigate = useNavigate();

    const sendTorrentId = useTorrentId();

    useEffect(() => {
        navigate(paths.home);

        const id = localStorage.getItem(localStorages.torrentId);

        if (id) {
            sendTorrentId(id);
        }
    }, []);

    return (
        <DarkBackground
            onDrop={DE.getDragEvent()}
            onDragOver={DE.getDragEvent()}
        >
            <ThemeProvider theme={darkTheme}>
                <Container>
                    <Outlet />
                </Container>
            </ThemeProvider>
        </DarkBackground>
    );
};
