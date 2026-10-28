
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/icon.png")} style={styles.logo} />
      <Text style={styles.title}>Campus Spots</Text>
      <Text style={styles.subtitle}>Change in subtitle</Text>
      <View style={styles.card}>
        <Text style={styles.cardName}>Pablo Holgado</Text>
        <Text>I'm from Madrid and I study Information Systems.</Text>
        <Text>My favourite place in my hometown is Santiago Bernabeu as I'm a football fan and it's my team.</Text>
      </View>
      <View style={styles.squareRow}>
        <View style={styles.redSquare} />
        <View style={styles.greenSquare} />
        <View style={styles.blueSquare} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f6f6f4",
  },
  logo: {
    width: 96,
    height: 96,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 16,
    color: "#666",
  },
  card: {
  backgroundColor: "#ffffff",
  borderRadius: 12,
  padding: 16,
  marginTop: 20,
  width: "85%",
},
cardName: {
  fontWeight: "bold",
},
squareRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  gap: 8,
  width: "85%",
  marginTop: 20,
},
redSquare: {
  width: 40,
  height: 40,
  backgroundColor: "red",
},
greenSquare: {
  flex: 1,
  height: 40,
  backgroundColor: "green",
},
blueSquare: {
  width: 40,
  height: 40,
  backgroundColor: "blue",
},
});
