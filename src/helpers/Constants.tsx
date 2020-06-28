import { Dimensions, Platform } from "react-native";

// Platform
export const PLATFORM = Platform.OS;

// Dimensions
const { width, height } = Dimensions.get("window");

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

// Colors
export const DEFAULT_INDICATOR_COLOR = "#E8E8E8";
