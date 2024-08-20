import { FC } from "react";
import { Container } from "./container";
import { TorrentFile } from "@/features/torrent-file";
import { Typography, colors } from "@mui/material";
import { MagnetURL } from "@/features/magnet-url";

export const AddTorrent: FC = () => {
    return (
        <Container>
            <TorrentFile />
            <Typography
                align="center"
                variant="h5"
                sx={{ color: colors.grey[50], margin: "20px 0" }}
            >
                OR
            </Typography>
            <MagnetURL />
        </Container>
    );
};
