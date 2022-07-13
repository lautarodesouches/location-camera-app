import { Alert, Button, Text, View } from 'react-native'
import { styles } from './styles'
import * as Location from 'expo-location'
import { useState } from 'react'
import { primaryBg } from '../../constants'
import MapPreview from '../MapPreview'

const LocationSelector = ({ onLocationSelected }) => {

    const [pickedLocation, setPickedLocation] = useState(null)

    const handleGetLocation = async () => {

        const isLocationGranted = await verifyPermissions()

        if (!isLocationGranted) return

        const location = await Location.getCurrentPositionAsync({
            timeInterval: 5000
        })

        setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
        })
        onLocationSelected({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
        })

    }

    const verifyPermissions = async () => {

        const { status } = await Location.requestForegroundPermissionsAsync()

        if (status !== 'granted') {

            Alert.alert(
                'Permisos insuficientes',
                'Necesitas permiso para usar su ubicación',
                [{ text: 'ok' }]
            )

            return false

        }

        return true

    }

    return (
        <View style={styles.container}>
            <MapPreview location={pickedLocation} containerStyle={styles.preview}>
                <Text>Esperando ubicación</Text>
            </MapPreview>
            <Button title='Obtener ubicación' color={primaryBg} onPress={handleGetLocation} />
        </View>
    )
}

export default LocationSelector