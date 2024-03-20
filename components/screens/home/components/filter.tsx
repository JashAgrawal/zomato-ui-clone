import { View, Text, Pressable, FlatList } from "react-native";
import React from "react";
import { R, t } from "@/constants/data";
import CustomText from "@/components/common/text";
import { AntDesign, Entypo } from "@expo/vector-icons";
import colors from "@/constants/colors";

const FilterOption = () => {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <Pressable
      style={[
        t`shadow-md p-2 px-3 mb-1.5 bg-white mr-2 flex flex-row items-center justify-between border rounded-xl`,
        t`${
          isActive
            ? `border-[${colors.primaryAccent}20] border-[${colors.primaryAccent}]`
            : "border-gray-100"
        }`,
      ]}
      onPress={() => setIsActive(!isActive)}
    >
      <CustomText
        family="semiBold"
        color={isActive ? colors.primaryAccent : "black"}
      >
        Nearest
      </CustomText>
      {isActive && (
        <Entypo name="cross" size={18} color={colors.primaryAccent} />
      )}
    </Pressable>
  );
};
const SortFilterOption = () => {
  const [isActive, setIsActive] = React.useState(false);
  const activeColor = isActive ? colors.primaryAccent : "black";
  return (
    <Pressable
      style={[
        t`shadow-md px-5 p-2 mb-1.5 ml-1.5 bg-white mr-2 flex flex-row items-center justify-between border rounded-xl`,
        t`${
          isActive
            ? `border-[${colors.primaryAccent}20] border-[${colors.primaryAccent}]`
            : "border-gray-100"
        }`,
      ]}
      onPress={() => setIsActive(!isActive)}
    >
      <AntDesign name="bars" size={14} color={activeColor} />
      <CustomText family="semiBold" style={t`mx-1`} color={activeColor}>
        Sort
      </CustomText>

      <AntDesign name="caretdown" size={8} color={activeColor} />
    </Pressable>
  );
};
const Filter = () => {
  return (
    <View style={t`py-4`}>
      <FlatList
        horizontal
        data={Array(10)}
        contentContainerStyle={{ paddingHorizontal: R(16) }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <>
            {index === 0 && <SortFilterOption />}
            <FilterOption />
          </>
        )}
      />
    </View>
  );
};

export default Filter;
