import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  noteList: {
    data: [
      {
        title: "ReactJs",
        detail: "A Javascript libary for building user interfaces",
      },
      {
        title: "Html",
        detail: "A Javascript libary for building user interfaces",
      },
    ],
  },
}

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNoteRequest: (state, action) => {
      const { data } = action.payload
      state.noteList.data = [...state.noteList.data, data]
    },
    removeNoteRequest: (state, action) => {
      const { index } = action.payload
      state.noteList.data = state.noteList.data.splice(index, 1)
    },
  },
})

export const { addNoteRequest, removeNoteRequest } = noteSlice.actions

export default noteSlice.reducer
