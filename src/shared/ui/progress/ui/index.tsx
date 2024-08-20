import { FC, useEffect, useState } from "react";
import { Container } from "./container";
import { gapPercent, widthPercent } from "./consts";
import { Line } from "./line";

interface Props {
    progress: number;
    backgroudColor?: any;
}

export const Progress: FC<Props> = ({ progress, backgroudColor }) => {
    const [progressArr, setProgressArr] = useState<number[]>([]);

    const perсent = widthPercent + gapPercent;

    useEffect(() => {
        if (progress >= 0 && progress <= 100) {
            const offset = Math.floor(progress / perсent) - progressArr.length;

            if (offset) {
                const newArr = [...progressArr];

                for (let i = 0; i < offset; i++) {
                    newArr.push((newArr.at(-1) || 0) + perсent);
                }

                setProgressArr(newArr);
            }
        }
    }, [progress]);

    return (
        <Container backColor={backgroudColor}>
            {progressArr.map((progress) => (
                <Line position={progress} />
            ))}
        </Container>
    );
};
