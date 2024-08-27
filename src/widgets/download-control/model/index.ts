export const getPersent = (p: number) => {
    if (p % 1 !== 0) return Math.floor(p * 100);
    return p;
};

export interface PauseState {
    value: boolean;
    permission: boolean;
}

export type { ElectronAPI } from "./ElectronAPI";

export { useDestroyTorrent } from "./useDestroyTorrent";
