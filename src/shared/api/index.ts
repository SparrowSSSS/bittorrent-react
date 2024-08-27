import { TorrentId, TwoChannelsMethod } from "../types";

export interface SendTorrentIdOpt {
    id: TorrentId;
}

export interface SetPauseOpt {
    state: boolean;
}

export interface ElectronAPI {
    sendTorrentId: TwoChannelsMethod<SendTorrentIdOpt>;
    getDownloadData: (callback: (data: DownloadData) => void) => void;
    finishDowload: (callback: () => void) => void;
    setPause: TwoChannelsMethod<SetPauseOpt>;
    destroyDownload: () => void;
}

export interface DownloadData {
    progress: number;
    timeRemaining: number;
    speed: number;
    magnetUrl: string;
}
