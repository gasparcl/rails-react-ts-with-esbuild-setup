import styled from 'styled-components'
import MuiContainer from '@mui/material/Container'

export const Main = styled.main`
    height: 100vh;
    overflow: auto;

    display: flex;
    flex-direction: column;
`

export const Container = styled(MuiContainer)`
    height: 100%;
    margin: 1rem auto;
    flex: 1;
`
