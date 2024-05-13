import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";

const Booking = () => {
  return (
    <BlurView intensity={70} style={styles.container} tint="dark">
      <Text>booking</Text>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
});

export default Booking;
