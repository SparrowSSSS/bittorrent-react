import { TorrentId } from "@/electron";
import { useNavigate } from "react-router-dom";
import { paths } from "../router";

export const useTorrentId = () => {
    const navigate = useNavigate();

    return (data: TorrentId) => {
        window.electronAPI.sendTorrentId(data);

        navigate(paths.download);
    };
};
