import { ListedPlacesScreen, MapScreen, NewPlaceScreen, PlaceDetailScreen } from '../../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { themeBg } from '../../constants'

const Stack = createNativeStackNavigator()

const PlaceNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='ListedPlacesScreen'
            screenOptions={{
                headerStyle: themeBg
            }}
        >
            <Stack.Screen
                name='ListedPlacesScreen'
                component={ListedPlacesScreen}
                options={{
                    title: 'Direcciones'
                }}
            />
            <Stack.Screen
                name='NewPlaceScreen'
                component={NewPlaceScreen}
                options={{
                    title: 'Nueva dirección'
                }}
            />
            <Stack.Screen
                name='PlaceDetailScreen'
                component={PlaceDetailScreen}
                options={{
                    title: 'Detalle de la dirección'
                }}
            />
            <Stack.Screen
                name='MapScreen'
                component={MapScreen}
                options={{
                    title: 'Mapa'
                }}
            />
        </Stack.Navigator>
    )
}

export default PlaceNavigator