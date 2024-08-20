import { Dist } from "./Dist";

export const forDist = (dist: Dist, value: number) => {
    for (let i in dist) {
        if (value >= dist[i].value)
            return `${Math.floor(value / dist[i].value)} ${dist[i].prefix}`;
    }

    return "null";
};
