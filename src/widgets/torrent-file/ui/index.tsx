import { Upload } from "@mui/icons-material";
import { HiddenInput } from "./hidden-input";
import { useMemo, useState } from "react";
import { StyledButton } from "./styled-button";
import { uploadFile } from "@/shared/lib/upload-files";
import { DragEvents } from "@/shared/lib/drag-events";

export const TorrentFile = () => {
    const [buttonHover, setButtonHover] = useState(false);

    const upload = (file?: File) => {
        if (file) uploadFile(file, window.electronAPI.sendTorrentId);
    };

    const DE = useMemo(
        () => new DragEvents<boolean>(setButtonHover),
        []
    );

    return (
        <div
            onDrop={DE.getDragEvent(false, (e) =>
                upload(e.dataTransfer.files[0])
            )}
            onDragOver={DE.getDragEvent(true)}
            onDragEnter={DE.getDragEvent(true)}
            onDragLeave={DE.getDragEvent(false)}
        >
            <StyledButton
                variant="outlined"
                startIcon={<Upload />}
                color="success"
                tabIndex={-1}
                component="label"
                hover={buttonHover}
            >
                Upload .torrent file
                <HiddenInput
                    type="file"
                    onChange={(e) => upload(e.target.files?.[0])}
                />
            </StyledButton>
        </div>
    );
};
