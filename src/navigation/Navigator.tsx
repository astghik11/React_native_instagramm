import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {MainStack} from "./stack/MainStack";
import {AuthScreen} from "../screens/auth/AuthScreen";

export const Navigator = () => {
    const isAuth = false;
    return(
        <NavigationContainer>
            {isAuth ? <MainStack/> : <AuthScreen/>}
        </NavigationContainer>
    )
}
