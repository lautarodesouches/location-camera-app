import { StyleSheet } from 'react-native'
import { primaryBg } from '../../constants'

export const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        width: '100%'
    },
    preview: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderColor: primaryBg,
        borderWidth: 1,
        borderRadius: 3,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})