import { createSlice } from '@reduxjs/toolkit'
import Place from '../models/Place'
import * as FileSystem from 'expo-file-system'
import { URL_GEOCODING } from '../constants/maps'

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
                action.payload.address,
                action.payload.coords
            )

            state.places.push(newPlace)

        }
    }
})

export const { addPlace } = placeSlice.actions

export const savePlace = (title, image, coords) => {
    return async dispatch => {

        const response = await fetch(URL_GEOCODING(coords.lat, coords.lng))

        if (!response.ok) throw new Error('No se ha podido conectar con el servidor')

        const data = await response.json()

        if (!data.results) throw new Error('No se ha podido obtener la ubicacion de estas coordenadas')

        const address = data.results[0].formatted_address

        const fileName = image.split('/').pop()
        const path = FileSystem.documentDirectory + fileName

        try {

            await FileSystem.moveAsync({
                from: image,
                to: path
            })

        } catch (error) {
            throw error
        }

        dispatch(
            addPlace({
                title,
                image: path,
                address,
                coords
            })
        )

    }
}

export default placeSlice.reducer