import { Button, ButtonProps, styled } from "@mui/material";

interface StyledButtonProps extends ButtonProps {
    hover?: boolean;
}

export const StyledButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== "hover"
})<StyledButtonProps>(({ hover, theme }) => ({
    "borderStyle": "dashed",
    "borderWidth": "3px",
    "height": "100px",
    "width": "100%",
    "&:hover": {
        borderWidth: "3px"
    },
    ...(hover && {
        border: `3px solid ${theme.palette.success.main}`,
        backgroundColor: "rgba(102, 187, 106, 0.1)"
    })
}));
