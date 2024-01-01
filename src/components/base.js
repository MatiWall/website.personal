import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
  Divider,
  Link,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FaGithub } from "react-icons/fa";


import SideBar from './sideBars/sidebar.jsx';
import ContentBar from './sideBars/contentBar.js';
import PageContent from './pages/content.jsx';
import ThemeToggle from './themes/themeToggle.js'


const drawerWidth = 240;
const contentWidth = 200;

function BasePage({ window }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };



  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          sx={{ display: 'flex', justifyContent: 'space-between', width: { sm: `calc(100% - ${drawerWidth}px)` }, }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <h4> Matias Wallenius </h4>
          <div
            style={{
              display: 'flex',

            }}
          >
            <Link
            href='https://github.com/MatiWall?tab=repositories'
          
            style={{ 
              textDecoration: 'none', 
              color: 'inherit',
              display: 'flex',
              alignItems: 'center',
              marginRight: '1rem '
            }}
            >
             <FaGithub size={22} style={{textAlign: 'center', marginRight: '0.3rem'}}/>
             <Typography variant="caption" style={{fontSize: '1.3rem', fontWeight: 'bold'}}>GitHub</Typography>
            </Link>
        

            <ThemeToggle />
    
          </div>

        </Toolbar>

      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <Toolbar>

          </Toolbar>
          <Divider />
          <SideBar />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >

          <Toolbar>

          </Toolbar>

          <Divider />
          <SideBar />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px - ${contentWidth}px)` } }}
      >

        <Toolbar />
        <PageContent />
      </Box>
      <Box
        component="nav"
        sx={{ width: { sm: contentWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="permanent"
          anchor="right"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: contentWidth },
          }}
          open
        >
          <Toolbar />
          <Divider />
          <ContentBar />
        </Drawer>
      </Box>
    </Box>
  );
}

BasePage.propTypes = {
  window: PropTypes.func,
};

export default BasePage;
