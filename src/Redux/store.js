import { configureStore } from '@reduxjs/toolkit'
import rdvSlice from "./rdvSlice";


export const store = configureStore({
    reducer: { rdv: rdvSlice },
})