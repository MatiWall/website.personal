import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';


const HomePage = () => {
  return (
        <>
      <Typography variant="h5" component="div" align="center">
        Welcome!
      </Typography>
      <Typography variant="body1" color="text.primary" align="center">
        Very welcome to you who sneak around in my website. First let me explain what this is.
        In December 2023 I bought a raspberry pi with the coal of setting up a k3s cluster at home using full GitOps principals (had to spend my vacation on something).
        Obviously I need some workload to run in this cluster and what better project is there than a personal website to document my private projects.
      </Typography>
    </>
  );
};

export default HomePage;
