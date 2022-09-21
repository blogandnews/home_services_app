import React from "react";
import { Text, View, Image, FlatList } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { styles } from "./styles";

const Tab = createBottomTabNavigator();

const listPeople = [
    {id: 1, name: "Mr CuongNguyen"},
    {id: 2, name: "Mr CuongNguyen"},
    {id: 3, name: "Mr CuongNguyen"},
    {id: 4, name: "Mr CuongNguyen"},
    {id: 5, name: "Mr CuongNguyen"}
]

const renderItem = ({item}) => <Text>{item.name}</Text>

const Page1 = () => (<View style={styles.test}>
    <FlatList data={listPeople} renderItem={renderItem} />
</View>)
const Page2 = () => (<View><Text>2</Text></View>)
const Page3 = () => (<View><Text>2</Text></View>)

const navItems = [
    <Tab.Screen name="Home" component={Page1} options={{ tabBarIcon: props => <NavItem {...props} icon={require("../../assets/icons/home.png")} /> }} />,
    <Tab.Screen name="Message" component={Page2} options={{ tabBarIcon: props => <NavItem {...props} icon={require("../../assets/icons/message.png")} /> }} />,
    <Tab.Screen name="Setting" component={Page3} options={{ tabBarIcon: props => <NavItem {...props} icon={require("../../assets/icons/setting.png")} /> }} />
]

const NavItem = ({size, color, focused, index, icon}) => (<Image source={icon} style={{...styles.tabItemIcon, borderWidth: focused ?? 1,  borderColor: '#e85d35'}} />);

export default function TabNav({state, descriptors, navigation}) {

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: styles.tabNavContainer,
            tabBarItemStyle: styles.tabItem,
            tabBarShowLabel: false
        }} >
            {navItems.map(i => i)}
        </Tab.Navigator>
    )
}