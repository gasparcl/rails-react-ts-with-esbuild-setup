import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom"
import { Layout } from "../components/Layout"
import { Home } from "../pages/Home"
import { NotFound } from "../pages/NotFound"
// import { About } from "../pages/About"
// import { ContactUs } from "../pages/ContactUs"
// import { Services } from "../pages/Services"
// import { Assessoria } from "../pages/Services/sub/Acessoria"
// import { Laudos } from "../pages/Services/sub/Laudos"
// import { Pericias } from "../pages/Services/sub/Pericias"
// import { Treinamentos } from "../pages/Services/sub/Treinamentos"

export let appRoutes = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<Layout />}
        >
            <Route
                index
                element={<Home />}
            />
            {/* <Route element={<ContactUs />} path="/contato" />
            <Route element={<About />} path="/quem-somos" />
            <Route element={<Services />} path="/servicos">
                <Route element={<Assessoria />} path="/servicos/assessoria" />
                <Route element={<Laudos />} path="/servicos/laudos" />
                <Route element={<Pericias />} path="/servicos/pericias" />
                <Route
                    element={<Treinamentos />}
                    path="/servicos/treinamentos"
                />
            </Route> */}

            <Route
                element={<NotFound />}
                path="*"
            />
        </Route>,
    ),
)
