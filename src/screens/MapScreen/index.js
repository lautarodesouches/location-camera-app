import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { styles } from './styles'
import Ionicons from '@expo/vector-icons/Ionicons'
import { themeText } from '../../constants'

const MapScreen = () => {

    const navigation = useNavigation()

    const initialRegion = {
        latitude: 40.712784,
        longitude: -74.005941,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    const [selectedLocation, setSelectedLocation] = useState(null)

    const handleSelectLocation = e => {
        setSelectedLocation({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
        })
    }

    const handleSaveLocation = () => {

        if (!selectedLocation) return

        navigation.navigate('NewPlace', { mapLocation: selectedLocation })

    }

    useLayoutEffect(() => {

        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={handleSaveLocation}>
                    <Ionicons name="md-save-sharp" size={20} color={themeText} />
                </TouchableOpacity>
            )
        })

    }, [navigation, selectedLocation])

    return (
        <MapView
            initialRegion={initialRegion}
            style={styles.container}
            onPress={handleSelectLocation}
        >
            {
                selectedLocation && (
                    <Marker
                        title='Ubicacion seleccionada'
                        coordinate={{
                            ...selectedLocation,
                            latitude: selectedLocation.latitude,
                            longitude: selectedLocation.longitude
                        }}
                    />
                )
            }
        </MapView>
    )
}

export default MapScreen