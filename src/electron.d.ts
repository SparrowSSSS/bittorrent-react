import ElectronAPI from "~/interfaces/ElectronAPI";

type TorrentId = string | ArrayBuffer;

export interface ElectronAPI {
    sendTorrentId: (id: TorrentId) => void;
}

declare global {
    interface Window {
        electronAPI: ElectronAPI;
    }
}
