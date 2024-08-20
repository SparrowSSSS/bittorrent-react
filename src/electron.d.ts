import ElectronAPI from "~/interfaces/ElectronAPI";

type TorrentId = string | ArrayBuffer;

export interface DownloadData {
    progress: number;
    timeRemaining: number;
    speed: number;
}

export interface ElectronAPI {
    sendTorrentId: (id: TorrentId) => void;
    getDownloadData: (callback: (data: DownloadData) => void) => void;
    finishDowload: (callback: () => void) => void;
    setPause: (state: boolean) => void;
    destroyDownload: () => void;
}

declare global {
    interface Window {
        electronAPI: ElectronAPI;
    }
}
