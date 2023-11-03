import React, {useEffect} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {MainStack} from "./stack/MainStack";
import {AuthScreen} from "../screens/auth/AuthScreen";
import {useRootStore} from "../base/hooks/useRootStore";
import {observer} from "mobx-react";

export const Navigator = observer(() => {

    const {authStore} = useRootStore()

    useEffect(() => {
        authStore.isAuth()
    }, [authStore.token]);

    return(
        <NavigationContainer>
            {authStore.token ? <MainStack/> : <AuthScreen/>}
        </NavigationContainer>
    )
})
