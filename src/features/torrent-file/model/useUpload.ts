import { useTorrentId } from "@/shared/hooks/useTorrentId";
import { getErrorMessage } from "@/shared/lib/error";
import { uploadFile } from "@/shared/lib/upload-files";

export const useUpload = () => {
    const sendTorrentId = useTorrentId();

    return (file?: File) => {
        try {
            if (file) {
                if (file.name.split(".").pop() !== "torrent")
                    throw new Error("Это не торрент файл");

                uploadFile(file, sendTorrentId);
            }
        } catch (err) {
            alert(getErrorMessage(err as Error));
        }
    };
};
