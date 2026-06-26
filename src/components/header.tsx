import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.header}>
        <View style={styles.logo}>
        <Text style={styles.nome}>+Saúde</Text>

        <Image
          source={require("@/images/Folha.png")}
          style={styles.folha}
        />
      </View>

      <Ionicons name="search-outline" size={28} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#A8CBD8",
    height: 110,
    paddingHorizontal: 20,
    paddingTop: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    flexDirection: "row",
    alignItems: "center",
  },

  nome: {
    fontSize: 40,
    color: "#FFF",
    fontWeight: "bold",
  },

  folha: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    marginLeft: 3,
  },
});