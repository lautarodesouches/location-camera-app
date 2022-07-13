import { Alert, Button, Text, View } from 'react-native'
import { styles } from './styles'
import * as Location from 'expo-location'
import { useEffect, useState } from 'react'
import { primaryBg } from '../../constants'
import MapPreview from '../MapPreview'
import { useNavigation, useRoute } from '@react-navigation/native'

const LocationSelector = ({ onLocationSelected }) => {

    const navigation = useNavigation()
    const route = useRoute()

    const mapLocation = route?.params?.mapLocation

    const [pickedLocation, setPickedLocation] = useState(null)

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

    const handlePickLocation = async () => {

        const isLocationGranted = await verifyPermissions()

        if (!isLocationGranted) return

        navigation.navigate('Map')

    }

    useEffect(() => {

        if (mapLocation) {
            
            setPickedLocation({
                lat: mapLocation.latitude,
                lng: mapLocation.longitude,
            })
            onLocationSelected({
                lat: mapLocation.latitude,
                lng: mapLocation.longitude,
            })

        }

    }, [mapLocation])

    return (
        <View style={styles.container}>
            <MapPreview location={pickedLocation} containerStyle={styles.preview}>
                <Text>Esperando ubicación</Text>
            </MapPreview>
            <View style={styles.buttons}>
                <Button title='Obtener ubicación' color={primaryBg} onPress={handleGetLocation} />
                <Button title='Elegir del mapa' color={primaryBg} onPress={handlePickLocation} />
            </View>
        </View>
    )
}

export default LocationSelector