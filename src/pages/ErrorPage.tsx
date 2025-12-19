import { Box, Typography } from "@mui/material";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";


function ErrorPage() {

    const error = useRouteError();
    console.error(error);

    let errorMessage;

    if (isRouteErrorResponse(error)) {
        errorMessage = error.statusText;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    } else if (typeof error === "string") {
        errorMessage = error;
    } else {
        errorMessage = "Unknown error";
    }

    return (
        <Box
            sx={(theme) => ({
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                minHeight: '100vh',
                background: `linear-gradient(to right bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            })}
        >
            <Box sx={{ margin: 20}}>
                    <Typography variant="h4">
                        Eh? Ha ocurrido un error, pero no te preocupes, no tienes la culpa.
                    </Typography>
                    <Typography
                        variant="h6" 
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            mt: 10                            
                        }}
                    >
                        {errorMessage}
                    </Typography>
            </Box>

        </Box>
    );
}
export default ErrorPage;