import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    section: {
        flex: 1,
    },
    backgroundImage: {
        resizeMode: 'cover',
        opacity: .75,
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%'
    },

    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: 'white',
        textAlign: 'center',
        marginBottom: 20
    },
    formSection: {
        borderWidth: 1,
        justifyContent: "center",
        alignContent: "center",
        flex: 1,
        padding: 10,
    },
    formInput: {
       margin: 8
    },
    formActions: {

    }
    
})

export default styles;