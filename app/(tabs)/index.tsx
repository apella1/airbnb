import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import { Stack } from "expo-router";
import React, { useMemo, useState } from "react";
import { View } from "react-native";
import listingsData from "@/assets/data/airbnb-listings.json";

const HomePage = () => {
  const [category, setCategory] = useState("Tiny Homes");

  const items = useMemo(() => listingsData as any, []);

  const onDataChange = (category: string) => {
    setCategory(category);
  };
  return (
    <View style={{ flex: 1, marginTop: 160 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChange={onDataChange} />,
        }}
      />
      <Listings listings={items} category={category} />
    </View>
  );
};

export default HomePage;
