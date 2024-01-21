import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { INotes } from '../services/note/interface'

interface NoteState {
    userNotes: INotes[],
    sharedNotes: INotes[]
}

const initialState = {
    userNotes: [],
    sharedNotes: []
} as NoteState

const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        setUserNotes(state, action: PayloadAction<INotes[]>) {
            state.userNotes = action.payload;
        },
        setUserShareNotes(state, action: PayloadAction<INotes[]>) {
            state.sharedNotes = [...action.payload];
        },
    },
})

export const { setUserNotes, setUserShareNotes } = noteSlice.actions
export default noteSlice.reducer