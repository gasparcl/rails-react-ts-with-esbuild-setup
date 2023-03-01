import { Outlet } from "react-router-dom"

import { Footer } from "../Footer"
import { Navbar } from "../Navbar"
import { WhatsappButton } from "../WhatsappButton"

import * as C from "./styles"

export function Layout() {
    return (
        <C.Main>
            <Navbar />

            <C.Container maxWidth="xl">
                <Outlet />
            </C.Container>

            <WhatsappButton />

            <Footer />
        </C.Main>
    )
}
