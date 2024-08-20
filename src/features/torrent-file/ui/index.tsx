import { Upload } from "@mui/icons-material";
import { HiddenInput } from "./hidden-input";
import { useState } from "react";
import { StyledButton } from "./styled-button";
import { useUpload, useDragEvents } from "../model";

export const TorrentFile = () => {
    const [buttonHover, setButtonHover] = useState(false);

    const { drop, dragEnter, dragLeave, dragOver } =
        useDragEvents(setButtonHover);

    const upload = useUpload();

    return (
        <div
            onDrop={drop}
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
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
