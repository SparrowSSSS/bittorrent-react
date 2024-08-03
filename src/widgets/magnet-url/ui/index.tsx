import { Button, TextField } from "@mui/material";
import { Form } from "./form";
import { Send } from "@mui/icons-material";
import { useState } from "react";

export const MagnetURL = () => {
    const [magnetUrl, setMagnetUrl] = useState("");

    const handleSubmit = () => {
        if (magnetUrl) window.electronAPI.sendTorrentId(magnetUrl);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <TextField
                variant="outlined"
                label="Magnet URL"
                value={magnetUrl}
                onChange={(e) => setMagnetUrl(e.target.value)}
            />
            <Button variant="contained" type="submit">
                <Send />
            </Button>
        </Form>
    );
};
