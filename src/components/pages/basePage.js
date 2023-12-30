import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';


const BasePage = ({ children }) => {
  return (
     <Container id='page-content' >
       { children }
    </Container>
  );
};

export default BasePage;
