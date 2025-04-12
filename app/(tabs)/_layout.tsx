import { Tabs } from 'expo-router'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '@/constants/theme'

export default function layout() {
    return (
        <Tabs screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: COLORS.grey,
            tabBarStyle: {
                backgroundColor: "black",
                paddingBottom: 20,
                borderTopWidth: 0,
                position: "absolute",
                bottom: 0,
                height: 40,
                elevation: 0
            }
        }}>
            <Tabs.Screen name='index' options={{ title: "Home", tabBarIcon: ({ size, color }) => <Ionicons name="home" size={size} color={color} /> }} />
            <Tabs.Screen name='bookmarks' options={{ title: "Book Marks", tabBarIcon: ({ size, color }) => <Ionicons name="bookmarks" size={size} color={color} /> }} />
            <Tabs.Screen name='create' options={{ title: "create", tabBarIcon: ({ size, color }) => <Ionicons name="add-circle" size={size} color={color} /> }} />
            <Tabs.Screen name='notifications' options={{ title: "notifications", tabBarIcon: ({ size, color }) => <Ionicons name="heart" size={size} color={color} /> }} />
            <Tabs.Screen name='profile' options={{ title: "Profile", tabBarIcon: ({ size, color }) => <Ionicons name="person-circle" size={size} color={color} /> }} />
        </Tabs>
    )
}
