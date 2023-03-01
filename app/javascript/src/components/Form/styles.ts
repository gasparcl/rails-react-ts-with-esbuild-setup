import { alpha } from "@mui/material"
import styled from "styled-components"

export const Form = styled.form`
    display: flex;
    width: 100%;
    max-width: 550px;
    padding: 2rem 1rem;
    flex-direction: column;
    gap: 1.25rem;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => alpha(theme.palette.primary.main, 0.05)};
    border-radius: 0.5rem;
    box-shadow: ${({ theme }) => theme.shadows[1]};

    div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        a {
            flex: 1;
        }

        > button {
            flex: 1;
        }

        .MuiInputAdornment-root {
            width: initial;
        }
    }
`
