import { Button, Grid, TextField, Typography } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { ImageGallery } from '../components/ImageGallery';

export const NoteView = () => {
  return (
    <Grid container direction="column" justifyContent="space-between" sx={{ mb: 1 }}>
      <Grid container justifyContent="space-between">
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
      </Grid>
      <Grid item>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Insert a title"
          label="Title"
          sx={{ border: 'none', mb: 1 }}
        />
        <TextField type="text" variant="filled" fullWidth multiline placeholder="What's new today?" minRows={5} />
      </Grid>

      <ImageGallery></ImageGallery>
    </Grid>
  );
};
