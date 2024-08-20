import { DragEvents } from "@/shared/lib/drag-events";
import { SetState } from "@/shared/types/SetState";
import { useMemo } from "react";
import { useUpload } from "./useUpload";

export const useDragEvents = (setButtonHover: SetState<boolean>) => {
    const DE = useMemo(
        () => new DragEvents<boolean>(setButtonHover),
        [setButtonHover]
    );

    const upload = useUpload();

    return {
        drop: DE.getDragEvent(false, (e) => upload(e.dataTransfer.files[0])),
        dragOver: DE.getDragEvent(true),
        dragEnter: DE.getDragEvent(true),
        dragLeave: DE.getDragEvent(false)
    };
};
