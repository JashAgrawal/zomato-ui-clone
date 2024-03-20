import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { isDesktop, R, t } from "@/constants/data";
import CustomText from "../common/text";
import { AntDesign, Entypo, Fontisto, MaterialIcons } from "@expo/vector-icons";
import colors from "@/constants/colors";

const BigStoreCard = () => {
  const [isFav, setIsFav] = useState(false);
  return (
    <View
      style={[
        t`w-[${R(isDesktop ? 75 : 97)}] h-[${R(
          isDesktop ? 110 : 100
        )}] rounded-xl bg-white border border-gray-200 shadow-md my-2 overflow-hidden`,
        { marginRight: isDesktop ? 0 : 0 },
      ]}
    >
      <View style={t`relative`}>
        <Image
          resizeMode="cover"
          source={require("@/assets/images/pizza.jpg")}
          style={t`w-full h-[${R(60)}] rounded-t-xl`}
        />
        <View
          style={t`absolute right-2 top-2 left-2 flex flex-row items-center justify-between`}
        >
          <View
            style={t`flex flex-row items-center bg-black bg-opacity-80 px-1.5 py-0.5 rounded-lg`}
          >
            <CustomText size={12} color="white" family="semiBold">
              Aomic tenders
            </CustomText>
            <Entypo
              name="dot-single"
              size={20}
              color="white"
              style={t`mx-0.5`}
            />
            <CustomText size={12} color="white" family="semiBold">
              ₹350
            </CustomText>
          </View>
          <AntDesign
            name={isFav ? "heart" : "hearto"}
            size={20}
            color={isFav ? colors.primaryAccent : "white"}
            style={t`absolute right-1.5 top-1.5 z-10`}
            onPress={() => setIsFav(!isFav)}
          />
        </View>
      </View>
      <View style={t`p-3 flex-1  justify-between`}>
        <View style={t`flex flex-row justify-between items-center`}>
          <CustomText size={24} family="bold">
            Good Flippin' Burgers
          </CustomText>
          <View
            style={t`flex flex-row items-center rounded-lg bg-green-700 px-1.5 py-1`}
          >
            <CustomText color="white" family="bold" style={t`mr-1`}>
              4.3
            </CustomText>
            <AntDesign name="star" size={9} color="white" />
          </View>
        </View>
        <View style={t`flex flex-row items-center w-full`}>
          {["Burger", "American", "₹ 350 for one"].map((text: string) => (
            <View key={text} style={t`flex flex-row items-center`}>
              <CustomText family={"semiBold"} color={"gray"}>
                {text}
              </CustomText>
              {text !== "₹ 350 for one" && (
                <Entypo name="dot-single" size={24} color="black" />
              )}
            </View>
          ))}
        </View>
        <View style={t`flex flex-row items-center`}>
          <Fontisto name="stopwatch" size={12} color="black" style={t`mr-2`} />
          <CustomText family={"semiBold"} color={"gray"}>
            35 min
          </CustomText>
          <Entypo name="dot-single" size={24} color="black" />
          <CustomText family={"semiBold"} color={"gray"}>
            3.5 km
          </CustomText>
        </View>
        <View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: colors.lightGray,
              borderStyle: "dashed",
            }}
          />
          <View style={t`pt-2 flex flex-row items-center`}>
            <MaterialIcons name="local-offer" size={16} color="#3b82f6" />
            <CustomText family="semiBold" color="#3b82f6" style={t`ml-1.5`}>
              20% OFF up to ₹40 + ₹25 cashback
            </CustomText>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BigStoreCard;
