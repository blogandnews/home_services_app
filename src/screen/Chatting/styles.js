import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    chatView: {

    },
    boxMessage: {
        flexDirection: 'row',
        maxWidth: '55%',
        minWidth: 100,
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: 10,
        borderRadius: 20,
        shadowColor: "#000",

        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        elevation: 5,
    },
    messageContent: {
        color: 'white',
        flexShrink: 1,
        padding: 15,
        fontSize: 18
    }
});