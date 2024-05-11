import ExploreHeader from "@/components/ExploreHeader";
import { Stack } from "expo-router";
import React, { useMemo, useState } from "react";
import { View } from "react-native";
import listingsData from "@/assets/data/airbnb-listings.json";
import listingsGeoData from "@/assets/data/airbnb-listings.geo.json";
import ListingsMap from "@/components/ListingsMap";
import { GeoListing } from "@/types/geolisting";

const HomePage = () => {
  const [category, setCategory] = useState("Tiny Homes");

  const items = useMemo(() => listingsData as any, []);
  const geoData = useMemo(() => listingsGeoData as GeoListing[], []);

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
      <ListingsMap listings={geoData} />
      {/*<Listings listings={items} category={category} />*/}
    </View>
  );
};

export default HomePage;
