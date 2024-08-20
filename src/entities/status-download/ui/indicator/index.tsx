import { Typography } from "@mui/material";
import { FC } from "react";

interface Props {
    title: string;
    value: string;
}

export const Indicator: FC<Props> = ({ title, value }) => {
    return ( 
        <Typography fontSize={15.5}>
            <span style={{ fontWeight: "bold" }}>{title}: </span>
            {value}
        </Typography>
    );
};
