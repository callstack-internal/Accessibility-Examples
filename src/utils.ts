import {
  NavigationProp,
  useNavigation as vendorUseNavigation,
} from "@react-navigation/native";
import { createStackNavigator as vendorCreateStackNavigator } from "@react-navigation/stack";

export type RootStackParamList = {
  "Accessibility Examples": undefined;
  "Volume Slider": undefined;
  "Text Contrast": undefined;
  "Touch Region": undefined;
};

export const createStackNavigator =
  vendorCreateStackNavigator<RootStackParamList>;

export const useNavigation = vendorUseNavigation<
  NavigationProp<RootStackParamList>
>;
