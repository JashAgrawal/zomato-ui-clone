import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";
import Header from "@/components/common/header";
import { Stack } from "expo-router";
import InfoCard from "@/components/cards/infoCard";
import { isDesktop, R, t } from "@/constants/data";
import Divider from "@/components/common/divider";
import Recomended from "./components/Recomended";
import CustomText from "@/components/common/text";
import Dishes from "./components/dish";
import Filter from "./components/filter";
import Stores from "./components/stores";
import AllStores from "./components/AllStores";
const HomePageComp = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Header>
        <View style={t`p-4 px-0 bg-white flex-1`}>
          <View style={t`px-4`}>
            <InfoCard>
              <Image
                source={require("@/assets/images/banner.jpg")}
                style={t`w-full h-[${R(isDesktop ? 45 : 30)}] rounded-xl`}
                resizeMode="cover"
              />
            </InfoCard>
          </View>

          <Recomended />
          <Divider text="Explore" />
          <View style={t`w-full flex flex-row justify-between px-4`}>
            <InfoCard style={t`w-[48.5%]`}>
              <Image
                source={require("@/assets/images/banner.jpg")}
                style={t`w-full h-[${R(isDesktop ? 30 : 25)}] rounded-xl`}
                resizeMode="cover"
              />
            </InfoCard>
            <InfoCard style={t`w-[48.5%]`}>
              <Image
                source={require("@/assets/images/banner.jpg")}
                style={t`w-full h-[${R(isDesktop ? 30 : 25)}] rounded-xl`}
                resizeMode="cover"
              />
            </InfoCard>
          </View>
          <Dishes />

          <AllStores />
        </View>
      </Header>
    </>
  );
};
const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#402583",
    backgroundColor: "#ffffff",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 1,
    borderRadius: 10,
    marginHorizontal: 12,
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  avatar: {
    height: 54,
    width: 54,
    resizeMode: "contain",
    borderRadius: 54 / 2,
  },
  fullNameText: {
    fontSize: 16,
    marginLeft: 24,
  },
});
export default HomePageComp;
