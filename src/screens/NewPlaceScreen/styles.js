import { StyleSheet } from 'react-native'
import { primaryBg } from '../../constants'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        paddingHorizontal: '10%',
        paddingVertical: '5%',
        flexGrow: 1,
        justifyContent: 'center',
    },
    title: {
        alignSelf: 'flex-start',
        fontSize: 22,
        marginBottom: 10
    },
    input: {
        width: '100%',
        fontSize: 18,
        borderBottomWidth: 1,
        borderColor: primaryBg,
        borderRadius: 5,
        marginBottom: 20,
        padding: 5,
        textAlign: 'center'
    },
})