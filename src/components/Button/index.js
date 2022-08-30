import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default Button = ({title, color, style, ...props}) => {
    return (
        <TouchableOpacity style={{...styles.general, ...style}}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}