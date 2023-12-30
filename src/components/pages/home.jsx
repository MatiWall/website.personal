import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';


const HomePage = () => {
  return (
        <>
      <h1 id='home-page-welcome'>
        Welcome!
      </h1>
      <section>
              Very welcome to you who sneak around in my website. First let me explain what this is.
        In December 2023 I bought a raspberry pi with the goal of setting up a k3s cluster at home using full GitOps principals (had to spend my vacation on something).
        Obviously I need some workload to run in this cluster and what better way is there than a personal website to document my private projects.
      </section>
      <br/>
       <section>
            Feel free look around but please keep in mind that this website is done for my own amusement.
      </section>

    </>
  );
};

export default HomePage;
