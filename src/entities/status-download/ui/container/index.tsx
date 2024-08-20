import { colors, styled } from "@mui/material";

export const Container = styled("div")({
    backgroundColor: colors.grey["200"],
    borderRadius: 20,
    maxWidth: 275,
    width: "100%",
    boxSizing: "border-box",
    padding: 10,
    display: "flex",
    flexDirection: "column",
    gap: 5
});
