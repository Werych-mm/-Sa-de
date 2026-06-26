import { View, Text, StyleSheet} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function TelaHome() {
  return (
    <View style={styles.container}>

      <Header />

      <View style={styles.fundoB}>

        <View style={styles.card}>
          <Ionicons name="notifications-outline" size={35} color="#6B6B6B" />
          <Text style={styles.textoCard}>
            Agendamento de conversa com o médico Rubens Junior feito com sucesso!
          </Text>
        </View>

        <View style={styles.card}>
          <Ionicons name="notifications-outline" size={35} color="#6B6B6B" />
          <Text style={styles.textoCard}>
            O resultado do seu exame saiu! Verifique seu chat.
          </Text>
        </View>

      </View>

      <Footer telaAtual="home" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  fundoB: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 20,
    alignItems: "center",
  },

  card: {
    width: "90%",
    backgroundColor: "#E2E2E2",
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    marginBottom: 15,
  },

  textoCard: {
    flex: 1,
    marginLeft: 12,
    color: "#5A5A5A",
    fontWeight: "600",
    fontSize: 16,
  },

});