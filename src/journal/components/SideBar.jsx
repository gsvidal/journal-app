//import './SideBar.css';

import {
  Box,
  Grid,
  Drawer,
  Toolbar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import { useSelector } from 'react-redux';

export const SideBar = ({ drawerWidth = 240 }) => {
  const { displayName } = useSelector(state => state.auth);

  return (
    <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {displayName}
          </Typography>
        </Toolbar>
        <Divider />

        <List>
          {['January', 'February', 'March', 'April'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                sx={{
                  '& .MuiTouchRipple-child': {
                    backgroundColor: '#5300e4',
                  },
                }}
              >
                <ListItemIcon>
                  <TurnedInNotIcon />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={text} />
                  <ListItemText secondary={'al mundo que prefiero que digan que soy forastero'} />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
