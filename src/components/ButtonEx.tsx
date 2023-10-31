import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {IButtonEx} from "../tipes/ButtonEx";



export const ButtonEx = ({title,onPress}: IButtonEx) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={{color: 'black', fontSize: 16}}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 40,
        borderRadius: 2,
        borderWidth: 2,
        borderColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
