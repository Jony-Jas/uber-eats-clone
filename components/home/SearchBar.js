import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInputValue: "",
    };
  }
  render() {
    return (
      <View
        style={{
          marginTop: 15,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#eee",
          paddingVertical: 5,
          borderRadius: 30,
        }}
      >
        <View style={{ marginLeft: 10, marginRight: 5 }}>
          <Ionicons name="location-sharp" size={24} />
        </View>
        <View style={{ flex: 1 }}>
          <TextInput
            placeholder="Search"
            onChangeText={(text) => this.setState({ textInputValue: text })}
            value={this.state.textInputValue}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            this.setState({ textInputValue: "" });
            this.props.setCity(this.state.textInputValue);
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginRight: 8,
              backgroundColor: "white",
              padding: 9,
              borderRadius: 30,
              alignItems: "center",
            }}
          >
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 6 }}
            />
            <Text>Search</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
