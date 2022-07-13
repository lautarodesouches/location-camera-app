import { Image, ScrollView, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { MapPreview } from '../../components'
import { styles } from './styles'

const PlaceDetailScreen = ({ route }) => {

    const { placeId } = route.params

    const place = useSelector(state => state.place.places.find(place => place.id === placeId))

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={{ uri: place.image }} style={styles.image} />
            <View style={styles.location}>
                <View style={styles.addresContainer}>
                    <Text style={styles.address}>
                        { place.address }
                    </Text>
                </View>
                <MapPreview containerStyle={styles.map} location={{ lat: place.coords.lat, lng: place.coords.lng }}>
                    <Text>Ubicacion no disponible</Text>
                </MapPreview>
            </View>
        </ScrollView>
    )
}

export default PlaceDetailScreen