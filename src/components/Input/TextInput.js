import React from "react";
import { TextInput as BaseInput} from "react-native";
import styles from "./styles";


export default TextInput = ({style, ...props}) => {
    return <BaseInput style={{ ...styles.general, ...style}} {...props} />
}