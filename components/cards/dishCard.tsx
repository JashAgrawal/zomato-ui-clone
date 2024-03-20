import { View, Text, Image } from "react-native";
import React from "react";
import CustomText from "../common/text";
import { R, t } from "@/constants/data";

const DishCard = () => {
  return (
    <View style={t`mx-2`}>
      <Image
        source={require("@/assets/images/pizza-dish.png")}
        resizeMode="contain"
        style={t`w-[${R(30)}] h-[${R(30)}] `}
      />
      <CustomText family="medium" style={t`text-center`}>
        Pizza
      </CustomText>
    </View>
  );
};

export default DishCard;
