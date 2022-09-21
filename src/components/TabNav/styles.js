import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    test: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'red'
    },
    tabNavContainer: {
        position: 'absolute',
        bottom: 30,
        left: 20,
        right: 20,
        borderRadius: 25,
        height: 60,
        backgroundColor: '#ffff',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,

        elevation: 5,
    },

    tabItem: {
        height: 60,
    },
    tabItemIcon: {
        height: 60,
        width: 60,
        borderRadius: 50
    }
})