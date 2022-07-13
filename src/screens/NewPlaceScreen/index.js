import { useState } from 'react'
import { Button, ScrollView, TextInput, View, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import ImageSelector from '../../components/ImageSelector'
import { primaryBg, secondaryBg } from '../../constants'
import { addPlace } from '../../store/place.slice'
import { styles } from './styles'

const NewPlaceScreen = ({ navigation }) => {

    const dispatch = useDispatch()

    const [title, setTitle] = useState('')

    const handleTitleChange = text => setTitle(text)
    const handleSave = () => {
        dispatch(addPlace(title))
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
                />
                <ImageSelector
                    onImage={image => console.log(image)}
                />
                <Button onPress={handleSave} title='Grabar dirección' color={secondaryBg} />
            </ScrollView>
        </View>
    )
}

export default NewPlaceScreen