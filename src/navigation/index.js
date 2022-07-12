import { NavigationContainer } from '@react-navigation/native'
import PlaceNavigator from './PlaceNavigator'

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <PlaceNavigator />
        </NavigationContainer>
    )
}

export default AppNavigator