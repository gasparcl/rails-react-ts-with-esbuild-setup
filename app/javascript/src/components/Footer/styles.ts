import styled from "styled-components"
import { lighten } from "@mui/material"

export const FooterSection = styled.div`
    width: 100vw;
    padding: 3rem 2rem;
    background-color: ${({ theme }) =>
        lighten(theme.palette.primary.light, 0.1)};
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        &.footerLink {
            transition: all 250ms;

            &:visited {
                color: inherit;
            }

            &:active {
                color: rgba(55, 33, 205);
            }

            &:hover {
                color: rgba(55, 33, 205);
            }
        }
    }
`
