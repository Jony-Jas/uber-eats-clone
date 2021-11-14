import React, { useEffect } from "react";
import SafeAreaView from "react-native-safe-area-view";
import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItems, {
  localRestaurants,
} from "../components/home/RestaurantItems";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";

export default function Home({ navigation }) {
  const [restaurantData, setrestaurantData] = React.useState(localRestaurants);
  const [city, setCity] = React.useState("SanFransisco");
  const [activeTab, setActiveTab] = React.useState("Delivery");

  const YELP_API_KEY =
    "mqa3SwIWKvARRNrk31ZlHHt_TRNn8dnpcYSHjZn-CLxnEMeHqXzCeepgAvKAYFOmI4ROM90hQXVZJ5zZnmV-EWTXKNiwwA79KSvC0OAxovFt3pNM2A3QM4YKB9UpYXYx";
  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setrestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar setCity={setCity} />
      </View>
      <ScrollView>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#eee",
  },
});
