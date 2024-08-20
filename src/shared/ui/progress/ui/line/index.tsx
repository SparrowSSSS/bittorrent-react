import { styled } from "@mui/material";
import { widthPercent } from "../consts";
import { FC, memo } from "react";

interface GradientProps {
    position: number;
}

interface LineProps {
    position: number;
}

const Container = styled("div")({
    height: "100%",
    width: `${widthPercent}%`,
    backgroundColor: "transparent",
    borderRadius: "100px",
    position: "relative",
    overflow: "hidden"
});

const Gradient = styled("div", {
    shouldForwardProp: (prop) => prop !== "position"
})<GradientProps>(({ position }) => ({
    position: "absolute",
    height: "100%",
    left: `-${(position - 10) * 10}%`,
    width: "1000%",
    top: 0,
    background:
        "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,254,0,1) 50%, rgba(0,255,70,1) 100%)"
}));

const LineComponent: FC<LineProps> = ({ position }) => {
    return (
        <Container>
            <Gradient position={position} />
        </Container>
    );
};

export const Line = memo(LineComponent);
