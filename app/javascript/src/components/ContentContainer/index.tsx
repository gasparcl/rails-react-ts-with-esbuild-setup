import { ReactNode } from "react"
import { Box, BoxProps } from "@mui/material"

import { TitlePage } from "../TitlePage"
import * as C from "./styles"

interface ContentContainerProps {
    children?: ReactNode
    title: string | ReactNode
    boxProps?: BoxProps
}

export function ContentContainer({
    children,
    title,
    boxProps,
}: ContentContainerProps) {
    return (
        <C.Content>
            <TitlePage label={title} />

            <Box
                marginTop={2}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                gap={2}
                paddingY={1}
                paddingX={2}
                width="100%"
                {...boxProps}
            >
                {children}
            </Box>
        </C.Content>
    )
}
