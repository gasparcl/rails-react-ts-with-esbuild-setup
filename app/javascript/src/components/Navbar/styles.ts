import styled from "styled-components"
import { lighten } from "@mui/material"

export const AppBar = styled("nav")`
    padding: 2rem 4rem;
    background: ${({ theme }) => lighten(theme.palette.primary.light, 0.1)};

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    ul > div {
        display: flex;
        gap: 1.5rem;
        align-items: baseline;
    }

    li {
        transition: 250ms all;
        position: relative;
        user-select: none;

        a {
            color: ${({ theme }) => lighten(theme.palette.secondary.main, 0.8)};
            text-transform: uppercase;

            &:hover {
                text-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
                color: ${({ theme }) =>
                    lighten(theme.palette.secondary.main, 0.9)};
            }

            &:active {
                text-shadow: 0 0 15px 1px
                    ${({ theme }) => theme.palette.primary.main};
                color: ${({ theme }) =>
                    lighten(theme.palette.secondary.main, 0.8)};
            }
        }

        &.activeNavLink {
            a {
                color: ${({ theme }) =>
                    lighten(theme.palette.secondary.main, 1)};

                svg {
                    fill: ${({ theme }) =>
                        lighten(theme.palette.secondary.main, 1)};
                    stroke: ${({ theme }) =>
                        lighten(theme.palette.secondary.main, 1)};
                }
            }

            ::after {
                transform: scaleX(1);
                z-index: 10001;
                height: 2px;
                background-color: ${({ theme }) =>
                    lighten(theme.palette.secondary.main, 1)};
            }
        }

        ::after {
            width: 100%;
            position: absolute;
            transform: scaleX(0);
            content: "";
            height: 1px;
            transition: 250ms all ease;
            bottom: 0;
            left: 0;
            background-color: ${({ theme }) =>
                lighten(theme.palette.primary.main, 0.55)};
        }
    }
`

export const DropDown = styled.div``

export const FadeContainer = styled.div<{ show?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: absolute;
    background-color: ${({ theme }) =>
        lighten(theme.palette.primary.light, 0.25)};
    padding: 1rem 0.5rem;
    opacity: ${({ show }) => (show ? 1 : 0)};
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
    margin-top: -0.1rem;
    transition: all 250ms ease;
    box-shadow: ${({ theme }) => theme.shadows[4]};
    border-radius: 0.25rem;
    z-index: 10000;
`

export const DropDownAction = styled.div`
    p {
        position: relative;
        border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
        padding: 0.25rem;
        color: ${({ theme }) => lighten(theme.palette.secondary.main, 0.8)};

        &:hover {
            text-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
            color: ${({ theme }) => lighten(theme.palette.secondary.main, 0.9)};
        }

        &:active {
            text-shadow: 0 0 15px 1px
                ${({ theme }) => theme.palette.primary.main};
            color: ${({ theme }) => lighten(theme.palette.secondary.main, 0.8)};
        }

        ::after {
            width: 100%;
            position: absolute;
            transform: scaleX(0);
            content: "";
            height: 1px;
            transition: 250ms all ease;
            bottom: 0;
            left: 0;
            background-color: ${({ theme }) =>
                lighten(theme.palette.primary.main, 0.55)};
        }
    }

    &.activeNavLink {
        p {
            color: ${({ theme }) => lighten(theme.palette.secondary.main, 1)};

            ::after {
                transform: scaleX(1);
                height: 2px;
                background-color: ${({ theme }) =>
                    lighten(theme.palette.secondary.main, 1)};
            }
        }
    }
`
