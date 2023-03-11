import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NothingSelectedView, NoteView } from '../views';
import AddIcon from '@mui/icons-material/Add';

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.7 },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddIcon sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
