import { Dist } from "./Dist";

export const forDist = (dist: Dist, value: number) => {
    for (let i in dist) {
        if (value >= dist[i].value) {
            if (i === "null") {
                return `${dist[i].value} ${dist[i].prefix}`;
            }

            return `${Math.floor(value / dist[i].value)} ${dist[i].prefix}`;
        }
    }

    return `null`;
};
