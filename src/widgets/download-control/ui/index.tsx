import { Progress } from "@/shared/ui/progress";
import { FC, useEffect, useState } from "react";
import { Container } from "./container";
import {
    ElectronAPI,
    getPersent,
    PauseState,
    useDestroyTorrent
} from "../model";
import { defaultDownloadData } from "../consts";
import { ProgressCounter } from "@/entities/progress-counter";
import { StatusDownload } from "@/entities/status-download";
import { Actions } from "./actions";
import { Footer } from "./footer";
import { Cancel, Pause, PlayArrow } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { paths } from "@/shared/router";
import { localStorages } from "@/shared/consts";
import { DownloadData } from "@/shared/api";

interface Props {
    electronApi?: ElectronAPI;
}

export const DownloadControl: FC<Props> = ({
    electronApi = window.electronAPI
}) => {
    const [downloadData, setDownloadData] = useState({
        ...defaultDownloadData
    });
    const [ready, setReady] = useState(false);
    const [pause, setPause] = useState<PauseState>({
        value: false,
        permission: true
    });
    const [finish, setFinish] = useState(false);

    const destroyTorrent = useDestroyTorrent(electronApi);

    const navigate = useNavigate();

    const getDownloadData = (data: DownloadData) => {
        if (!ready) setReady(true);

        setDownloadData({
            ...data,
            progress: Math.max(data.progress, downloadData.progress)
        });

        localStorage.setItem(localStorages.torrentId, data.magnetUrl);
    };

    const handlePause = () => {
        if (pause.permission) {
            const newState = !pause.value;

            setPause({ value: newState, permission: false });

            electronApi.setPause({ state: newState }, () => {
                setPause({ value: newState, permission: true });

                if (newState) {
                    setDownloadData({
                        ...defaultDownloadData,
                        progress: downloadData.progress
                    });
                }
            });
        }
    };

    const getActions = () => {
        if (!finish) {
            return (
                <>
                    <IconButton onClick={handlePause}>
                        {pause.value ? (
                            <PlayArrow fontSize="large" />
                        ) : (
                            <Pause fontSize="large" />
                        )}
                    </IconButton>
                    <IconButton color="error" onClick={destroyTorrent}>
                        <Cancel fontSize="large" />
                    </IconButton>
                </>
            );
        } else {
            return (
                <Button onClick={() => navigate(paths.home)} variant="text">
                    На главную
                </Button>
            );
        }
    };

    useEffect(() => {
        electronApi.getDownloadData((data: DownloadData) =>
            getDownloadData(data)
        );

        electronApi.finishDowload(() => {
            setFinish(true);

            setDownloadData({ ...defaultDownloadData, progress: 100 });

            localStorage.removeItem(localStorages.torrentId);
        });
    }, []);

    return (
        <Container>
            <ProgressCounter progress={getPersent(downloadData.progress)} />
            <Progress progress={getPersent(downloadData.progress)} />
            <Footer>
                <StatusDownload
                    finish={finish}
                    pause={pause.value}
                    ready={ready}
                    speed={downloadData.speed}
                    time={downloadData.timeRemaining}
                />
                <Actions>{getActions()}</Actions>
            </Footer>
        </Container>
    );
};
