import { ElectronAPI as IElectronAPI } from "@/shared/api";

export interface ElectronAPI extends Omit<IElectronAPI, "sendTorrentId"> {}
