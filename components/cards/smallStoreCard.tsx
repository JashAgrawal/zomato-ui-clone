import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { R, t } from "@/constants/data";
import CustomText from "../common/text";
import { AntDesign } from "@expo/vector-icons";
import colors from "@/constants/colors";

const SmallStoreCard = () => {
  const [isFav, setIsFav] = useState(false);
  return (
    <View
      style={t`w-[${R(40)}] h-[${R(
        45
      )}] overflow-hidden m-2 flex flex-col justify-between pb-2`}
    >
      <View style={t`relative border border-gray-200 rounded-xl p-[0.1]`}>
        <AntDesign
          name={isFav ? "heart" : "hearto"}
          size={20}
          color={isFav ? colors.primaryAccent : "white"}
          style={t`absolute right-1.5 top-1.5 z-10`}
          onPress={() => setIsFav(!isFav)}
        />
        <CustomText
          size={14}
          color="white"
          style={t`absolute left-1.5 bottom-1.5 z-10`}
        >
          Offer 1
        </CustomText>
        <Image
          source={require("@/assets/images/pizza.jpg")}
          style={t`w-[${R(40)}] h-[${R(30)}] rounded-xl`}
        />
      </View>
      <CustomText family="semiBold" style={t`my-1`}>
        Domino's Pizza
      </CustomText>
      <View style={t`flex flex-row items-center w-full`}>
        <View>
          <AntDesign name="star" size={12} color="#166534" />
        </View>
        <CustomText>4.5</CustomText>
        <View style={t`flex h-[${R(6)}] w-1 border-r border-[#9ca3af] mx-2`} />
        <CustomText>33 Mins</CustomText>
      </View>
    </View>
  );
};

export default SmallStoreCard;
