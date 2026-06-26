import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router} from "expo-router";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function TelaForum() {
  return (
    <View style={styles.container}>

      <Header />

      <View style={styles.conteudo}>

        <TouchableOpacity onPress={() => router.push("/Detalhes/DetPost") }>        
        <View style={styles.card}>
            <View style={styles.perfil}>
                <Ionicons name="person-circle-outline" size={50} color="#CFCFCF" />
                <Text style={styles.nome}>Dra. Dandara</Text>
              </View>

              <View style={styles.caixaTexto}>
                <Text style={styles.tituloCard}>
                  Como aliviar a dor de garganta?
                </Text>

                <Text style={styles.textoCard} numberOfLines={2}>
                  Para curar a dor de garganta, hidrate-se bastante...
                </Text>
            </View>
        </View>
      </TouchableOpacity>
      </View>

      <Footer telaAtual="forum" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  conteudo: {
    flex: 1,
    paddingTop: 15,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 15,
  },

  perfil: {
    alignItems: "center",
    width: 70,
  },

  nome: {
    fontSize: 11,
    textAlign: "center",
  },

  caixaTexto: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    borderRadius: 15,
    padding: 10,
  },

  tituloCard: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 4,
  },

  textoCard: {
    fontSize: 12,
    color: "#666",
  },
});