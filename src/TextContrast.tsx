import { StyleSheet, useColorScheme, View } from "react-native";
import { Card, Text } from "react-native-paper";

export default function TextContrastRoute() {
  const colorScheme = useColorScheme();

  const textColor =
    colorScheme === "dark" ? "rgba(255, 255, 255," : "rgba(0, 0, 0,";
  const inaccessibleTextColor = `${textColor} 0.15)`;
  const accessibleTextColor = `${textColor} 1)`;

  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Card.Title title="Inaccessible" />
        <Card.Content>
          <Text style={{ color: inaccessibleTextColor }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a
            urna tellus. Sed dapibus tellus tortor, et tempus diam vehicula sed.
            Suspendisse posuere nunc quis dolor rhoncus egestas.
          </Text>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Title title="Accessible" />
        <Card.Content>
          <Text style={{ color: accessibleTextColor }}>
            Cras pharetra nec turpis at volutpat. Curabitur at est arcu. Fusce
            convallis rhoncus nisi ac lobortis. Vestibulum consectetur suscipit
            eros at convallis. Phasellus eget semper justo, ut imperdiet elit.
          </Text>
        </Card.Content>
      </Card>
    </View>
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
});
