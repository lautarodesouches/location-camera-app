import { createSlice } from '@reduxjs/toolkit'
import Place from '../models/Place'
import * as FileSystem from 'expo-file-system'
import { URL_GEOCODING } from '../constants/maps'
import { fetchAddresses, insertAddress } from '../db'

const initialState = {
    places: []
}

const placeSlice = createSlice({
    name: 'place',
    initialState,
    reducers: {
        addPlace: (state, action) => {

            const newPlace = new Place(
                action.payload.id,
                action.payload.title,
                action.payload.image,
                action.payload.address,
                action.payload.coords
            )

            state.places.push(newPlace)

        },
        loadAddress: (state, action) => {
            state.places = action.payload
        }
    }
})

export const savePlace = (title, image, coords) => {
    return async dispatch => {

        let addressId = 0

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

            const result = await insertAddress(title, path, address, coords)
            addressId = result.insertId

        } catch (error) {
            throw error
        }

        dispatch(
            addPlace({
                id: addressId,
                title,
                image: path,
                address,
                coords
            })
        )

    }
}

export const loadPlaces = () => {
    return async dispatch => {
        try {

            let result = await fetchAddresses()

            for (let i = 0; i < result.rows._array.length; i++) {
                result.rows._array[i].coords = JSON.parse(result.rows._array[i].coords)
            }

            dispatch(loadAddress(result.rows._array))

        } catch (error) {
            throw error
        }
    }
}

export const { addPlace, loadAddress } = placeSlice.actions

export default placeSlice.reducer