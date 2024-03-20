import { View, Text, FlatList, ScrollView } from "react-native";
import React from "react";
import DishCard from "@/components/cards/dishCard";
import "@/app/global.css";
import { ScrollViewIndicator } from "@fanchenbao/react-native-scroll-indicator";
import { isDesktop, R } from "@/constants/data";
import Divider from "@/components/common/divider";
const Dishes = () => {
  return (
    <>
      <Divider text="whats on you'r mind" />
      <FlatList
        horizontal
        data={Array(10)}
        contentContainerStyle={{
          paddingBottom: isDesktop ? 16 : 0,
          paddingHorizontal: R(16),
        }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <DishCard />
            <DishCard />
          </View>
        )}
      />
    </>
  );
};

export default Dishes;
