import { StyleSheet } from 'react-native'
import { primaryBg, primaryText, themeBg } from '../../constants'

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: themeBg,
    },
    image: {
        height: '30%',
        minHeight: 250,
        width: '100%'
    },
    location: {
        margin: '2.5%',
        flex: 1,
        borderRadius: 10,
        backgroundColor: primaryBg,
    },
    addresContainer: {
        padding: 20,
    },
    address: {
        color: primaryText,
        textAlign: 'center',
        fontSize: 16,
    },
    map: {
        minHeight: 300,
        flex: 1,
    },
})