import { ReportProblem } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { ContentContainer } from "../../components/ContentContainer"

export function NotFound() {
    return (
        <ContentContainer
            title={
                <>
                    <Box
                        display="flex"
                        alignItems="center"
                        gap={1}
                    >
                        <ReportProblem
                            color="warning"
                            fontSize="large"
                        />
                        <span>Erro: 404</span>
                    </Box>
                </>
            }
        >
            <Typography variant="body2">
                Ops... Parece que a url procurada não existe.
            </Typography>
            <Typography variant="body2">
                Voltar à <Link to="/">Home</Link>.
            </Typography>
        </ContentContainer>
    )
}
