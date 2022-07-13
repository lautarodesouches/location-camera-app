import { Image, View } from "react-native"
import { URL_MAPS } from "../../constants/maps"
import { styles } from "./styles"

const MapPreview = ({ location, containerStyle, children }) => {

    const { lat, lng } = location || {}

    const mapPreviewUrl = location ? URL_MAPS(lat, lng) : ''

    return (
        <View style={[containerStyle, styles.container]}>
            {
                location
                    ?
                    <Image style={styles.mapImage} source={{ uri: mapPreviewUrl }} />
                    :
                    children
            }
        </View>
    )
}

export default MapPreview