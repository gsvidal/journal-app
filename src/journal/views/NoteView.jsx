import { Button, Grid, TextField, Typography } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

export const NoteView = () => {
  return (
    <Grid container direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          August 28th, 2023
        </Typography>
      </Grid>
      <Grid item>
        <Button color="secondary" sx={{ padding: 2 }}>
          <SaveIcon sx={{ fontSize: 30, mr: 1 }} />
          Save
        </Button>
      </Grid>
      <Grid>
        <TextField 
          type='text'
          variant='filled'
          fullWidth
          placeholder='Insert a title'
          label='Title'
          sx={{ border: 'none', mb: 1}}
        />
        <TextField 
          type='text'
          variant='filled'
          fullWidth
          multiline
          placeholder='What&apos;s new today?'
          minRows={ 5 }
        />
      </Grid>
    </Grid>
  );
};
