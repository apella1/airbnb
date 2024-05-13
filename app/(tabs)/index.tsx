import listingsGeoData from "@/assets/data/airbnb-listings.geo.json";
import listingsData from "@/assets/data/airbnb-listings.json";
import ExploreHeader from "@/components/ExploreHeader";
import ListingsBottomSheet from "@/components/ListingsBottomSheet";
import ListingsMap from "@/components/ListingsMap";
import { GeoListing } from "@/types/geolisting";
import { Stack } from "expo-router";
import React, { useMemo, useState } from "react";
import { View } from "react-native";

const HomePage = () => {
  const [category, setCategory] = useState("Tiny Homes");

  const items = useMemo(() => listingsData as any, []);
  const geoData = useMemo(() => listingsGeoData as GeoListing[], []);

  const onDataChange = (category: string) => {
    setCategory(category);
  };
  return (
    <View style={{ flex: 1, marginTop: 80 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChange={onDataChange} />,
        }}
      />
      <ListingsMap listings={geoData} />
      <ListingsBottomSheet category={category} listings={items} />
    </View>
  );
};

export default HomePage;
