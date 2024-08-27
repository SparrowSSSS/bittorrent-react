import { useNavigate } from "react-router-dom";
import { paths } from "../router";
import { localStorages } from "../consts";
import { TorrentId } from "../types";

export const useTorrentId = () => {
    const navigate = useNavigate();

    return (data: TorrentId) => {
        window.electronAPI.sendTorrentId(
            { id: data },
            () => {
                navigate(paths.download);
            },
            () => {
                localStorage.removeItem(localStorages.torrentId);
            }
        );
    };
};
