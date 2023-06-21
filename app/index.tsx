import React from "react";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import {useFonts, Roboto_900Black} from "@expo-google-fonts/roboto";

import AppLoading from "expo-app-loading"


export default function Page() {
  const colorScheme = useColorScheme();

  const themeTextStyle = colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle = colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  const [ fontsLoaded ] = useFonts({
    Roboto_900Black
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <SafeAreaProvider>
      <View style={[styles.container, themeContainerStyle]}>
        <Text style={[styles.title, themeTextStyle]}>Teste</Text>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 64,
    fontFamily: "Roboto_900Black",
  },
  text: {
    fontSize: 64,
  },
  lightContainer: {
    backgroundColor: '#d0d0c0',
  },
  darkContainer: {
    backgroundColor: '#242c40',
  },
  lightThemeText: {
    color: '#242c40',
  },
  darkThemeText: {
    color: '#d0d0c0',
  }
});
