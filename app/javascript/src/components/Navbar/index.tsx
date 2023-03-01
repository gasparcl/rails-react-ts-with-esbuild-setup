import { ReactNode } from "react"
import { Link, useLocation } from "react-router-dom"
import { Box, Typography } from "@mui/material"

import { AppBar } from "./styles"
import { Dropdown } from "./Dropdown"
import { ExpandMore } from "@mui/icons-material"

// ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
// ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
// ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩
type ParentRouteLinksProps =
    | {
          path: string
          text: string
          subItems?: undefined
      }
    | {
          path: string
          text: string
          subItems: {
              path: string
              text: string
          }[]
      }

const NAV_LINKS = [
    {
        path: "/",
        text: "Home",
    },
    {
        path: "#",
        text: "Serviços",
        subItems: [
            {
                path: "#",
                text: "Assessoria",
            },
            {
                path: "#",
                text: "Laudos",
            },
            {
                path: "#",
                text: "Pericias",
            },
            {
                path: "#",
                text: "Treinamentos",
            },
        ],
    },
    {
        path: "#",
        text: "Quem somos",
    },
    {
        path: "#",
        text: "Contato",
    },
]

function hasNestedLinks(pathname: string, parentLink: ParentRouteLinksProps) {
    const parentLinkName = parentLink.path.replace("/", "")

    let isActiveParentLink =
        pathname.split("/").includes(parentLinkName) &&
        parentLink.path.split("/").includes(parentLinkName) &&
        !!parentLink.subItems

    return isActiveParentLink
}

function LinkText({ children }: { children: ReactNode | string }) {
    return (
        <Typography
            variant="body1"
            textTransform="uppercase"
        >
            {children}
        </Typography>
    )
}

export function Navbar() {
    const { pathname } = useLocation()

    return (
        <AppBar>
            <ul>
                <li>
                    <Link to={"/"}>
                        <LinkText>
                            <img
                                src="#"
                                alt="Logo Brand"
                            />
                        </LinkText>
                    </Link>
                </li>
                <div>
                    {NAV_LINKS.map((link, i) => {
                        let activeNavLink =
                            pathname === link.path ||
                            hasNestedLinks(pathname, link)

                        if (!!link.subItems) {
                            return (
                                <li
                                    key={`${link.text}-${i}`}
                                    className={
                                        activeNavLink ? "activeNavLink" : ""
                                    }
                                >
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        gap={0.5}
                                    >
                                        <Dropdown
                                            label={link.text}
                                            items={link.subItems}
                                        />
                                        <ExpandMore
                                            fontSize="small"
                                            color="primary"
                                        />
                                    </Box>
                                </li>
                            )
                        }

                        return (
                            <li
                                key={`${link.text}-${i}`}
                                className={activeNavLink ? "activeNavLink" : ""}
                            >
                                <Link to={link.path}>
                                    <LinkText>{link.text}</LinkText>
                                </Link>
                            </li>
                        )
                    })}
                </div>
            </ul>
        </AppBar>
    )
}
