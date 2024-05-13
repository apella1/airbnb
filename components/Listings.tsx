import { defaultStyles } from "@/constants/Styles";
import { AirbnbListing } from "@/types/listing";
import { Ionicons } from "@expo/vector-icons";
import {
  BottomSheetFlatList,
  BottomSheetFlatListMethods,
} from "@gorhom/bottom-sheet";
import { Link } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Animated, { FadeInRight, FadeOutLeft } from "react-native-reanimated";

interface ListingProps {
  listings: any[];
  category: string;
  refresh: number;
}

const Listings = ({ listings, category, refresh }: ListingProps) => {
  const [loading, setLoading] = useState(false);
  const listRef = useRef<BottomSheetFlatListMethods | null>(null);

  useEffect(() => {
    setLoading(true);
    // simulating fetching data wait
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [category]);

  useEffect(() => {
    if (refresh) {
      listRef.current?.scrollToOffset({ offset: 0, animated: true });
    }
  }, [refresh]);

  const renderRow: ListRenderItem<AirbnbListing> = ({ item }) => (
    <Link href={`/listing/${item.id}`} asChild>
      <TouchableOpacity style={{ gap: 5 }}>
        <Animated.View
          style={styles.listing}
          entering={FadeInRight}
          exiting={FadeOutLeft}
        >
          <Image source={{ uri: item.medium_url }} style={styles.image} />
          <TouchableOpacity
            style={{ position: "absolute", right: 30, top: 20 }}
          >
            <Ionicons name="heart-outline" size={24} color={"#1a1a1a"} />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 16,
            }}
          >
            <Text style={{ fontFamily: "mon-s", fontSize: 16 }}>
              {item.name}
            </Text>
            <View style={{ flexDirection: "row", gap: 4 }}>
              <Ionicons name="star" size={14} />
              <Text style={{ fontFamily: "mon-s" }}>
                {item.review_scores_rating / 20}
              </Text>
            </View>
          </View>
          <Text style={{ fontFamily: "mon", paddingHorizontal: 16 }}>
            {item.room_type}
          </Text>
          <View style={{ flexDirection: "row", gap: 4, paddingHorizontal: 16 }}>
            <Text style={{ fontFamily: "mon-s" }}>{item.price}</Text>
            <Text style={{ fontFamily: "mon-s" }}>night</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={defaultStyles.container}>
      <BottomSheetFlatList
        data={loading ? [] : listings}
        ref={listRef}
        renderItem={renderRow}
        ListHeaderComponent={
          <Text
            style={{
              textAlign: "center",
              fontFamily: "mon-s",
              fontSize: 16,
              marginTop: 4,
            }}
          >
            {listings.length} Homes
          </Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listing: {
    padding: 16,
    gap: 10,
    marginVertical: 16,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
});

export default Listings;
