import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';


const HomePage = () => {
  return (
        <>
      <h1 id='home-page-welcome'>
        Welcome!
      </h1>
      <Typography variant="body1" color="text.primary" align="center">
        Very welcome to you who sneak around in my website. First let me explain what this is.
        In December 2023 I bought a raspberry pi with the coal of setting up a k3s cluster at home using full GitOps principals (had to spend my vacation on something).
        Obviously I need some workload to run in this cluster and what better project is there than a personal website to document my private projects.
      </Typography>

      <h2 id='next-section'>
       next section
       </h2>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

       <h3 id='next-section2'>
       Next section 2
       </h3>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

        <h1 id='next-section4'>
        next section 3
        </h1>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

    </>
  );
};

export default HomePage;
