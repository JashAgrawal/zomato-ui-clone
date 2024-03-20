import adaptiveHelper from "@/utils/adaptiveHelper";
import { Dimensions } from "react-native";
export const isDesktop: boolean = Dimensions.get("window").width > 768;
import tw from "twrnc";
export const HEADER_MAX_HEIGHT = isDesktop ? 150 : 170;
export const HEADER_MIN_HEIGHT = isDesktop ? 60 : 100;
export const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
export const R = adaptiveHelper;
export const t = tw;
