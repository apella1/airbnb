import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";

enum Sections {
  Stays = "stays",
  Experiences = "experiences",
}

const BookingModalHeaderText = () => {
  const [active, setActive] = useState<Sections>(Sections.Stays);
  return (
    <View style={{ flexDirection: "row", justifyContent: "center", gap: 6 }}>
      <TouchableOpacity onPress={() => setActive(Sections.Stays)}>
        <Text
          style={active === Sections.Stays ? styles.activeText : styles.text}
        >
          Stays
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActive(Sections.Experiences)}>
        <Text
          style={
            active === Sections.Experiences ? styles.activeText : styles.text
          }
        >
          Experiences
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "mon-s",
    fontSize: 18,
    color: Colors.grey,
  },
  activeText: {
    fontFamily: "mon-s",
    fontSize: 18,
    color: Colors.dark,
    textDecorationLine: "underline",
  },
});

export default BookingModalHeaderText;
