import { Typography, TypographyProps } from "@mui/material"
import { Box } from "@mui/system"
import { ReactNode } from "react"

interface TitlePageProps extends TypographyProps {
    label: string | ReactNode
}

export function TitlePage({ label, ...props }: TitlePageProps) {
    return (
        <Typography
            variant="h5"
            color="primary"
            textAlign="center"
            textTransform="uppercase"
            {...props}
        >
            <Box display="flex" alignItems="center" justifyContent="center">
                {label}
            </Box>
        </Typography>
    )
}
