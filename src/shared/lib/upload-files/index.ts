import { getErrorMessage } from "../error";

export const uploadFile = (file: File, callback: (result: any) => void) => {
    const reader = new FileReader();

    reader.readAsArrayBuffer(file);

    reader.onload = () => {
        callback(reader.result);
    };

    reader.onerror = () => {
        alert(getErrorMessage(reader.error as Error));
    };
};
