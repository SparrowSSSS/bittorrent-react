import { Dist } from "../model";

export const speeds: Dist = {
    gbyte: {
        value: 8589934592,
        prefix: "Гбайт/с"
    },
    mbyte: {
        value: 8388608,
        prefix: "Мбайт/с"
    },
    kbyte: {
        value: 8192,
        prefix: "Кбайт/c"
    },
    byte: {
        value: 8,
        prefix: "байт/c"
    },
    bit: {
        value: 1,
        prefix: "бит/с"
    }
};

export const times: Dist = {
    y: {
        value: 31104000000,
        prefix: "г."
    },
    d: {
        value: 86400000,
        prefix: "д."
    },
    h: {
        value: 3600000,
        prefix: "ч."
    },
    m: {
        value: 60000,
        prefix: "м."
    },
    s: {
        value: 1000,
        prefix: "с."
    },
    mm: {
        value: 1,
        prefix: "мм."
    }
};

export { status } from "./status";
