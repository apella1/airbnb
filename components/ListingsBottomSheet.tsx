import { AirbnbListing } from "@/types/listing";
import BottomSheet from "@gorhom/bottom-sheet";
import React, { useMemo, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Listings from "./Listings";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

interface LBSProps {
  listings: AirbnbListing[];
  category: string;
}

const ListingsBottomSheet = ({ listings, category }: LBSProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["10%", "100%"], []);
  const [refresh, setRefresh] = useState(0);

  const showMap = () => {
    bottomSheetRef.current?.collapse();
    setRefresh(refresh + 1);
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      handleIndicatorStyle={{ backgroundColor: Colors.grey }}
      enablePanDownToClose={false}
      index={1}
      style={styles.sheetContainer}
    >
      <View style={{ flex: 1 }}>
        <Listings category={category} listings={listings} refresh={refresh} />
        <View style={styles.absoluteBtn}>
          <TouchableOpacity style={styles.btn} onPress={showMap}>
            <Text style={{ fontFamily: "mon-s", color: Colors.white }}>
              Map
            </Text>
            <Ionicons name="map" size={20} color={Colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  absoluteBtn: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    alignItems: "center",
  },
  btn: {
    backgroundColor: Colors.dark,
    padding: 16,
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 30,
    gap: 8,
  },
  sheetContainer: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    elevation: 4,
    shadowColor: Colors.dark,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});

export default ListingsBottomSheet;
