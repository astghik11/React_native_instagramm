import React, {useEffect, useState} from "react";
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import IconSvgPlus from "../../assets/icons/IconSvgPlus";
import IconSvgMenu from "../../assets/icons/IconSvgMenu";
import IconSvgOpen from "../../assets/icons/IconSvgOpen";
import {ButtonEx} from "../../components/ButtonEx";
import IconSvgPlusBig from "../../assets/icons/IconSvgPlusBig";
import IconSvgImageList from "../../assets/icons/IconSvgImageList";
import {IconSvgProfile} from "../../assets/icons/IconSvgProfile";
import {DataHelper} from "../../helpers/DataHelper";
import {launchImageLibrary} from "react-native-image-picker";
import {IPhoto} from "../../tipes/Photo";

export const ProfileScreen = () => {
    const exPhoto = 'https://images.unsplash.com/photo-1497316730643-415fac54a2af?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    const [photos,setPhotos]  = useState<IPhoto[]>([]);

    const setPhoto = () => {
        const arr = [...Array(6)].map((_) => ({uri: exPhoto}));
        setPhotos(arr)
    };

    //upload photo
    const addPhoto = async() => {
        const result = await launchImageLibrary({mediaType: "mixed"});
        if (result.assets){
            const addedPhotos = result.assets.map(i => ({uri: i.uri!}));
            setPhotos(prevState => [...prevState,...addedPhotos]);
        }
    }

    useEffect( () => {
        setPhoto()
    },[]);

    return(
        <ScrollView>
            <View style={{ padding: 16}}>
                <View style={styles.topContainer}>
                    <View style={styles.flexRow}>
                        <Text style={styles.nikeName}>astx__harutyunyan</Text>
                        <TouchableOpacity style={{marginLeft: 3}}>
                            <IconSvgOpen/>
                        </TouchableOpacity>

                    </View>
                    <View  style={styles.flexRow}>
                        <TouchableOpacity style={{marginRight: 20}}>
                            <IconSvgPlus/>
                        </TouchableOpacity>

                        <TouchableOpacity>
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
                <View style={{marginTop: 16}}>
                    <Text numberOfLines={2} style={styles.followerText}>
                        astx__harutyunyan
                    </Text>
                    <Text style={[styles.followerTextBR,{marginTop: 6, marginBottom: 20}]}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </Text>
                </View>
                <ButtonEx title={'Edit Profile'} onPress={addPhoto}/>

                <ScrollView style={{marginTop: 12, flexDirection: 'row'}} horizontal={true} showsHorizontalScrollIndicator={false}>

                {[...Array(6)].map((_, index1) => (
                        <View key={index1} style={styles.historyItemContainer}>

                            <TouchableOpacity style={styles.historyItem}>
                                <Image  style={styles.history} source={{uri: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=1931&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}/>
                            </TouchableOpacity>
                            <Text style={[styles.followerTextBR,{ marginTop: 3, marginLeft: 10}]}>Story {index1 + 1} </Text>
                        </View>
                    ))}
                    <View style={styles.historyItemContainer}>
                        <TouchableOpacity style={styles.historyItem}>
                            <View style={{alignItems: 'center', marginTop: 19}}>
                                <IconSvgPlusBig/>
                            </View>
                        </TouchableOpacity>
                        <Text style={[styles.followerTextBR, {marginTop: 3, marginLeft: 16}]}>New</Text>
                    </View>
                </ScrollView>

                <View  style={styles.flexImage}>
                    <TouchableOpacity>
                        <IconSvgImageList/>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <IconSvgProfile/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.imageContainer}>
                {photos.map((item,index: number) => (
                    <TouchableOpacity key={index}>
                        <Image style={styles.smallImage} source={{uri: item.uri}}/>
                    </TouchableOpacity>
                    )
                )}
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
        alignItems: 'center',
    },
    flexImage: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 16
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
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
        marginRight: 9,
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
        borderColor: 'grey',
    },
    smallImage: {
        width: DataHelper.getWidth() * 0.33,
        height: DataHelper.getWidth() * 0.33,
        marginTop: DataHelper.getWidth()* 0.003,
        marginLeft: DataHelper.getWidth()* 0.003,
    },
})
