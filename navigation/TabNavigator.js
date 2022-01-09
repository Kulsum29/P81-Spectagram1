import React from "react";
import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'
const Tab = createBottomTabNavigator()
const TabNav = () =>{
    return(
        <Tab.Navigator
            screenOptions={({route})=>({
                tabBarIcon: ({focused, color, size})=>{
                    let iconName;
                    if(route.name === 'Feed'){
                        iconName = focused ? 'book' : 'book-outline'
                    }
                    else if(route.name === 'Create'){
                        iconName = focused ? 'create' : 'create-outline'
                    }
                    return(
                        <Ionicons name = {iconName} size = {size} color= {color}/>
                    )
                }
            })}
            tabBarOptions = {{
                activeTintColor:'rebeccapurple',
                inactiveTintColor:'grey'
            }}
        >
            <Tab.Screen name = 'Feed' component = {Feed}/>
            <Tab.Screen name = 'Create' component = {CreatePost}/>
        </Tab.Navigator>
    )
}
export default TabNav