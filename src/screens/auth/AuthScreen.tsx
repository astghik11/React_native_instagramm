import React, {useEffect, useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import IconSvgAuthLogo from "../../assets/auth/IconSvgAuthLogo";
import {DataHelper} from "../../helpers/DataHelper";
import {AuthButton} from "../../components/auth/AuthButton";
import AuthInput from "../../components/auth/AuthInput";
import {useForm} from "react-hook-form";


import {observer} from "mobx-react";
import {useRootStore} from "../../base/hooks/useRootStore";
import {LoaderFlex} from "../../components/auth/Loader";

export const AuthScreen = observer(() => {
    const {authStore} = useRootStore();

    const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    const {control, handleSubmit} = useForm();


    const sendData = (data:any) => {
        authStore.login(data)
    };

    if(authStore.loader){
        return <LoaderFlex/>
    }

    return(
        <View style={styles.container}>
            <IconSvgAuthLogo/>

            <View style={{marginTop: 20}}>
                <AuthInput
                    name={'username'}
                    placeholder={'username'}
                    control={control}
                    secureTextEntry={false}
                    rules={{required: 'Username is required', pattern: {value: EMAIL_REGEX, message: 'It must be in email form'}}}
                />
                <AuthInput
                    control={control}
                    name={'Password'}
                    placeholder={'Password'}
                    secureTextEntry
                    rules={{required: 'Password is required', minLength: {value:3, message: 'Password should be minimum 3 characters long'}}}
                />

                <AuthButton title={'Log In'} onPress={handleSubmit(sendData)}/>
            </View>

         </View>
    )
});

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      marginTop: '50%',
      paddingHorizontal: 15

  },
    input: {
        height: 44,
        width: DataHelper.getWidth() * 0.9,
        borderWidth: 0.5,
        marginTop: 8,
        borderColor: 'grey',
        padding: 10,
        backgroundColor: '#FAFAFA'
    },
})
