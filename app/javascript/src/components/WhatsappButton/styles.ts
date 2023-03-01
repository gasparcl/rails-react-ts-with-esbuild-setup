import { alpha, IconButton } from "@mui/material"
import styled from "styled-components"

export const AnimatedIButton = styled(IconButton)`
    box-shadow: 0 0 0 0 ${({ theme }) => alpha("#25D366", 1)};
    animation: pulse 1.5s infinite;

    @-webkit-keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 ${({ theme }) => alpha("#25D366", 1)};
        }

        70% {
            box-shadow: 0 0 0 15px ${({ theme }) => alpha("#25D366", 0)};
        }

        100% {
            box-shadow: 0 0 0 0 ${({ theme }) => alpha("#25D366", 0)};
        }
    }

    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 ${({ theme }) => alpha("#25D366", 1)};
        }

        70% {
            box-shadow: 0 0 0 15px ${({ theme }) => alpha("#25D366", 0)};
        }

        100% {
            box-shadow: 0 0 0 0 ${({ theme }) => alpha("#25D366", 0)};
        }
    }
`
