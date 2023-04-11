import { Divider, List } from "react-native-paper";
import { FlatList } from "react-native";

import { RootStackParamList, useNavigation } from "./utils";

const routes = [
  "Text Contrast",
  "Volume Slider",
  "Touch Region",
] as const satisfies readonly (keyof RootStackParamList)[];
export default function Examples() {
  const navigation = useNavigation();
  return (
    <FlatList
      data={routes}
      renderItem={({ item }) => (
        <List.Item title={item} onPress={() => navigation.navigate(item)} />
      )}
      ItemSeparatorComponent={Divider}
    />
  );
}
