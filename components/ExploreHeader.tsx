import Colors from "@/constants/Colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";

interface Category {
  name: string;
  icon: string;
}

const categories: Category[] = [
  { name: "Tiny Homes", icon: "home" },
  { name: "Cabins", icon: "house-siding" },
  { name: "Trending", icon: "local-fire-department" },
  { name: "Play", icon: "videogame-asset" },
  { name: "City", icon: "apartment" },
  { name: "Beachfront", icon: "beach-access" },
  { name: "Countryside", icon: "nature-people" },
];

interface ExploreHeaderProps {
  onCategoryChange: (category: string) => void;
}

const ExploreHeader = ({ onCategoryChange }: ExploreHeaderProps) => {
  const scrollRef = useRef<ScrollView>(null);
  const itemsRef = useRef<Array<TouchableOpacity | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const selectCategory = (index: number) => {
    const selected = itemsRef.current[index];
    setActiveIndex(index);
    selected?.measure((x) => {
      // x - 16 retains the padding
      scrollRef.current?.scrollTo({ x: x - 16, y: 0, animated: true });
    });
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onCategoryChange(categories[index].name);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.actionRow}>
          <Link href={"/(modals)/booking"} asChild>
            <TouchableOpacity style={styles.searchBtn}>
              <Ionicons name="search" size={24} />
              <View>
                <Text style={{ fontFamily: "mon-s" }}>Where to?</Text>
                <Text style={{ fontFamily: "mon", color: Colors.grey }}>
                  Anywhere Any week
                </Text>
              </View>
            </TouchableOpacity>
          </Link>
          <TouchableOpacity style={styles.filterBtn}>
            <Ionicons name="options-outline" size={24} />
          </TouchableOpacity>
        </View>
        <ScrollView
          ref={scrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            gap: 35,
            paddingHorizontal: 16,
          }}
        >
          {categories.map((category, index) => (
            <TouchableOpacity
              key={category.name}
              ref={(el) => (itemsRef.current[index] = el)}
              onPress={() => selectCategory(index)}
              style={
                activeIndex == index
                  ? styles.categoryBtnActive
                  : styles.categoryBtn
              }
            >
              <MaterialIcons
                name={category.icon as any}
                size={30}
                color={activeIndex == index ? Colors.dark : Colors.grey}
              />
              <Text
                style={
                  activeIndex == index
                    ? styles.categoryTextActive
                    : styles.categoryText
                }
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 16,
    gap: 10,
  },
  container: {
    backgroundColor: "#ffffff",
    height: 160,
  },
  filterBtn: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 24,
  },
  searchBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderColor: "#c2c2c1",
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: Colors.white,
    flex: 1,
    padding: 14,
    borderRadius: 30,
    elevation: 2,
    shadowColor: Colors.dark,
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  categoryText: {
    fontSize: 14,
    fontFamily: "mon-s",
    color: Colors.grey,
  },
  categoryTextActive: {
    fontSize: 14,
    fontFamily: "mon-s",
    color: Colors.dark,
  },
  categoryBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 8,
  },
  categoryBtnActive: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: Colors.dark,
    borderBottomWidth: 2,
    paddingBottom: 8,
  },
});

export default ExploreHeader;