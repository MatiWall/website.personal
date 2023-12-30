import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import LocalLibraryOutlinedIcon from "@material-ui/icons/LocalLibraryOutlined";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import PhoneIcon from '@mui/icons-material/Phone';
import React from "react";
import * as Icon from 'react-bootstrap-icons';

import BasePage from './basePage.js'
import HomePage from './home.jsx'
import HomeLab from './projects/homelab/cluster.jsx'
import DockerPage from './projects/homelab/docker.js'
import PersonalWebsitePage from './projects/personalWebsite/page.js'
import ResumePage from './resume/resume.jsx'
import ContactPage from './contact/contact.jsx'

export const menu = [
  {
    icon: <HomeOutlinedIcon />,
    title: "Home",
    to: "/",
    element: <HomePage />
  },
  {
    icon: <ViewKanbanIcon />,
    title: "Projects",
    items: [
      {
        title: "Home Lab",
        items: [
        {
            title: "Description",
            to: "/projects/homelab/description",
            element: <HomeLab />
          },
             {
            title: "Docker",
            to: "/projects/homelab/docker",
            element: <DockerPage />
          }
        ]
      },
      {
        title: "Personal Website",
         to: "/projects/personal-website",
            element: <PersonalWebsitePage />
      }
    ]
  },
  {
    icon: <ContactPageIcon/>,
    title: "Resume",
    to: "/resume",
    element: <ResumePage />
  },
    {
    icon: <PhoneIcon/>,
    title: "Contact",
    to: "/contact",
    element: <ContactPage />
  },
];
