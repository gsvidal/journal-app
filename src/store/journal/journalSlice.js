import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSaving: true,
  messageSave: '',
  notes: [],
  active: null,
  // active: {
  //   id: 'ABC123',
  //   title: '',
  //   body: '',
  //   date: 1234567,
  //   imageUrls: [], //https://pic1.jpg, https://pic2.jpg, https://pic3.jpg, 
  // }
}

export const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    addNewEmptyNote: (state, action) => {

    },
    setActiveNote: (state, action) => {

    },
    setNotes: (state, action) => {

    },
    setSaving: (state) => {

    },
    updateNote: (state, action) => {

    },
    deleteNoteById: (state, action) => {

    },
  }
})

export const { 
  addNewEmptyNote
  ,setActiveNote
  ,setNotes
  ,setSaving
  ,updateNote
  ,deleteNoteById } = journalSlice.actions;

export default journalSlice.reducer;