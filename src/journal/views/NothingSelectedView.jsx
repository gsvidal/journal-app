import { Grid, Typography } from "@mui/material";
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';


export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{minHeight: 'calc(100vh - 112px)', backgroundColor: 'primary.main', padding: 4, borderRadius: 2 }}
    >
      <Grid 
        item
        xs={12}
      >
        <StarBorderPurple500Icon sx={{fontSize: 100, color: 'white'}} />
      </Grid>
      <Grid 
        item
        xs={12}
      >
        <Typography color='white' variant='h5'>Select or create a ...</Typography>
      </Grid>

    </Grid>
  );
};