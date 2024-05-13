import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";

const BookingModalHeaderText = () => {
  const [active, setActive] = useState(0);
  return (
    <View style={{ flexDirection: "row", justifyContent: "center", gap: 6 }}>
      <TouchableOpacity onPress={() => setActive(0)}>
        <Text style={active === 0 ? styles.activeText : styles.text}>
          Stays
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActive(1)}>
        <Text style={active === 1 ? styles.activeText : styles.text}>
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
