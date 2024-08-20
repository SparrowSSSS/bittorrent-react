import { FC } from "react";
import { Container } from "./container";
import { stringifySpeed, stringifyTime } from "../model";
import { status } from "../consts";
import { Indicator } from "./indicator";

interface Props {
    speed: number;
    time: number;
    finish: boolean;
    pause: boolean;
    ready: boolean;
}

export const StatusDownload: FC<Props> = ({
    ready,
    finish,
    pause,
    speed,
    time
}) => {
    const getStatus = () => {
        if (!ready) return status.preparation;
        else if (finish) return status.finish;
        else if (pause) return status.pause;
        else if (ready) return status.loading;

        return "";
    };

    const indicatorsList: { title: string; value: string }[] = [
        { title: "Статус", value: getStatus() },
        { title: "Скорость загрузки", value: stringifySpeed(speed) },
        { title: "Времени осталось", value: stringifyTime(time) }
    ];

    return (
        <Container>
            {indicatorsList.map((indicator) => (
                <Indicator
                    key={indicator.title}
                    title={indicator.title}
                    value={indicator.value}
                />
            ))}
        </Container>
    );
};
