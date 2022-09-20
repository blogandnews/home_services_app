import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";


export default function Alert({type = "notice", title = "Notice Notification", message, btnTitle, onPress}) {
    return (
        <View style={styles.container}>
            <View style={styles.backDrop}></View>
            <View style={styles.alertContainer}>
                <View style={styles.alertPopUp}>
                    <View style={styles.alertIcon}>
                        <Image source={require('../../assets/icons/warning.png')} style={{width: 50, height: 50, display: "flex", justifyContent: "center", }}  />
                    </View>
                    <Text style={styles.alertTitle}>{title}</Text>
                    <Text style={styles.alertContent}>{message}</Text>
                    <View style={styles.alertAction}>
                        <TouchableOpacity style={styles.alertButton} onPress={onPress}><Text style={{color: '#a85c1b', padding: 5, textAlign: 'center'}}>{btnTitle}</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}