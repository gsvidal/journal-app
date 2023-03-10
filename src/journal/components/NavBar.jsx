//import './NavBar.css';

import { AppBar, Toolbar, IconButton, Typography, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';

export const NavBar = ({ drawerWidth = 240 }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton color="inherit" edge="start" sx={{ mr: 2, display: { sm: 'none' } }}>
          <MenuIcon />
        </IconButton>

        <Grid container direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" noWrap component="div">
            JournalApp
          </Typography>
          <IconButton color="error">
            <LogoutIcon />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
