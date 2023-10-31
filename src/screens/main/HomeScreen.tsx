import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';
import {IconSvgLogo} from "../../assets/icons/IconSvgLogo";
import IconSvgPlus from "../../assets/icons/IconSvgPlus";
import {IconSvgMessage} from "../../assets/icons/IconSvgMessage";
import {IconSvgFavorite} from "../../assets/icons/IconSvgFavorite";
import {TextHelper} from "../../helpers/TextHelper";
import {PostCard} from "../../UI/PostCard";
import {HistoryData} from "../../store/HistoryData";
import {HistoryHelper} from "../../helpers/HistoryHelper";
import {IHistory} from "../../tipes/HIstoryTypes";


export const HomeScreen = () => {
    return(
        <>
            <View style={styles.topContainer}>
                <IconSvgLogo/>
                <View style={styles.topContainerIcon}>
                    <TouchableOpacity style={{marginRight:20}}>
                        <IconSvgPlus/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginRight:20}}>
                        <IconSvgFavorite/>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <IconSvgMessage/>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>

                <ScrollView style={{marginTop: 12}} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {HistoryHelper.getHistory(HistoryData).map((item: IHistory, index) => (
                        <View key={item.id} style={[styles.historyItemContainer, index === 0 && {marginLeft: 8}]}>

                            <TouchableOpacity style={[styles.historyItem, item.active ? styles.historyItemActive : styles.historyItemDisActive] }>
                                <Image style={styles.history} source={{uri: item.avatar}}/>
                            </TouchableOpacity>

                            <Text style={{color: 'black', marginTop: 3}}>{TextHelper.getUserHistoryName(item.name)}</Text>
                        </View>

                    ))}
                </ScrollView>

                {[...Array(10)].map((_, index) => (
                    <PostCard key={index}/>
                ))}
            </ScrollView>
        </>

    )
};
const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        paddingHorizontal: 15,
        paddingTop: 6,
    },
    topContainerIcon: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    },
    history: {
        width: 60,
        height: 60,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: 'white',
    },
    historyItem: {
        width: 65,
        height: 65,
        borderRadius: 65,
        borderWidth: 2,
    },
    historyItemActive: {
        borderColor: 'red',
    },
    historyItemDisActive: {
        borderColor: 'grey',
    },
    historyItemContainer: {
        marginRight: 15,
    }
})



