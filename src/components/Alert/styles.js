import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    backDrop: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#000000',
        opacity: 0.7,
    },
    
    alertContainer: {
        top: 0,
        left:0,
        width: '100%',
        height: '100%',
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        zIndex: 10
    },
    alertPopUp: {
        display: 'flex',
        width:  '80%',
        backgroundColor: '#F9F9F9F9',
        borderRadius: 15,
        alignItems: 'center',
        borderColor: '#ffb35e',
        borderWidth: 2
    },
    alertIcon: {
        marginTop: 20
    },

    alertTitle: {
        fontSize: 14,
        fontWeight: "700",
    },
    alertContent: {
        padding: 8,
    },
    alertAction: {
        padding: 10
    },
    alertButton: {
        borderColor: '#ffb35e',
        borderWidth: 1,
        padding: 4,
        borderRadius: 25,
        width: 100
    }
});