import { createRoot } from "react-dom/client"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { ThemeProvider as StyledThemeProvider } from "styled-components"

import { lightTheme } from "./styles/theme/light"
import { GlobalStyle } from "./styles/global"
import { RouterProvider } from "react-router-dom"
import { appRoutes } from "./routes"

const App = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <StyledThemeProvider theme={lightTheme}>
                <GlobalStyle />
                <CssBaseline />

                <RouterProvider router={appRoutes} />
            </StyledThemeProvider>
        </ThemeProvider>
    )
}

document.addEventListener("DOMContentLoaded", () => {
    const rootEl = document.getElementById("root")
    const root = createRoot(rootEl!)
    root.render(<App />)
})
