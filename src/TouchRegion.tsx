import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Card } from "react-native-paper";

export default function TouchRegionRoute() {
  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Card.Title title="Inaccessible" />
        <Card.Content>
          <InaccessibleStar />
        </Card.Content>
      </Card>
    </View>
  );
}

function InaccessibleStar() {
  const [isStarred, setIsStarred] = useState(false);
  return (
    <Pressable
      style={styles.pressable}
      onPress={() => setIsStarred((value) => !value)}
    >
      <MaterialCommunityIcons
        size={20}
        name={isStarred ? "star-remove" : "star"}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignSelf: "center",
    maxWidth: 400,
    width: 400,
    paddingHorizontal: 24,
  },
  card: {
    marginTop: 18,
  },
  pressable: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    backgroundColor: "#c0b755",
    alignSelf: "center",
    marginHorizontal: 4,
  },
});
