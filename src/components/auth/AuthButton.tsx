import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";


interface IAuthButton {
    title: string,
    onPress:() => void
}


export const AuthButton = ({title,onPress}: IAuthButton) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={{color: 'white', fontSize: 16}}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 44,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3797EF',
        marginTop: 32
    }
})
