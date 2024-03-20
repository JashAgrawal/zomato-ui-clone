import {
  View,
  Text,
  Pressable,
  StyleProp,
  Image,
  Platform,
} from "react-native";
import React from "react";
import { R, t } from "@/constants/data";
import { ViewStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";
const InfoCard = ({
  children,
  onPress,
  style,
}: {
  children: any;
  onPress?: any;
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <Pressable
      style={[
        t`w-full bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200`,
        style,
      ]}
      onPress={() => (onPress ? onPress() : console.log("i will go somewhere"))}
    >
      {children}
    </Pressable>
  );
};

export default InfoCard;
