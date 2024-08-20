import { styled } from "@mui/material";
import { gapPercent } from "../consts";

interface ContainerProps {
    backColor?: any;
}

export const Container = styled("div", {
    shouldForwardProp: (prop) => prop !== "backColor"
})<ContainerProps>(({ backColor = "transparent" }) => ({
    backgroundColor: backColor,
    maxWidth: "400px",
    width: "100%",
    height: "50px",
    display: "flex",
    alignItems: "center",
    border: `3px solid grey`,
    borderRadius: "100px",
    boxSizing: "border-box",
    padding: "5px 10px",
    gap: `${gapPercent}%`
}));
