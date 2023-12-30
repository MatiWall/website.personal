import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';


const BasePage = ({ children }) => {
  return (
     <Container id='page-content' maxWidth="md">
       { children }
    </Container>
  );
};

export default BasePage;
