import { View, Text } from "react-native";
import React from "react";
import Divider from "@/components/common/divider";
import Filter from "./filter";
import Stores from "./stores";

const AllStores = () => {
  return (
    <View>
      <Divider text="All Restaurants" />
      <Filter />
      <View>
        <Stores />
      </View>
    </View>
  );
};

export default AllStores;
