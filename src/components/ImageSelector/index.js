import { useState } from 'react'
import { styles } from './styles'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import { Alert, Button, Image, Text, View } from 'react-native'
import { primaryBg } from '../../constants'

const ImageSelector = ({ onImage }) => {

    const [previewUri, setPreviewUri] = useState(null)

    const verifyPermissions = async () => {

        const { status } = await ImagePicker.requestCameraPermissionsAsync()

        if (status !== 'granted') {

            Alert.alert(
                'Permisos insuficientes',
                'Necesitas permiso para usar la cámara',
                [{ text: 'ok' }]
            )

            return false

        }

        return true

    }

    const handleTakePicture = async () => {

        const isCameraPermissionGranted = await verifyPermissions()

        if (!isCameraPermissionGranted) return

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.8
        })

        setPreviewUri(image.uri)
        onImage(image.uri)

    }

    return (
        <View style={styles.container} >
            <View style={styles.preview}>
                {
                    previewUri
                        ?
                        <Image style={styles.image} source={{ uri: previewUri }} />
                        :
                        <Text>No hay imagen seleccionada</Text>
                }
            </View>
            <Button title='Tomar Foto' color={primaryBg} onPress={handleTakePicture} />
        </View>
    )
}

export default ImageSelector