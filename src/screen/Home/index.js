import React from 'react';
import { View, Text  } from "react-native";
import { connect } from 'react-redux';
import TabNav from '../../components/TabNav';
import Chatting from '../Chatting';



const Home = ({ user }) => {
    return (
       <Chatting />
    );
}

const mapStateToProps = ({ AuthReducer }) => AuthReducer

export default connect(mapStateToProps, {})(Home)