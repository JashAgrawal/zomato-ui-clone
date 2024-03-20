import { View, Text, FlatList } from "react-native";
import React from "react";
import BigStoreCard from "@/components/cards/storeCard";
import { isDesktop, R } from "@/constants/data";

const Stores = () => {
  return (
    <FlatList
      numColumns={isDesktop ? 4 : 1}
      columnWrapperStyle={
        isDesktop ? { justifyContent: "space-between" } : undefined
      }
      contentContainerStyle={{
        flex: 1,
        paddingHorizontal: R(16),
        alignItems: "stretch",
      }}
      data={Array(8)}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <BigStoreCard />}
    />
  );
};

export default Stores;
