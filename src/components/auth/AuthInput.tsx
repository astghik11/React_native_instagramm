import React from 'react';
import {StyleSheet,Text, TextInput, TouchableOpacity, View} from 'react-native';
import {AuthButton} from "./AuthButton";
import {DataHelper} from "../../helpers/DataHelper";
import {Controller} from "react-hook-form";

interface IAuthInput {
    name: string,
    placeholder: string,
    control: any,
    rules: any,
    secureTextEntry: boolean
}

export const AuthInput = (
    {
        control,
        name,
        placeholder,
        secureTextEntry,
        rules = {}
    }: IAuthInput) => {
    return(
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({field: {value, onChange, onBlur}, fieldState:{error}}) =>
                    <>
                    <View>
                        <TextInput
                            style={[styles.input,{borderColor: error ? 'red' : 'grey'}]}
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholder={placeholder}
                            secureTextEntry={secureTextEntry}
                        />
                    </View>
                        {error && <Text style={{color:'red'}}>{error.message || 'error'}</Text>}
                    </>
                    }
            />
    )
}





const styles = StyleSheet.create({
    input: {
        height: 44,
        width: DataHelper.getWidth() * 0.9,
        borderWidth: 0.5,
        marginTop: 8,
        borderColor: 'grey',
        padding: 10,
        backgroundColor: '#FAFAFA'
    },
});

export default AuthInput;
