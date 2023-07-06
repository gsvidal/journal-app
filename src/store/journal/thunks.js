import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    const setDocResponse = await setDoc(newDoc, newNote);

    console.log({ newDoc, setDocResponse });

    // dispatch
    // dispatch(newNote)
    // dispatch(activateNote)
  };
};
