import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
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
      <Card style={styles.card}>
        <Card.Title title="Accessible (variant 1)" />
        <Card.Content>
          <AccessibleStarHitSlop />
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Title title="Accessible (variant 2)" />
        <Card.Content>
          <AccessibleStarLarger />
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

function AccessibleStarHitSlop() {
  const [isStarred, setIsStarred] = useState(false);
  return (
    <Pressable
      style={styles.pressable}
      onPress={() => setIsStarred((value) => !value)}
      aria-label={isStarred ? "Remove from favorites" : "Add to favorites"}
      role="button"
      hitSlop={24}
    >
      <MaterialCommunityIcons
        size={20}
        name={isStarred ? "star-remove" : "star"}
      />
    </Pressable>
  );
}

function AccessibleStarLarger() {
  const [isStarred, setIsStarred] = useState(false);
  return (
    <Pressable
      style={[styles.pressable, styles.largerPressable]}
      onPress={() => setIsStarred((value) => !value)}
      aria-label={isStarred ? "Remove from favorites" : "Add to favorites"}
      role="button"
    >
      <MaterialCommunityIcons
        size={40}
        name={isStarred ? "star-remove" : "star"}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignSelf: "center",
    maxWidth: 400,
    width: "100%",
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
  largerPressable: {
    width: 48,
    height: 48,
  },
});
