import { Progress } from "@/shared/ui/progress";
import { FC, useCallback, useEffect, useState } from "react";
import { Container } from "./container";
import { Button } from "@mui/material";
import { DownloadData } from "@/electron";
import { getPersent } from "../model";
import { defaultDownloadData } from "../consts";
import { ProgressCounter } from "@/entities/progress-counter";

export const DownloadControl: FC = () => {
    const [downloadData, setDownloadData] = useState({
        ...defaultDownloadData
    });
    const [ready, setReady] = useState(false);
    const [pause, setPause] = useState({ value: false, permission: true });
    const [finish, setFinish] = useState(false);

    const getDownloadData = useCallback(
        (data: DownloadData) => {
            if (!ready) setReady(true);

            setDownloadData({
                ...data,
                progress: getPersent(data.progress)
            });
        },
        [ready]
    );

    useEffect(() => {
        window.electronAPI.getDownloadData((data: DownloadData) =>
            getDownloadData(data)
        );

        window.electronAPI.finishDowload(() => {
            setFinish(true);

            setDownloadData({ ...defaultDownloadData, progress: 100 });
        });
    }, []);

    return (
        <Container>
            <ProgressCounter progress={downloadData.progress} />
            <Progress progress={downloadData.progress} />
            <Button
                onClick={() => {
                    if (pause.permission) {
                        window.electronAPI.setPause(!pause.value);
                        setPause({ value: !pause.value, permission: false });

                        setTimeout(
                            () =>
                                setPause({
                                    value: !pause.value,
                                    permission: true
                                }),
                            1000
                        );
                    }
                }}
            >
                {pause.value ? "Убрать паузу" : "Пауза"}
            </Button>
            <Button onClick={() => window.electronAPI.destroyDownload()}>
                Удалить
            </Button>
            <p>{`${downloadData.speed} ${downloadData.timeRemaining}`}</p>
        </Container>
    );
};
