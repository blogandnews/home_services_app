import React from "react";
import { View, Text } from "react-native";
import Button from "../Button";
import { styles } from "./styles";


export default function Alert({type = "notice", title = "Notice Notification", message, btnTitle, onPress}) {
    return (
        <View style={styles.container}>
            <View style={styles.backDrop}></View>
            <View style={styles.alertContainer}>
                <View style={styles.alertPopUp}>
                    <View style={styles.alertIcon}>
                        <Text>ICON OK</Text>
                    </View>
                    <Text style={styles.alertTitle}>{title}</Text>
                    <Text style={styles.alertContent}>{message}</Text>
                    <View style={styles.alertAction}>
                        <Button title={btnTitle} onPress={onPress} />
                    </View>
                </View>
            </View>
        </View>
    )
}