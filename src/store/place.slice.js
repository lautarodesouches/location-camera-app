import { createSlice } from '@reduxjs/toolkit'
import Place from '../models/Place'
import * as FileSystem from 'expo-file-system'

const initialState = {
    places: []
}

const placeSlice = createSlice({
    name: 'place',
    initialState,
    reducers: {
        addPlace: (state, action) => {

            const newPlace = new Place(
                Date.now(),
                action.payload.title,
                action.payload.image,
            )
            state.places.push(newPlace)

        }
    }
})

export const { addPlace } = placeSlice.actions

export const savePlace = (title, image) => {
    return async dispatch => {
        
        const fileName = image.split('/').pop()
        const path = FileSystem.documentDirectory + fileName

        try {

            await FileSystem.moveAsync({
                from: image,
                to: path
            })

        } catch (error) {
            console.log(error)
            throw error
        }

        dispatch(addPlace({ title, image: path }))

    }
}

export default placeSlice.reducer