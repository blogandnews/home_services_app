import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react"
import { connect } from "react-redux"
import Home from './src/screen/Home';
import LoginScreen from './src/screen/Login';

const Stack = createNativeStackNavigator();

const renderPrivateViews = () => (
    <Stack.Screen name="Home" component={Home} options={{ headerShown: true  }} />
  )
  
  const renderPublicViews = () => (
    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false  }} />
  )

const Route = ({isSigned}) => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isSigned ? renderPrivateViews() : renderPublicViews()}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const mapStateToProps = ({AuthReducer}) => AuthReducer

export default connect(mapStateToProps)(Route)