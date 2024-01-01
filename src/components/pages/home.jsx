import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import {Link} from 'react-router-dom'

import ImageSlider from '../imageSlider/imageSlider';

const HomePage = () => {
  return (
    <section>

     <ImageSlider 
      paths={[
        '/images/IMG_0292.jpg',
        '/images/IMG_0293-1.JPG'
      ]}
       />
      <Typography
        variant='h3'
        id='home-page-welcome'
      >
        Welcome!
      </Typography>
      <Typography>
        Very welcome to you who sneak around on my website. First let me explain what this is.
        In December 2023 I bought a Raspberry Pi with the goal of setting up a k3s cluster at home using full GitOps principals (had to spend my vacation on something).
        Obviously I need some workload to run in this cluster and what better way is there than a personal website to document my private projects.
      </Typography>
      <br />
      <Typography>
        Feel free look around but please keep in mind that this website is done for my own amusement.
      </Typography>
      <br />
      <Typography
        variant='h4'
        id='about-me'
      >
        About Me
      </Typography>
      <Typography>
        As you might have guesed I like to learn and understand technical stuff on a fundamental level (hence why I studied physics).
        In my mind you can never say "I do not know how to do that" and lieave it at that. Instead you can say "I do not know how to do that, yet".
        I hope that this website will show that this is how I approch unknown topics.
      </Typography>
      <br/>
      <Typography>
        To see my resume click <Link to='/resume'>here</Link>.
      </Typography>


    </section>
  );
};

export default HomePage;
