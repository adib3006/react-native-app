import React from 'react';
import {Pressable , Image, Text, Alert} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Products from './Products';
import Saloon from './Saloon';
import Account from './Account';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Home = () => {
    return (
        <Tab.Navigator screenOptions={
            ({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === 'Home') {
                        iconName = focused ? 'home-outline' : 'home-outline';

                    } else if (rn === 'Saloon') {
                        iconName = focused ? 'leaf-outline' : 'leaf-outline';

                    } else if (rn === 'Account') {
                        iconName = focused ? 'person-circle-outline' : 'person-circle-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                headerShown: false,
                tabBarActiveTintColor: '#282828',
                tabBarInactiveTintColor: '#BDBDBD',
                tabBarStyle: { height: 61 },
                tabBarItemStyle: { paddingBottom: 10, paddingTop: 10 },
                tabBarLabelStyle: { fontSize: 12, fontWeight: '600' }
            })}
        >
            <Tab.Screen name="Home" component={Products} />
            <Tab.Screen name="Saloon" component={Saloon} />
            <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
    );
};

export default Home;