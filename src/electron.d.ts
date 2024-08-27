import { ElectronAPI } from "@/shared/api";

declare global {
    interface Window {
        electronAPI: ElectronAPI;
    }
}
