import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {HomeScreen} from "../../screens/main/HomeScreen";
import {SearchScreen} from "../../screens/main/SearchScreen";
import {Screens} from "../screens/Screens";
import IconSvgSearch from "../../assets/bottom-tab/IconSvgSearch";
import IconSvgHome from "../../assets/bottom-tab/IconSvgHome";
import IconSvgHomeActive from "../../assets/bottom-tab/IconSvgHomeActive";
import IconSvgReels from "../../assets/bottom-tab/IconSvgReels";
import IconSvgNotification from "../../assets/bottom-tab/IconSvgNotification";
import {Image, StyleSheet, View} from "react-native";
import {ReelsScreen} from "../../screens/main/ReelsScreen";
import {NotificationScreen} from "../../screens/main/NotificationScreen";
import {ProfileScreen} from "../../screens/main/ProfileScreen";

export const BottomTab = () => {
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
            <Tab.Screen
                name={Screens.HOME}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({focused}) => {
                        return focused ? <IconSvgHomeActive/> : <IconSvgHome/>
                    }
                }}
            />
            <Tab.Screen
                name={Screens.SEARCH}
                component={SearchScreen}
                options={{
                    tabBarIcon: ({}) => {
                        return  <IconSvgSearch/>
                    }
                }}
            />
            <Tab.Screen
                name={Screens.REELS}
                component={ReelsScreen}
                options={{
                    tabBarIcon: ({}) => {
                        return  <IconSvgReels/>
                    }
                }}
            />
            <Tab.Screen
                name={Screens.NOTIFICATION}
                component={NotificationScreen}
                options={{
                    tabBarIcon: ({}) => {
                        return  <IconSvgNotification/>
                    }
                }}
            />
            <Tab.Screen
                name={Screens.PROFILE}
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({focused}) => {
                        return  <View style={focused && styles.historyItem}>
                            <Image style={styles.history} source={{uri: 'https://lh3.googleusercontent.com/a/ACg8ocJxNBR6X1930B3I8hl9NaFyOVHWjXxZDBCODLSLNB6iZZs=s288-c-no'}}/>
                        </View>
                    }
                }}
            />
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({

    history: {
        width: 21,
        height: 21,
        borderRadius: 21,
        borderWidth: 1,
        borderColor: 'white',
    },
    historyItem: {
        width: 25,
        height: 25,
        borderRadius: 25,
        borderWidth: 1.5,
    },
    historyItemActive: {
        borderColor: 'red',
    },
    historyItemDisActive: {
        borderColor: 'grey',
    },
})
