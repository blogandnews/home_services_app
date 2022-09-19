import React from 'react';
import { View } from "react-native";
import { connect } from 'react-redux';



const Home = ({user}) => {
    console.log(user)
    return (
        <View></View>
    );
}

const mapStateToProps = ({AuthReducer}) => AuthReducer

export default connect(mapStateToProps, {})(Home)