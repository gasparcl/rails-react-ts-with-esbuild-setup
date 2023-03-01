import React from "react"
import { Link, useLocation } from "react-router-dom"
import { Box, Typography } from "@mui/material"

import * as C from "./styles"
import { useState } from "react"

type MenuItem = {
    path: string
    text: string
}

type Items = MenuItem[]

interface DropdownProps {
    label: string
    items: Items
}

export function Dropdown({ label, items }: DropdownProps) {
    const [show, setShow] = useState(false)
    const { pathname } = useLocation()

    const mainPath = `/${label.replaceAll("ç", "c").toLowerCase()}`

    return (
        <Box position="relative">
            <C.DropDown
                onMouseOver={() => setShow(true)}
                onMouseOut={() => setShow(false)}
            >
                <Link to="#"> {/*{mainPath} */}
                    <Typography textTransform="uppercase">{label}</Typography>
                </Link>
                <C.FadeContainer show={show}>
                    {items.map((item) => {
                        const isActiveNavSubLink =
                            pathname === mainPath + item.path

                        return (
                            <C.DropDownAction
                                key={item.text}
                                className={
                                    isActiveNavSubLink ? "activeNavLink" : ""
                                }
                            >
                                <Link
                                    to="#" /*{`${mainPath}${item.path}`}*/
                                    className={
                                        isActiveNavSubLink
                                            ? "activeNavLink"
                                            : ""
                                    }
                                >
                                    <p>{item.text}</p>
                                </Link>
                            </C.DropDownAction>
                        )
                    })}
                </C.FadeContainer>
            </C.DropDown>
        </Box>
    )
}
