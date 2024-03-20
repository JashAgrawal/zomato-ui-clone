import { View, Text, FlatList } from "react-native";
import React from "react";
import { isDesktop, R, t } from "@/constants/data";
import CustomText from "@/components/common/text";
import Colors from "@/constants/colors";
import SmallStoreCard from "@/components/cards/smallStoreCard";
import Divider from "@/components/common/divider";
const Tab = ({
  tabs,
  activeTab,
  setActiveTab,
}: {
  tabs: string[];
  activeTab: number;
  setActiveTab: any;
}) => {
  return (
    <View style={t`flex justify-center items-center`}>
      <View style={t`flex-row items-center rounded-xl overflow-hidden p-1`}>
        {tabs.map((tab, index) => (
          <CustomText
            key={index}
            color={"black"}
            size={16}
            family={activeTab === index ? "semiBold" : "regular"}
            style={[
              t`py-2 px-4 border border-gray-200 w-[${R(40)}] text-center`,
              t`${
                activeTab === index ? `border-[${Colors.primaryAccent}]` : ""
              }`,
              t`${activeTab === index ? `bg-[${Colors.primaryAccent}20]` : ""}`,
              t`${index % 2 === 0 ? "rounded-l-xl" : "rounded-r-xl"}`,
            ]}
            onPress={() => setActiveTab(index)}
          >
            {tab}
          </CustomText>
        ))}
      </View>
    </View>
  );
};
const Recomended = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <>
      <Divider text="For You" />
      <View>
        <Tab
          tabs={["Recomended", "Favorites"]}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        {activeTab === 0 ? (
          <FlatList
            contentContainerStyle={{
              paddingBottom: isDesktop ? 16 : 0,
              paddingHorizontal: R(16),
            }}
            // numColumns={2}
            horizontal
            data={Array(10)}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View>
                <SmallStoreCard />
                <SmallStoreCard />
              </View>
            )}
          />
        ) : (
          <View style={t`flex min-h-[${R(100)}] justify-center items-center`}>
            <CustomText>No Favorites</CustomText>
          </View>
        )}
      </View>
    </>
  );
};

export default Recomended;
