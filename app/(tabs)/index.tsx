import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import { defaultStyles } from "@/constants/Styles";
import { Stack } from "expo-router";
import React from "react";
import { View } from "react-native";

const HomePage = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack.Screen options={{ header: () => <ExploreHeader /> }} />
      <Listings />
    </View>
  );
};

export default HomePage;
