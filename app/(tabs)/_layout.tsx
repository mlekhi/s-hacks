import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                tabBarStyle: {
          backgroundColor: '#ffffff', // Hardcoded white background
          borderTopColor: '#ffffff',  // Optional: border color for the top of the tab bar
          borderTopWidth: 0,          // Optional: width of the border
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Welcome',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="game"
        options={{
          title: 'Play',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'play' : 'play-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Rewards',
          tabBarIcon: ({ color, focused }) => (
          <Ionicons
            name={focused ? 'star' : 'star-outline'}
            size={24}
            color={color}
          />
          ),
        }}
      />
    </Tabs>
  );
}
