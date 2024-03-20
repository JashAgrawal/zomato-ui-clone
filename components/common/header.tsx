import colors from "@/constants/colors";
import {
  HEADER_MAX_HEIGHT,
  HEADER_SCROLL_DISTANCE,
  isDesktop,
  R,
  t,
} from "@/constants/data";
import { AntDesign, Feather, FontAwesome6 } from "@expo/vector-icons";
import { Stack } from "expo-router";
import React, { useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  Animated,
  TextInput,
} from "react-native";
import CustomText from "./text";

function Header({ children }: { children: any }) {
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: "clamp",
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: "clamp",
  });
  const imageTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 100],
    extrapolate: "clamp",
  });

  const titleScale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 1],
    extrapolate: "clamp",
  });
  const titleTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, isDesktop ? -85 : -65],
    extrapolate: "clamp",
  });

  return (
    <>
      <SafeAreaView style={styles.saveArea}>
        <Animated.ScrollView
          contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT }}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
        >
          {children}
        </Animated.ScrollView>
        <Animated.View
          style={[
            styles.header,
            t`shadow-md bg-white`,
            { transform: [{ translateY: headerTranslateY }] },
          ]}
        >
          <Animated.View
            style={[
              styles.headerBackground,

              {
                opacity: imageOpacity,
                transform: [{ translateY: imageTranslateY }],
              },
            ]}
          >
            <View
              style={{
                marginTop: isDesktop ? 30 : 50,
              }}
            >
              <View
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                  paddingHorizontal: 16,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <FontAwesome6
                    name="location-dot"
                    size={24}
                    color={colors.primaryAccent}
                  />
                  <View style={{ marginLeft: R(8) }}>
                    <View style={t`flex flex-row items-center`}>
                      <CustomText
                        family="bold"
                        size={20}
                        color={colors.gray}
                        style={{ marginRight: R(8) }}
                      >
                        Nazrana Compound
                      </CustomText>
                      <AntDesign name="down" size={12} color="black" />
                    </View>
                    <CustomText>Bhiwandi , Maharashtra</CustomText>
                  </View>
                </View>
                <View
                  style={{
                    borderRadius: 99,
                    width: 40,
                    height: 40,
                    backgroundColor: "#7dd3fc",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CustomText color="#1d4ed8" size={24} family="bold">
                    J
                  </CustomText>
                </View>
              </View>
            </View>
          </Animated.View>
        </Animated.View>
        <Animated.View
          style={[
            styles.topBar,
            {
              transform: [
                { scale: titleScale },
                { translateY: titleTranslateY },
              ],
            },
          ]}
        >
          <View
            style={t`flex flex-row justify-between items-center shadow-md bg-white rounded-lg p-2 w-full border border-gray-200`}
          >
            <AntDesign name="search1" size={24} color={colors.primaryAccent} />
            <CustomText
              family="semiBold"
              size={18}
              color={"#9ca3af"}
              style={t`grow px-4`}
            >
              Search Pizza ..
            </CustomText>
            <View style={t`flex flex-row items-center`}>
              <View
                style={t`flex h-[${R(6)}] w-1 border-r border-[#9ca3af] mx-2`}
              />
              <Feather name="mic" size={24} color={colors.primaryAccent} />
            </View>
          </View>
        </Animated.View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  saveArea: {
    flex: 1,
    backgroundColor: "#eff3fb",
  },
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
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#ffffff",
    overflow: "hidden",
    height: HEADER_MAX_HEIGHT,
  },
  headerBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: "cover",
  },
  topBar: {
    marginTop: isDesktop ? 20 : 40,
    height: 50,
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 70,
    // bottom: 20,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
  },
  title: {
    color: "white",
    fontSize: 20,
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

export default Header;
