import { Platform, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import { Card } from "react-native-paper";

export default function VolumeSliderRoute() {
  const [inaccessibleVolume, setInaccessibleVolume] = useState(0.2);
  const [accessibleVolume, setAccessibleVolume] = useState(0.2);
  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Card.Title title="Inaccessible" />
        <Card.Content>
          <InaccessibleVolumeSlider
            value={inaccessibleVolume}
            onChange={setInaccessibleVolume}
          />
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Title title="Accessible" />
        <Card.Content>
          <AccessibleVolumeSlider
            value={accessibleVolume}
            onChange={setAccessibleVolume}
          />
        </Card.Content>
      </Card>
    </View>
  );
}

type Props = {
  /**
   * Between 0 and 1
   */
  value: number;
  onChange(newValue: number): void;
};
function InaccessibleVolumeSlider({ value: valueProp, onChange }: Props) {
  const containerWidthRef = useRef(0);
  const [dragLocation, setDragLocation] = useState<[number, number] | null>(
    null
  );
  const value = dragLocation
    ? newValue(
        dragLocation[1],
        dragLocation[0],
        containerWidthRef.current,
        valueProp
      )
    : valueProp;
  return (
    <View
      style={styles.volumeSliderContainer}
      onLayout={({
        nativeEvent: {
          layout: { width },
        },
      }) => {
        containerWidthRef.current = width;
      }}
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderGrant={({ nativeEvent: { locationX } }) => {
        setDragLocation([locationX, locationX]);
      }}
      onResponderMove={({ nativeEvent: { locationX } }) => {
        setDragLocation((current) =>
          current ? [current[0], locationX] : null
        );
      }}
      onResponderRelease={({ nativeEvent: { locationX } }) => {
        setDragLocation(null);
        if (dragLocation && containerWidthRef.current) {
          onChange(
            newValue(
              locationX,
              dragLocation[0],
              containerWidthRef.current,
              valueProp
            )
          );
        }
      }}
    >
      <View style={[styles.volumeSliderBar, { width: `${value * 100}%` }]} />
      <Ionicons
        style={styles.volumeSliderIcon}
        name="md-volume-high"
        color="#000000"
        size={iconSize}
      />
    </View>
  );
}

function AccessibleVolumeSlider({ value: valueProp, onChange }: Props) {
  const containerWidthRef = useRef(0);
  const [dragLocation, setDragLocation] = useState<[number, number] | null>(
    null
  );
  const value = dragLocation
    ? newValue(
        dragLocation[1],
        dragLocation[0],
        containerWidthRef.current,
        valueProp
      )
    : valueProp;
  const percentage = value * 100;
  return (
    <View
      style={styles.volumeSliderContainer}
      onLayout={({
        nativeEvent: {
          layout: { width },
        },
      }) => {
        containerWidthRef.current = width;
      }}
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderGrant={({ nativeEvent: { locationX } }) => {
        setDragLocation([locationX, locationX]);
      }}
      onResponderMove={({ nativeEvent: { locationX } }) => {
        setDragLocation((current) =>
          current ? [current[0], locationX] : null
        );
      }}
      onResponderRelease={({ nativeEvent: { locationX } }) => {
        setDragLocation(null);
        if (dragLocation && containerWidthRef.current) {
          onChange(
            newValue(
              locationX,
              dragLocation[0],
              containerWidthRef.current,
              valueProp
            )
          );
        }
      }}
    >
      <View style={[styles.volumeSliderBar, { width: `${percentage}%` }]} />
      <Ionicons
        importantForAccessibility="no"
        style={styles.volumeSliderIcon}
        name="md-volume-high"
        color="#000000"
        size={iconSize}
      />
    </View>
  );
}

const volumeSliderHeight = 40;
const iconSize = 20;
const iconMargin = (volumeSliderHeight - iconSize) / 2;
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
  volumeSliderContainer: {
    position: "relative",
    backgroundColor: "#4689ca",
    overflow: "hidden",
    borderRadius: 12,
    height: volumeSliderHeight,
  },
  volumeSliderBar: {
    backgroundColor: "#FFFFFF80",
    height: volumeSliderHeight,
  },
  volumeSliderIcon: {
    position: "absolute",
    right: iconMargin,
    top: iconMargin,
  },
});

function newValue(currentLocation, startLocation, width, value) {
  return Math.max(
    0,
    Math.min(1, (currentLocation - startLocation) / width + value)
  );
}
