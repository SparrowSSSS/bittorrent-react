import { speeds, times } from "../consts";
import { forDist } from "./forDist";

export const stringifySpeed = (speed: number) => {
    return forDist(speeds, speed);
};

export const stringifyTime = (time: number) => {
    return forDist(times, time);
};

export { forDist } from "./forDist";

export type { Dist } from "./Dist";
