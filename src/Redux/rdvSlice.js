import { createSlice } from "@reduxjs/toolkit";


const initialState = []


export const rdvSlice = createSlice({
    name: 'rdv',
    initialState,
    reducers: {
        add: (state, action) => {
            const newRdv = { name: action.payload }
            state = [...state, newRdv]
            localStorage.setItem('state', JSON.stringify(state))
            localStorage.setItem('count', JSON.stringify(state.length))
            return state
        }

    }
})

export const { add } = rdvSlice.actions

export default rdvSlice.reducer