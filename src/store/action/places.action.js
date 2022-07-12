import { ADD_PLACES } from '../types/places.types'

export const addPlace = placeName => {
    return{
        type: ADD_PLACES,
        placeName
    }
}