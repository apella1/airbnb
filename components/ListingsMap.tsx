import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Colors from "@/constants/Colors";
import { GeoListing } from "@/types/geolisting";
import { useRouter } from "expo-router";
import MapView from "react-native-map-clustering";

interface ListingsMapProps {
  listings: any;
}

const INITIAL_REGION = {
  latitude: 37.33,
  longitude: -122,
  latitudeDelta: 9,
  longitudeDelta: 9,
};

const ListingsMap = ({ listings }: ListingsMapProps) => {
  const router = useRouter();
  const onMarkerSelected = (item: GeoListing) => {
    router.push(`/listing/${item.properties.id}`);
  };

  const renderCluster = (cluster: any) => {
    const { id, geometry, onPress, properties } = cluster;
    const points = properties.point_count;

    return (
      <Marker
        onPress={onPress}
        key={`cluster-${id}`}
        coordinate={{
          latitude: geometry.coordinates[0],
          longitude: geometry.coordinates[1],
        }}
      >
        <View style={styles.marker}>
          <Text
            style={{
              color: Colors.dark,
              textAlign: "center",
              fontFamily: "mon-s",
            }}
          >
            {points}
          </Text>
        </View>
      </Marker>
    );
  };

  return (
    <View style={styles.container}>
      <MapView
        animationEnabled={false}
        style={StyleSheet.absoluteFill}
        showsUserLocation
        showsMyLocationButton
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
        clusterFontFamily={"mon-s"}
        clusterColor={Colors.white}
        clusterTextColor={Colors.dark}
        renderCluster={renderCluster}
      >
        {listings.features.map((item: GeoListing) => (
          <Marker
            key={item.properties.id}
            onPress={() => onMarkerSelected(item)}
            coordinate={{
              latitude: Number(item.properties.latitude),
              longitude: Number(item.properties.longitude),
            }}
          >
            <View style={styles.marker}>
              <Text style={styles.markerText}>{item.properties.price}</Text>
            </View>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  marker: {
    backgroundColor: Colors.white,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    elevation: 4,
    shadowColor: Colors.dark,
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 10,
    },
  },
  markerText: {
    fontSize: 14,
    fontFamily: "mon-s",
  },
});

export default ListingsMap;
