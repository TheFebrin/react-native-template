import Ionicons from '@expo/vector-icons/Ionicons';
import { NativeTabs } from 'expo-router/unstable-native-tabs';
import React from 'react';
import { DynamicColorIOS, Platform } from 'react-native';

import { Colors, Fonts } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? 'dark' : 'light';
  const tintColor =
    Platform.OS === 'ios'
      ? DynamicColorIOS({ dark: Colors.dark.text, light: Colors.light.text })
      : Colors[theme].text;

  return (
    <NativeTabs
      disableTransparentOnScrollEdge
      tintColor={tintColor}
      labelStyle={{
        color: tintColor,
        fontSize: 11,
        fontFamily: Fonts.sans,
      }}
    >
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Icon
          sf={{ default: 'house', selected: 'house.fill' }}
          src={<NativeTabs.Trigger.VectorIcon family={Ionicons} name="home-outline" />}
        />
        <NativeTabs.Trigger.Label hidden={Platform.OS === 'ios'}>Home</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="explore">
        <NativeTabs.Trigger.Icon
          sf={{ default: 'magnifyingglass', selected: 'magnifyingglass' }}
          src={<NativeTabs.Trigger.VectorIcon family={Ionicons} name="search-outline" />}
        />
        <NativeTabs.Trigger.Label hidden={Platform.OS === 'ios'}>Explore</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <NativeTabs.Trigger.Icon
          sf={{ default: 'person', selected: 'person.fill' }}
          src={<NativeTabs.Trigger.VectorIcon family={Ionicons} name="person-outline" />}
        />
        <NativeTabs.Trigger.Label hidden={Platform.OS === 'ios'}>Profile</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
