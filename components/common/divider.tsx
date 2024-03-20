import { View, Text } from "react-native";
import React from "react";
import { R, t } from "@/constants/data";
import CustomText from "./text";
import Colors from "@/constants/colors";

const Divider = ({ text }: { text: string }) => {
  return (
    <View style={t`flex flex-row items-center justify-between my-4 px-4`}>
      <View style={t`flex-1 w-full h-1 border-b border-gray-200`} />
      <CustomText
        family="medium"
        // color={Colors.gray}
        style={[t`mx-2 text-gray-500`, { letterSpacing: R(3) }]}
      >
        {text.toLocaleUpperCase()}
      </CustomText>
      <View style={t`flex-1 w-full h-1 border-b border-gray-200`} />
    </View>
  );
};

export default Divider;
