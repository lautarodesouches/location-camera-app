import { useState } from 'react'
import { Button, ScrollView, TextInput, View, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { ImageSelector, LocationSelector } from '../../components'
import { secondaryBg } from '../../constants'
import { savePlace } from '../../store/place.slice'
import { styles } from './styles'

const NewPlaceScreen = ({ navigation }) => {

    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [image, setImage] = useState(null)
    const [location, setLocation] = useState(null)

    const handleTitleChange = text => setTitle(text)
    const handleSave = () => {
        dispatch(savePlace(title, image, location))
        navigation.navigate('ListedPlaces')
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Titulo:</Text>
                <TextInput
                    style={styles.input}
                    value={title}
                    onChangeText={text => handleTitleChange(text)}
                    autoCapitalize='words'
                />
                <ImageSelector
                    onImage={image => setImage(image)}
                />
                <LocationSelector
                    onLocationSelected={location => setLocation(location)}
                />
                <Button onPress={handleSave} title='Grabar dirección' color={secondaryBg} />
            </ScrollView>
        </View>
    )
}

export default NewPlaceScreen