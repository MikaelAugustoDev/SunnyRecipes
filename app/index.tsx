import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Page() {
  return (
    <SafeAreaProvider>
      <View>
        <Text style={styles.title}>Mikael</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
