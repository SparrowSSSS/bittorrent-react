import { useNavigate } from "react-router-dom";
import { ElectronAPI } from "./ElectronAPI";
import { paths } from "@/shared/router";
import { localStorages } from "@/shared/consts";

export const useDestroyTorrent = (api: ElectronAPI) => {
    const navigate = useNavigate();

    return () => {
        if (confirm("Вы точно хотите отменить загрузку?")) {
            api.destroyDownload();

            localStorage.removeItem(localStorages.torrentId);

            navigate(paths.home);
        }
    };
};
