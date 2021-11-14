import React, { Component } from "react";
import { Text, View } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "./ViewCart";

export default function RestaurentDetail({ route, navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <About route={route} />
      <Divider width={1.8} style={{ marginTop: 20 }} />
      <MenuItems restaurentName={route.params.name} />
      <ViewCart navigation={navigation} restaurentName={route.params.name} />
    </View>
  );
}
