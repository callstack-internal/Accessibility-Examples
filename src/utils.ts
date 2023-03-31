import {
  NavigationProp,
  useNavigation as vendorUseNavigation,
} from "@react-navigation/native";
import { createStackNavigator as vendorCreateStackNavigator } from "@react-navigation/stack";

export type RootStackParamList = {
  "Accessibility Examples": undefined;
  "Some Component": undefined;
};

export const createStackNavigator =
  vendorCreateStackNavigator<RootStackParamList>;

export const useNavigation = vendorUseNavigation<
  NavigationProp<RootStackParamList>
>;
