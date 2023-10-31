import React from "react";
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import IconSvgPlus from "../../assets/icons/IconSvgPlus";
import IconSvgMenu from "../../assets/icons/IconSvgMenu";
import IconSvgOpen from "../../assets/icons/IconSvgOpen";
import {ButtonEx} from "../../components/ButtonEx";
import {HistoryHelper} from "../../helpers/HistoryHelper";
import {HistoryData} from "../../store/HistoryData";
import {IHistory} from "../../tipes/HIstoryTypes";
import {TextHelper} from "../../helpers/TextHelper";

export const ProfileScreen = () => {
    return(
        <ScrollView>
            <View style={{ padding: 16}}>
                <View style={styles.topContainer}>
                    <View style={styles.flexRow}>
                        <Text style={styles.nikeName}>astx__harutyunyan</Text>
                        <TouchableOpacity style={{marginTop: 6, marginLeft: 3}}>
                            <IconSvgOpen/>
                        </TouchableOpacity>

                    </View>
                    <View  style={styles.flexRow}>
                        <TouchableOpacity style={{marginRight: 20}}>
                            <IconSvgPlus/>
                        </TouchableOpacity>

                        <TouchableOpacity style={{marginTop: 3}}>
                            <IconSvgMenu/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.flexRow, {marginTop: 16}]}>
                    <TouchableOpacity style={styles.profileItem}>
                        <Image style={styles.profilePicture}
                               source={{uri: 'https://lh3.googleusercontent.com/a/ACg8ocJxNBR6X1930B3I8hl9NaFyOVHWjXxZDBCODLSLNB6iZZs=s288-c-no'}}/>
                    </TouchableOpacity>

                    <Text style={styles.followerText}>0.000 {"\n"}
                    <Text  style={styles.followerTextBR}>Posts</Text></Text>
                    <Text style={styles.followerText}>0.000 {"\n"}
                        <Text style={styles.followerTextBR}>Followers</Text></Text>
                    <Text style={styles.followerText}>0.000{"\n"}
                        <Text  style={styles.followerTextBR}>Following</Text></Text>

                </View>
                <View>
                    <Text numberOfLines={2} style={styles.followerText}>
                        astx__harutyunyan
                    </Text>
                    <Text style={[styles.followerTextBR,{marginTop: 6, marginBottom: 20}]}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </Text>
                </View>
                <ButtonEx title={'Edit Profile'} onPress={() => {}}/>
                <ScrollView style={{marginTop: 12, flexDirection: 'row'}} horizontal={true} showsHorizontalScrollIndicator={false}>

                {HistoryHelper.getHistory(HistoryData).map((item: IHistory, index) => (
                        <View key={item.id} style={[styles.historyItemContainer, index === 0 && {marginLeft: 8}]}>

                            <TouchableOpacity style={styles.historyItem}>
                                <Image style={styles.history} source={{uri: item.avatar}}/>
                            </TouchableOpacity>

                            <Text style={{color: 'black', marginTop: 3}}>{TextHelper.getUserHistoryName(item.name)}</Text>
                        </View>

                    ))}
                </ScrollView>
            </View>


        </ScrollView>
    )
}
const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    nikeName: {
        fontWeight: '700',
        fontSize: 22,
        lineHeight: 26.25,
        color: '#000000'
    },
    followerText: {
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 19,
        color: '#000000',
        paddingTop: 25,
    },
    followerTextBR: {
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 15,
        color: '#000000',
    },
    profilePicture: {
        width: 91,
        height: 91,
        borderRadius: 91,
        borderWidth: 2,
        borderColor: 'white',
    },
    profileItem: {
        width: 96,
        height: 96,
        borderRadius: 96,
        borderWidth: 2,
        borderColor: 'red',
    },
    historyItemContainer: {
        marginRight: 15,
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
})
