import { configureStore } from '@reduxjs/toolkit'
import placesReducer from './reducer/places.reducer'

export const store = configureStore({
    reducer: {
        place: placesReducer
    }
})