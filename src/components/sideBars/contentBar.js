import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Typography } from "@mui/material";

const fontSize = '0.8rem'

const MenuItem = ({ item, highlighted }) => {

  return (
    <>

      <ListItem button style={{ 
        paddingLeft: `${item.level * 5}px`,
        paddingTop: '0px',
        paddingBottom: '0px'
        }}>
        <HashLink 
          smooth to={`#${item.id}`} 
          scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}
          style={{ textDecoration: 'none',  color: 'inherit' }}
          >
          <Typography
            sx={{
              fontSize: highlighted ? '0.9rem' : '0.8rem',
              fontWeight: highlighted ? 'bold' : 'normal'
            }}
   
          >
            <ListItemText
              disableTypography={true}
              primary={item.content}
            />
          </Typography>
        </HashLink>
      </ListItem>
    </>
  );
};



const ContentBar = ({ menu }) => {

  const [sections, setSections] = useState([]);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    // Query all elements within #page-content
    const elements = document.querySelectorAll('#page-content *');

    // Filter out heading elements and create an array of objects
    const headingArray = Array.from(elements).filter((element) =>
      element.tagName.match(/^H[1-6]$/)
    );

    const sectionsArray = headingArray.map((headingElement) => ({
      id: headingElement.id,
      content: headingElement.textContent,
      level: parseInt(headingElement.tagName.charAt(1), 10),
    }));

    // Update the state with the array of objects
    setSections(sectionsArray);

    // Now you can use sectionsArray to generate your menu dynamically
    console.log('Sections in ContentBar:', sectionsArray);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Find the section closest to the top of the viewport
      const closestSection = sections.reduce((closest, section) => {
        const sectionElement = document.getElementById(section.id);
        if (sectionElement) {
          const sectionTop = sectionElement.getBoundingClientRect().top;
          const distance = Math.abs(sectionTop);

          if (closest === null || distance < closest.distance) {
            return { section, distance };
          }
        }

        return closest;
      }, null);

      setActiveSection(closestSection ? closestSection.section : null);
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);


  return (
    <div style={{ fontSize: fontSize }}>
      <p> Table of Content </p>
      <List>
        {sections.map((item, key) => (
          <MenuItem key={key} item={item} highlighted={item === activeSection} />
        ))}
      </List>
    </div>
  );
};

export default ContentBar;