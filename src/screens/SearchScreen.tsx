import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {DataHelper} from "../helpers/DataHelper";

export const SearchScreen = () => {
    return (
        <ScrollView>
            <View style={styles.flexRow}>
                <View style={styles.topLeftContainer}>
                    {[...Array(4)].map((_,index) =>
                        <TouchableOpacity key={index}>
                            <Image style={styles.smallImage} source={{uri: 'https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}/>
                        </TouchableOpacity>
                    )}
                </View>

                <View>
                    <Image style={styles.hugeImage} source={{uri: 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=1024x1024&w=is&k=20&c=iGtRKCTRSvPVl3eOIpzzse5SvQFfImkV0TZuFh-74ps='}}/>
                </View>
            </View>
            <View style={styles.centerContainer}>
                {[...Array(6)].map((_,index2) =>
                    <TouchableOpacity key={index2}>
                        <Image style={styles.smallImage} source={{uri: 'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}/>
                    </TouchableOpacity>
                )}
            </View>
            <View style={styles.flexRow}>
                <View style={styles.bottomLeft}>
                    <TouchableOpacity>
                        <Image style={styles.bigImage} source={{uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomRight}>
                    {[...Array(2)].map((_,index3) =>
                        <TouchableOpacity key={index3}>
                            <Image style={styles.smallImage} source={{uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}/>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row',
        alignContent: 'center',
    },
    topLeftContainer: {
        width: DataHelper.getWidth() * 0.667,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
    },
    smallImage: {
        width: DataHelper.getWidth() * 0.33,
        height: DataHelper.getWidth() * 0.33,
        marginTop: DataHelper.getWidth()* 0.003,
        marginLeft: DataHelper.getWidth()* 0.003,
    },
    centerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
    },
    hugeImage: {
        width: DataHelper.getWidth() * 0.33,
        height: DataHelper.getWidth() * 0.66,
        marginTop: DataHelper.getWidth()* 0.003,
        marginLeft: DataHelper.getWidth()* 0.003,
    },
    bigImage: {
        width: DataHelper.getWidth() * 0.66,
        height: DataHelper.getWidth() * 0.66,
        marginTop: DataHelper.getWidth()* 0.003,

    },
    bottomLeft: {
        width: DataHelper.getWidth() * 0.66,
        height: DataHelper.getWidth() * 0.66,
        marginLeft: DataHelper.getWidth()* 0.005,
        marginRight: DataHelper.getWidth()* 0.003,
    },
    bottomRight: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',

    },
})



