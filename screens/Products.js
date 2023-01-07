import React, { useState } from 'react';
import { Text, ScrollView, StatusBar, StyleSheet, View, Image, ImageBackground, Pressable, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import locationMark from '../assets/locationMark.png';
import calendar from '../assets/calendar.png';
import person1 from '../assets/person1.png';
import person2 from '../assets/person2.png';
import star from '../assets/star.png';
import mapSmall from '../assets/mapSmall.png';

const Products = () => {
    const [item, setItem] = useState('');
    const cards = [
        {
            distance: '240 m',
            salon: 'Home Salon',
            img: person1,
            name: '',
            ratings: 1,
            h: 'Kr63',
            day: 'Kr480'
        },
        {
            distance: '240 m',
            salon: 'Home Salon',
            img: person2,
            name: 'Leslie Alexander',
            ratings: 4,
            h: 'Kr61',
            day: 'Kr470'
        },
        {
            distance: '240 m',
            salon: 'Home Salon',
            img: person1,
            name: '',
            ratings: 1,
            h: 'Kr63',
            day: 'Kr480'
        },
        {
            distance: '240 m',
            salon: 'Home Salon',
            img: person2,
            name: 'Leslie Alexander',
            ratings: 4,
            h: 'Kr61',
            day: 'Kr470'
        },
        {
            distance: '240 m',
            salon: 'Home Salon',
            img: person1,
            name: '',
            ratings: 1,
            h: 'Kr63',
            day: 'Kr480'
        },
        {
            distance: '240 m',
            salon: 'Home Salon',
            img: person2,
            name: 'Leslie Alexander',
            ratings: 4,
            h: 'Kr61',
            day: 'Kr470'
        },
        {
            distance: '240 m',
            salon: 'Home Salon',
            img: person1,
            name: '',
            ratings: 1,
            h: 'Kr63',
            day: 'Kr480'
        },
        {
            distance: '240 m',
            salon: 'Home Salon',
            img: person2,
            name: 'Leslie Alexander',
            ratings: 4,
            h: 'Kr61',
            day: 'Kr470'
        }
    ]
    return (
        <View>
            <ScrollView style={styles.container}>
                <View style={styles.locationBar}>
                    <Image style={{ width: 16, height: 21, marginRight: 10 }} source={locationMark} />
                    <View style={{ width: '68%', borderRightWidth: 1.5, borderStyle: 'solid', borderColor: '#bfbfbf' }}>
                        <Text style={{ fontSize: 10, fontWeight: '600', color: '#282828' }}>Gamle Oslo</Text>
                        <Text style={{ fontSize: 8, fontWeight: '600', color: '#BDBDBD' }}>No</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={calendar} style={{ width: 15, height: 15, marginRight: 7, marginLeft: 10 }} />
                        <Text style={{ fontSize: 11, fontWeight: '600', color: '#282828', opacity: 0.65 }}>When?</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 17, marginTop: 13 }}>
                    <View style={{ width: '40%', borderRadius: 20, borderWidth: 1, borderStyle: 'solid', borderColor: '#bfbfbf', marginRight: 5 }}>
                        <Picker selectedValue={item} onChange={(value) => setItem(value)}>
                            <Picker.Item style={{ fontSize: 12, fontWeight: '700', color: '#282828' }} label='Hair type' value='Hair type' />
                            <Picker.Item style={{ fontSize: 12, fontWeight: '700', color: '#282828' }} label='Straight' value='Straight' />
                            <Picker.Item style={{ fontSize: 12, fontWeight: '700', color: '#282828' }} label='Silky' value='Silky' />
                        </Picker>
                    </View>
                    <View style={{ width: '50%', borderRadius: 20, borderWidth: 1, borderStyle: 'solid', borderColor: '#bfbfbf' }}>
                        <Picker selectedValue={item} onChange={(value) => setItem(value)}>
                            <Picker.Item style={{ fontSize: 12, fontWeight: '700', color: '#282828' }} label='Home Salon' value='Home Salon' />
                            <Picker.Item style={{ fontSize: 12, fontWeight: '700', color: '#282828' }} label='Office Salon' value='Home Salon' />
                            <Picker.Item style={{ fontSize: 12, fontWeight: '700', color: '#282828' }} label='Personal Spa' value='Home Salon' />
                        </Picker>
                    </View>
                </View>
                <Text style={{ marginBottom: 10, color: '#BDBDBD', fontSize: 14, fontWeight: '700' }}>100 results of 455</Text>
                {
                    cards.map((card, index) => <View key={index} style={styles.box}>
                        <ImageBackground source={card.img} resizeMode='cover' style={{ height: 205, overflow: 'hidden', borderTopLeftRadius: 7, borderTopRightRadius: 7 }}>
                            <View style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ borderRadius: 20, flexDirection: 'row', backgroundColor: 'rgba(255, 255, 255, 0.3)', alignItems: 'center', paddingVertical: 4, paddingHorizontal: 9 }}>
                                    <Image source={locationMark} style={{ width: 10, height: 13, marginRight: 8 }} />
                                    <Text style={{ color: 'white', fontSize: 12, fontWeight: '700' }}>{card.distance}</Text>
                                </View>
                                <View style={{ borderRadius: 20, flexDirection: 'row', backgroundColor: 'rgba(255, 255, 255, 0.3)', alignItems: 'center', paddingVertical: 4, paddingHorizontal: 9 }}>
                                    <Text style={{ color: 'white', fontSize: 12, fontWeight: '700' }}>{card.salon}</Text>
                                </View>
                            </View>
                        </ImageBackground>
                        <View style={{ padding: 10 }}>
                            <View style={{ flexDirection: 'row', marginBottom: 10, justifyContent: 'space-between' }}>
                                <Text style={{ color: '#282828', textAlign: 'left', fontSize: 16, fontWeight: '700' }}>{card.name}</Text>
                                <Text style={{ color: '#BDBDBD', textAlign: 'right', fontSize: 14, fontWeight: '700' }}>FROM</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row', marginRight: 10 }}>
                                        <Image source={star} />
                                        <Image source={star} />
                                        <Image source={star} />
                                        <Image source={star} />
                                        <Image source={star} />
                                    </View>
                                    <Text style={{ fontSize: 16, fontWeight: '700', color: '#BDBDBD' }}>{card.ratings}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row', marginRight: 17 }}>
                                        <Text style={{ fontSize: 14, fontWeight: '600', color: '#282828' }}>{card.h}</Text>
                                        <Text style={{ fontSize: 14, fontWeight: '600', color: '#BDBDBD' }}>/h</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 14, fontWeight: '600', color: '#282828' }}>{card.day}</Text>
                                        <Text style={{ fontSize: 14, fontWeight: '600', color: '#BDBDBD' }}> /day</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>)
                }
            </ScrollView>
            <Pressable style={{
                width: 31,
                height: 31,
                borderWidth: 1,
                borderStyle: 'solid',
                position: 'absolute',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                bottom: 31,
                right: 31,
                borderRadius: 3,
                backgroundColor: 'white',
                borderColor: 'rgba(0, 0, 0, 0.1)'
            }} onPress={() => Alert.alert('Location Updated')}>
                <Image style={{ width: 7, height: 9}} source={mapSmall} />
                <Text style={{ fontSize: 12, fontWeight: '700', color: '#282828' }}>Map</Text>
            </Pressable>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 22,
        marginTop: 72,
        width: '100%'
    },
    locationBar: {
        padding: 10,
        height: 41,
        borderWidth: 1,
        borderRadius: 8,
        borderStyle: 'solid',
        borderColor: '#bfbfbf',
        flexDirection: 'row',
        alignItems: 'center'
    },
    box: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        borderColor: '#d1d1d1',
        borderTopWidth: 0,
        marginBottom: 11
    }
});

export default Products;