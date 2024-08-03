import { MagnetURL } from "@/widgets/magnet-url";
import { Container } from "./container";
import { TorrentFile } from "@/widgets/torrent-file";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

export const GetTorrent = () => {
    return (
        <Container>
            <TorrentFile />
            <Typography
                align="center"
                variant="h5"
                sx={{ color: grey[50], margin: "20px 0" }}
            >
                OR
            </Typography>
            <MagnetURL />
        </Container>
    );
};
