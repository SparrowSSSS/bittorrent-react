import { Button, TextField } from "@mui/material";
import { Form } from "./form";
import { Send } from "@mui/icons-material";
import { useState } from "react";
import { useTorrentId } from "@/shared/hooks/useTorrentId";

export const MagnetURL = () => {
    const [magnetUrl, setMagnetUrl] = useState("");

    const sendTorrentId = useTorrentId();

    const handleSubmit = () => {
        if (magnetUrl) sendTorrentId(magnetUrl);
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
