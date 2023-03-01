import { Typography } from "@mui/material"
import { Link } from "react-router-dom"

import {
    DEFAULT_MESSAGE_TEXT,
    DEFAULT_PHONE_NUMBER,
} from "../../consts/defaultValues"
import * as C from "./styles"

interface FooterProps {
    companyName?: string
    phoneNumber?: string
    messageText?: string
}

export function Footer({
    companyName = "ECOSIS",
    phoneNumber = DEFAULT_PHONE_NUMBER,
    messageText = DEFAULT_MESSAGE_TEXT,
}: FooterProps) {
    return (
        <C.FooterSection>
            <Typography
                variant="body2"
                color="CaptionText"
            >
                Todos os direitos reservados à © {companyName.toUpperCase()} /{" "}
                {new Date().toLocaleDateString("pt-BR", {
                    year: "numeric",
                })}{" "}
                - Desenvolvido por{" "}
                <Link
                    to={`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${messageText}`}
                    target="_blank"
                    className="footerLink"
                >
                    DevSistemas
                </Link>
            </Typography>
        </C.FooterSection>
    )
}
