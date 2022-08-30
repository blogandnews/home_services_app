import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';
import TextInput from '../../components/Input/TextInput'
import Button from '../../components/Button';
import { connect } from 'react-redux';

const backgroundImageUrl = 'https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_1280.jpg'

const LoginScreen = ({login}) => {

    return (
        <View style={styles.section}>
            <Image source={{uri: backgroundImageUrl}} style={styles.backgroundImage} ></Image>
            <View style={styles.formSection}>
                <Text style={styles.title}>ĐĂNG NHẬP</Text>
                <TextInput placeholder="Please enter your username" style={styles.formInput} />
                <TextInput placeholder="Please enter your password" style={styles.formInput} secureTextEntry={true} />
                <Button style={styles.formInput} title={"Submit"} onPress={() => login(true)} />
            </View>
        </View>
    );
}

const mapStateToProps = ({AuthReducer}) => AuthReducer

const mapDispatchToProps = (dispatch) => ({
    login: (isSigned) => dispatch({type: "LOGIN", isSigned})
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);