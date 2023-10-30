import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from "react-native";
import IconSvgPoints from "../assets/icons/IconSvgPoints";
import {IconSvgFavorite} from "../assets/icons/IconSvgFavorite";
import {IconSvgMessage} from "../assets/icons/IconSvgMessage";
import IconSvgComent from "../assets/icons/IconSvgComent";
import IconSvgSend from "../assets/icons/IconSvgSend";
import IconSvgSave from "../assets/icons/IconSvgSave.";

export const PostCard = () => {
    return (
        <View>
            <View style={styles.topContainer}>
                <View style={styles.flexRow}>
                    <Image style={styles.avatar}
                           source={{uri: 'https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}/>
                    <Text style={{marginLeft: 9, color: 'black'}}>astx__harutyunyan</Text>
                </View>

                <TouchableOpacity style={{marginTop: 12}}>
                    <IconSvgPoints/>
                </TouchableOpacity>
            </View>
            <View>
                <Image style={styles.image}
                       source={{uri: 'https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}/>
            </View>
            <View style={styles.topContainer}>
                <View style={styles.flexRow}>
                    <TouchableOpacity>
                        <IconSvgFavorite/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginLeft:12}}>
                        <IconSvgComent/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginLeft:12}}>
                        <IconSvgSend/>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity>
                    <IconSvgSave/>
                </TouchableOpacity>
            </View>
            <Text style={styles.like}>100 Likes</Text>

            <View style={{marginHorizontal: 12}}>
                <Text numberOfLines={2}>
                    <Text style={styles.like}>
                        astx__harutyunyan {' '}
                    </Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </Text>


            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        paddingLeft: 8,
        paddingRight: 16,
        paddingVertical: 9,
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 30,
    },
    image: {
        width: '100%',
        height: 375,
    },
    like: {
        fontSize: 13,
        color: '#000',
        fontWeight: '700',
        lineHeight: 22,
        marginLeft: 12
    }
})
