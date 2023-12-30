import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';

const Header = () => {
  return (
    <>
<CssBaseline />
      <AppBar position="fixed" sx={{ width: '100%' }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Matias Wallenius
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

// Export the component using the correct syntax
export default Header;
