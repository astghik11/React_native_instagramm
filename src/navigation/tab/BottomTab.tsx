import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {HomeScreen} from "../../screens/HomeScreen";
import {SearchScreen} from "../../screens/SearchScreen";
import {Screens} from "../screens/Screens";
import IconSvgSearch from "../../assets/bottom-tab/IconSvgSearch";
import IconSvgHome from "../../assets/bottom-tab/IconSvgHome";
import IconSvgHomeActive from "../../assets/bottom-tab/IconSvgHomeActive";
import IconSvgReels from "../../assets/bottom-tab/IconSvgReels";
import IconSvgNotification from "../../assets/bottom-tab/IconSvgNotification";

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
                component={SearchScreen}
                options={{
                    tabBarIcon: ({}) => {
                        return  <IconSvgReels/>
                    }
                }}
            />
            <Tab.Screen
                name={Screens.NOTIFICATION}
                component={SearchScreen}
                options={{
                    tabBarIcon: ({}) => {
                        return  <IconSvgNotification/>
                    }
                }}
            />
            <Tab.Screen
                name={Screens.PROFILE}
                component={SearchScreen}
                options={{
                    tabBarIcon: ({}) => {
                        return  <IconSvgSearch/>
                    }
                }}
            />
        </Tab.Navigator>
    )
}
