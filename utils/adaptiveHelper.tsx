import { Dimensions, PixelRatio } from "react-native";
class R {
  figmaWidthInPx: number = 428;
  windowWidthInPx: number = PixelRatio.get() * Dimensions.get("window").width;
  isDesktop: boolean = Dimensions.get("window").width > 768;
  r = (figmaValueInPx: number, round: boolean = true) => {
    if (this.isDesktop) {
      return figmaValueInPx;
    }
    const deviceValueInPx =
      (this.windowWidthInPx * figmaValueInPx) / this.figmaWidthInPx;
    const deviceValueInDp = deviceValueInPx / PixelRatio.get();
    if (round) {
      return Math.round(deviceValueInPx / PixelRatio.get());
    }
    return deviceValueInDp;
  };
}

const instance = Object.freeze(new R());
export default instance.r;
