import React from "react";
import { FlatList, Text, View } from "react-native";
import { styles } from './styles';

const conversation = [
    { isOwner: false, content: "jkdnajsdnjkqndjknwqjkdqdwqjkdwqdwqdkwqnkjdnqwjkdnjkwqdjkwqjkdnwkjndkqndkjwqkjw" },
    { isOwner: true, content: "OK" },
    { isOwner: false, content: "OK" },
    { isOwner: true, content: "OK" },
    { isOwner: false, content: "OK" },
    { isOwner: true, content: "OK" },
    { isOwner: false, content: "OK" },
    { isOwner: false, content: "OK" },
    { isOwner: true, content: "OK" },
    { isOwner: true, content: "Test test" },
    { isOwner: false, content: "OK" },
    { isOwner: true, content: "OKdsaodjqwjdhiqwduwqdiwqudhwqidhiuwqhduiwqhidhwq12" },
];

const renderItem = ({item}) => (<View style={{...styles.boxMessage, alignSelf: item.isOwner ? 'flex-end': 'flex-start' , backgroundColor: item.isOwner ? '#1e52ff' : '#214069'}}><Text style={styles.messageContent}>{item.content}</Text></View>);

const Chatting = ({}) => {
    return (
        <View style={styles.chatView}>
            <FlatList 
                data={conversation}
                renderItem={renderItem}
            />
        </View>
    )
}

export default Chatting;