import { SetState } from "@/shared/types/SetState";
import { DragEvent } from "react";

export class DragEvents<T> {
    setState: SetState<T> | null;

    constructor(setState?: SetState<T>) {
        this.setState = setState || null;
    }

    getDragEvent(stateValue?: T, callback?: (e: DragEvent) => void) {
        return (e: DragEvent) => {
            e.preventDefault();
            e.stopPropagation();

            callback ? callback(e) : null;

            if (this.setState && stateValue !== undefined)
                this.setState(stateValue);
        };
    }
}
