import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function HeaderTabs(props) {
  // const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <Headerbutton
        text="Delivery"
        buttonColor="black"
        textColor="white"
        
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <Headerbutton
        text="Pickup"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
}

const Headerbutton = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.activeTab === props.text ? "black" : "white",
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 30,
      }}
      onPress={() => {
        props.setActiveTab(props.text);
      }}
    >
      <Text
        style={{
          color: props.activeTab === props.text ? "white" : "black",
          fontSize: 15,
          fontWeight: "bold",
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};
