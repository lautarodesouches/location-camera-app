import { StyleSheet } from 'react-native'
import { primaryBg, themeText} from '../../constants'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderBottomColor: primaryBg,
        borderBottomWidth: 1,
        padding: 20,
        flexDirection: 'row',
    },
    image: {
        width: 85,
        height: 85,
        borderRadius: 20,
    },
    info: {
        marginLeft: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    title: {
        color: themeText,
        fontSize: 22,
        marginBottom: 6,
    },
    address: {
        color: themeText,
        fontSize: 16,
    },
})