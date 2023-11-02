import React, {useEffect, useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import IconSvgAuthLogo from "../../assets/auth/IconSvgAuthLogo";
import {DataHelper} from "../../helpers/DataHelper";
import {AuthButton} from "../../components/auth/AuthButton";
import {useForm} from "react-hook-form";

export const AuthScreenKI = () => {
    enum EAuthScreen {
        USERNAME = 'username',
        PASSWORD = 'password',
    }

    const {watch, setValue, register, handleSubmit} = useForm({

    });

    const handelChange = (name: string, val: string) => {
        setValue(name, val)
    }

    const sendData = (data:any) => {
        console.log(12121,data)
    }

    useEffect(() => {
        register(EAuthScreen.USERNAME);
        register(EAuthScreen.PASSWORD);
    },[]);
    return(
        <View style={styles.container}>
            <IconSvgAuthLogo/>
            <View style={{marginTop: 20}}>
                <TextInput
                    value={watch(EAuthScreen.USERNAME)}
                    style={styles.input}
                    placeholder={'User Name'}
                />
                <TextInput
                    value={watch(EAuthScreen.PASSWORD)}
                    style={styles.input}
                    placeholder={'Password'}/>
                <AuthButton title={'Log In'} onPress={() => {}}
                />
            </View>


        </View>
    )
}
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
