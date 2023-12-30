import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import LocalLibraryOutlinedIcon from "@material-ui/icons/LocalLibraryOutlined";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import PhoneIcon from '@mui/icons-material/Phone';
import React from "react";
import * as Icon from 'react-bootstrap-icons';

export const menu = [
  {
    icon: <HomeOutlinedIcon />,
    title: "Home",
    to: "/"
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
            to: "/projects/homelab/description"
          },
          {
            title: "Hardware",
            to: "/thedowtheory"
          },
          {
            title: "Cluster",
            to: "/chart"
          },
        ]
      },
      {
        title: "Personal Website",
        items: [
          {
            title: "The Dow Theory",
            to: "/thedowtheory"
          },
        ]
      }
    ]
  },
  {
    icon: <ContactPageIcon/>,
    title: "Resume",
    to: "/resume"
  },
    {
    icon: <PhoneIcon/>,
    title: "Contact",
    to: "/contact"
  },
];
