import { createTheme } from "@mui/material"

export const lightTheme = createTheme({
    palette: {
        background: {
            default: "#F1F1F1",
            paper: "#FFFFFF",
        },
        primary: {
            main: "#096771", // "#0c88bb" // "#007b6a" // "#33273A" // "#6D1C2F" // "#009888" // #71C09A,
        },
        secondary: {
            main: "#454545",
        },
    },
    typography: {
        button: {
            // textTransform: 'initial',
        },
        h6: {
            fontWeight: "bold",
            fontSize: "1rem",
        },
    },
})
