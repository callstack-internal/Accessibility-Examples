import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import {
  adaptNavigationTheme,
  Provider as PaperProvider,
  MD3LightTheme,
  MD3DarkTheme,
} from "react-native-paper";

import Examples from "./src/Examples";
import VolumeSlider from "./src/VolumeSlider";
import TextContrast from "./src/TextContrast";
import TouchRegion from "./src/TouchRegion";
import { createStackNavigator } from "./src/utils";

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = {
  ...MD3LightTheme,
  ...LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...LightTheme.colors,
  },
};
const CombinedDarkTheme = {
  ...MD3DarkTheme,
  ...DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...DarkTheme.colors,
  },
};

const Stack = createStackNavigator();

export default function App() {
  const colorScheme = useColorScheme();
  const theme =
    colorScheme === "dark" ? CombinedDarkTheme : CombinedDefaultTheme;

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="Accessibility Examples">
          <Stack.Screen name="Accessibility Examples" component={Examples} />
          <Stack.Screen name="Volume Slider" component={VolumeSlider} />
          <Stack.Screen name="Text Contrast" component={TextContrast} />
          <Stack.Screen name="Touch Region" component={TouchRegion} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
