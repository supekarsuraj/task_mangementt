import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
    const navigate = useNavigate();
    const redirectToHome = () => {
        navigate('/task')
    }
    return (
        <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
        >
        <Typography variant="h1" component="h1" gutterBottom>
            404 Not Found
        </Typography>
        <Typography variant="h5" component="p" align="center" gutterBottom>
            Oops! The page you're looking for does not exist.
        </Typography>
        <Button variant="contained" color="primary" onClick={redirectToHome}>
            Go to Home
        </Button>
        </Box>
    );
};

export default PageNotFound;
