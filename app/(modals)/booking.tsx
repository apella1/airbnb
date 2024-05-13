import { places } from "@/assets/data/places";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
} from "react-native-reanimated";

enum Cards {
  Where = "where",
  When = "when",
  Who = "who",
}

enum Places {}

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

const Booking = () => {
  const router = useRouter();
  const [openCard, setOpenCard] = useState<Cards>(Cards.Where);
  const [selectedPlace, setSelectedPlace] = useState<Places>();
  const onClearAll = () => {
    setSelectedPlace(undefined);
    setOpenCard(Cards.Where);
  };

  return (
    <BlurView intensity={70} style={styles.container} tint="dark">
      <View style={styles.card}>
        {openCard !== Cards.Where && (
          <AnimatedTouchableOpacity
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
            onPress={() => setOpenCard(Cards.Where)}
            style={styles.cardPreview}
          >
            <Text style={styles.previewText}>Where</Text>
            <Text style={styles.previewData}>I'm flexible</Text>
          </AnimatedTouchableOpacity>
        )}
        {openCard === Cards.Where && (
          <View>
            <Text style={styles.cardHeader}>Where to?</Text>
          </View>
        )}
      </View>
      <View style={styles.card}>
        {openCard !== Cards.When && (
          <AnimatedTouchableOpacity
            onPress={() => setOpenCard(Cards.When)}
            style={styles.cardPreview}
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
          >
            <Text style={styles.previewText}>When</Text>
            <Text style={styles.previewData}>Any Week</Text>
          </AnimatedTouchableOpacity>
        )}
        {openCard === Cards.Where && (
          <View>
            <Text style={styles.cardHeader}>When's your trip?</Text>
          </View>
        )}
      </View>
      <View style={styles.card}>
        {openCard !== Cards.Who && (
          <AnimatedTouchableOpacity
            onPress={() => setOpenCard(Cards.Who)}
            style={styles.cardPreview}
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
          >
            <Text style={styles.previewText}>Who</Text>
            <Text style={styles.previewData}>Add Guests</Text>
          </AnimatedTouchableOpacity>
        )}
        {openCard === Cards.Where && (
          <View>
            <Text style={styles.cardHeader}>Who's coming?</Text>
          </View>
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
    padding: 24,
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
    alignItems: "center",
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
    alignItems: "center",
    padding: 20,
  },
  cardHeader: {
    fontFamily: "mon-b",
    fontSize: 24,
    padding: 20,
  },
});

export default Booking;
