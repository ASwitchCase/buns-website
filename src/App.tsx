import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./pages/HomePage";
import { StyledEngineProvider } from '@mui/material/styles';

const root = createRoot(document.getElementById('root'))

const App = () => {

    return (
        <React.StrictMode>
            <StyledEngineProvider injectFirst>
                <HomePage></HomePage>
            </StyledEngineProvider>
        </React.StrictMode>
    )
}

root.render(<App/>)