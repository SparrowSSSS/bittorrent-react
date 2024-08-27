import { colors, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
    progress: number;
}

export const ProgressCounter: FC<Props> = ({ progress }) => {
    return (
        <Typography
            variant="h6"
            sx={{
                color: colors.grey[50],
                marginBottom: "5px",
                textAlign: "center"
            }}
        >
            {progress} %
        </Typography>
    );
};
