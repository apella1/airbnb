import { places } from "@/assets/data/places";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
} from "react-native-reanimated";

// import DatePicker from "react-native-modern-datepicker";

const guestGroups = [
  { name: "Adults", text: "Ages 13 or above", count: 0 },
  { name: "Children", text: "Ages 2-12", count: 0 },
  { name: "Infants", text: "Under 2", count: 0 },
  { name: "Pets", text: "Pets allowed", count: 0 },
];

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

const Booking = () => {
  const router = useRouter();
  const [openCard, setOpenCard] = useState(0);
  const [selectedPlace, setSelectedPlace] = useState(0);
  const onClearAll = () => {
    setSelectedPlace(0);
    setOpenCard(0);
    setGroups(guestGroups);
  };
  const today = new Date().toISOString().substring(0, 10);
  const [groups, setGroups] = useState(guestGroups);

  return (
    <BlurView intensity={100} style={styles.container} tint="light">
      <View style={styles.card}>
        {openCard !== 0 && (
          <AnimatedTouchableOpacity
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
            onPress={() => setOpenCard(0)}
            style={styles.cardPreview}
          >
            <Text style={styles.previewText}>Where</Text>
            <Text style={styles.previewData}>I'm flexible</Text>
          </AnimatedTouchableOpacity>
        )}
        {openCard === 0 && (
          <>
            <Animated.Text style={styles.cardHeader} entering={FadeIn}>
              Where to?
            </Animated.Text>
            <Animated.View style={styles.cardBody}>
              <View style={styles.search}>
                <Ionicons
                  name="search"
                  size={20}
                  color={Colors.dark}
                  style={styles.searchIcon}
                />
                <TextInput
                  style={styles.inputField}
                  placeholder="Search destination"
                  placeholderTextColor={Colors.grey}
                />
              </View>
            </Animated.View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                gap: 20,
                marginBottom: 16,
                paddingLeft: 16,
              }}
            >
              {places.map((place, index) => (
                <TouchableOpacity
                  onPress={() => setSelectedPlace(index)}
                  key={index}
                >
                  <Image
                    source={place.img}
                    style={
                      selectedPlace === index
                        ? styles.placeSelected
                        : styles.place
                    }
                  />
                  <Text
                    style={{
                      fontFamily: "mon-s",
                      paddingTop: 6,
                      textAlign: "center",
                    }}
                  >
                    {place.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </>
        )}
      </View>
      <View style={styles.card}>
        {openCard !== 1 && (
          <AnimatedTouchableOpacity
            onPress={() => setOpenCard(1)}
            style={styles.cardPreview}
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
          >
            <Text style={styles.previewText}>When</Text>
            <Text style={styles.previewData}>Any Week</Text>
          </AnimatedTouchableOpacity>
        )}
        {openCard === 1 && (
          <>
            <Animated.Text style={styles.cardHeader} entering={FadeIn}>
              When's your trip?
            </Animated.Text>
            <Animated.View style={styles.cardBody}>
              {/* <DatePicker
                current={today}
                selected={today}
                mode={"Calendar"}
                options={{
                  defaultFont: "mon",
                  headerFont: "mon-s",
                  borderColor: "transparent",
                  mainColor: Colors.primary,
                }}
              /> */}
            </Animated.View>
          </>
        )}
      </View>
      <View style={styles.card}>
        {openCard !== 2 && (
          <AnimatedTouchableOpacity
            onPress={() => setOpenCard(2)}
            style={styles.cardPreview}
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
          >
            <Text style={styles.previewText}>Who</Text>
            <Text style={styles.previewData}>Add Guests</Text>
          </AnimatedTouchableOpacity>
        )}
        {openCard === 2 && (
          <>
            <Animated.Text style={styles.cardHeader} entering={FadeIn}>
              Who's coming?
            </Animated.Text>
            <Animated.View style={styles.cardBody}>
              {groups.map((group, index) => (
                <View
                  key={index}
                  style={[
                    styles.guestItem,
                    index + 1 < groups.length && styles.itemBorder,
                  ]}
                >
                  <View>
                    <Text>{group.name}</Text>
                    <Text>{group.text}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 16,
                      alignItems: "center",
                    }}
                  >
                    {group.count > 0 && (
                      <TouchableOpacity
                        onPress={() => {
                          const newGroups = [...groups];
                          newGroups[index].count -= 1;
                          setGroups(newGroups);
                        }}
                      >
                        <Ionicons
                          name="remove-circle-outline"
                          size={24}
                          color={Colors.dark}
                        />
                      </TouchableOpacity>
                    )}
                    <Text style={{ fontFamily: "mon-s", fontSize: 14 }}>
                      {group.count}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        const newGroups = [...groups];
                        newGroups[index].count += 1;
                        setGroups(newGroups);
                      }}
                    >
                      <Ionicons
                        name="add-circle-outline"
                        size={24}
                        color={Colors.dark}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </Animated.View>
          </>
        )}
      </View>
      <Animated.View
        style={defaultStyles.footer}
        entering={SlideInDown.delay(200)}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={onClearAll}>
            <Text style={styles.text}>Clear All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.back()}
            style={[defaultStyles.btn, { paddingRight: 20, paddingLeft: 50 }]}
          >
            <Ionicons
              name="search-outline"
              size={24}
              color={Colors.white}
              style={defaultStyles.btnIcon}
            />
            <Text style={defaultStyles.btnText}>Search</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
  text: {
    fontSize: 18,
    fontFamily: "mon-s",
    textDecorationLine: "underline",
  },
  card: {
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 16,
    marginHorizontal: 24,
    marginTop: 24,
    elevation: 2,
    shadowColor: Colors.dark,
    shadowRadius: 6,
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 2,
      width: 1,
    },
    gap: 20,
  },
  previewText: {
    fontFamily: "mon-s",
    fontSize: 14,
    color: Colors.grey,
  },
  previewData: {
    fontFamily: "mon-s",
    fontSize: 14,
    color: Colors.dark,
  },
  cardPreview: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  cardHeader: {
    fontFamily: "mon-b",
    fontSize: 24,
    padding: 20,
  },
  cardBody: {
    paddingHorizontal: 20,
  },
  search: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    borderColor: Colors.grey,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: Colors.white,
    marginBottom: 10,
  },
  inputField: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.white,
  },
  searchIcon: {
    padding: 10,
  },
  place: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  placeSelected: {
    width: 120,
    height: 120,
    borderRadius: 10,
    borderColor: Colors.dark,
    borderWidth: 1,
  },
  guestItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  itemBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.grey,
  },
});

export default Booking;
