import { ListedPlacesScreen, MapScreen, NewPlaceScreen, PlaceDetailScreen } from '../../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { themeBg, themeText } from '../../constants'
import { TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

const Stack = createNativeStackNavigator()

const PlaceNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='ListedPlaces'
            screenOptions={{
                headerStyle: themeBg
            }}
        >
            <Stack.Screen
                name='ListedPlaces'
                component={ListedPlacesScreen}
                options={({ navigation }) => ({
                    title: 'Direcciones',
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('NewPlace')}>
                            <Ionicons
                                name='add-circle-outline'
                                size={30}
                                color={themeText}
                            />
                        </TouchableOpacity>
                    )
                })}
            />
            <Stack.Screen
                name='NewPlace'
                component={NewPlaceScreen}
                options={{
                    title: 'Nueva dirección'
                }}
            />
            <Stack.Screen
                name='PlaceDetail'
                component={PlaceDetailScreen}
                options={{
                    title: 'Detalle de la dirección'
                }}
            />
            <Stack.Screen
                name='Map'
                component={MapScreen}
                options={{
                    title: 'Mapa'
                }}
            />
        </Stack.Navigator>
    )
}

export default PlaceNavigator