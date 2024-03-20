import { Text, StyleProp } from "react-native";
import React from "react";
import { TextStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import R from "@/utils/adaptiveHelper";
interface proptypes {
  children: any;
  style?: StyleProp<TextStyle>;
  family?:
    | "light"
    | "regular"
    | "medium"
    | "semiBold"
    | "bold"
    | "black"
    | "extraBold";
  color?: string;
  size?: number;
  onPress?: any;
}
const CustomText = ({
  children,
  style = {},
  family,
  color,
  size = 16,
  onPress,
}: proptypes) => {
  return (
    <Text
      onPress={onPress ? onPress : undefined}
      style={[
        {
          color: color,
          fontFamily: family || "regular",
          fontSize: R(size),
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default CustomText;
