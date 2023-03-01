import { Box } from "@mui/material"
import { WhatsApp } from "@mui/icons-material"
import { Link } from "react-router-dom"

import { AnimatedIButton } from "./styles"
import {
    DEFAULT_MESSAGE_TEXT,
    DEFAULT_PHONE_NUMBER,
} from "../../consts/defaultValues"

interface WppButtonProps {
    phoneNumber?: string
    messageText?: string
}

export function WhatsappButton({
    phoneNumber = DEFAULT_PHONE_NUMBER,
    messageText = DEFAULT_MESSAGE_TEXT,
}: WppButtonProps) {
    return (
        <Box
            position="fixed"
            bottom={150}
            right={40}
        >
            <Link
                to={`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${messageText}`}
                target="_blank"
            >
                <AnimatedIButton
                    sx={{
                        background: "rgb(37, 211, 102)",
                        border: "1px solid rgba(0,0,0,.11)",
                        padding: ".75rem",

                        "&:hover": {
                            background: "rgb(37, 211, 102, .85)",
                        },
                    }}
                >
                    <WhatsApp
                        sx={{
                            fill: "rgba(255,255,255,0.87)",
                            fontSize: "2.5rem",
                        }}
                    />
                </AnimatedIButton>
            </Link>
        </Box>
    )
}
