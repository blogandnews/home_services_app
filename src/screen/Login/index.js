import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';
import TextInput from '../../components/Input/TextInput'
import Button from '../../components/Button';
import Alert from '../../components/Alert';
import { connect } from 'react-redux';
import { LOGIN_REQUESTED } from '../../redux/reducer/AuthReducer';
import { RESET_ERROR } from '../../redux/reducer/ErrorReducer';

const backgroundImageUrl = 'https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_1280.jpg'

const LoginScreen = ({login, tryAgain, errorMessage}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <View style={styles.section}>
            <Image source={{uri: backgroundImageUrl}} style={styles.backgroundImage} ></Image>
            <View style={styles.formSection}>
                <Text style={styles.title}>ĐĂNG NHẬP</Text>
                <TextInput placeholder="Please enter your username" style={styles.formInput} onChangeText={setEmail} />
                <TextInput placeholder="Please enter your password" style={styles.formInput} secureTextEntry={true} onChangeText={setPassword} />
                <Button style={styles.formInput} title={"Submit"} onPress={() => login(email, password)} />
            </View>
            {errorMessage && <Alert title="Error !!!" message={errorMessage} btnTitle="Try Again" onPress={tryAgain} />}
        </View>
    );
}

const mapStateToProps = ({AuthReducer, ErrorReducer}) => ({...AuthReducer, ...ErrorReducer})

const mapDispatchToProps = (dispatch) => ({
    login: (email, password) => dispatch({type: LOGIN_REQUESTED, email, password}),
    tryAgain: () => dispatch({ type: RESET_ERROR })
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);