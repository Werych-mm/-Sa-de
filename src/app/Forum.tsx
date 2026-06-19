import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {router} from "expo-router";

const irHome = () => router.push("/Home");
const irForum = () => router.push("/Forum");
const irVideo = () => router.push("/Video");
const irChat= () => router.push("/Chat");
// const irPerfil = () => router.push("/Perfil");

export default function TelaForum() {
  return (
    <View style={styles.container}>
      
      <View style={styles.fundoA}>
        <View style={styles.Sauimg}>
          <Text style={styles.Titulo}>+Saúde</Text>
          <Image source={require("@/images/Folha.png")} />
        </View>

        <Ionicons name="search-outline" size={28} color="white" style={styles.lupa} />
      </View>

      <View style={styles.conteudo}>
        
        <View style={styles.card}>
          <View style={styles.perfil}>
            <Ionicons name="person-circle-outline" size={50} color="#CFCFCF" />
            <Text style={styles.nome}>Dra. Dandara</Text>
          </View>

          <View style={styles.caixaTexto}>
            <Text style={styles.tituloCard}>Como aliviar a dor de garganta?</Text>

            <Text style={styles.textoCard} numberOfLines={2}>Para curar a dor de garganta, hidrate-se bastante, faça gargarejos com água...</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.perfil}>
            <Ionicons name="person-circle-outline" size={50} color="#CFCFCF" />
            <Text style={styles.nome}>Dr. Alex S.</Text>
          </View>

          <View style={styles.caixaTexto}>
            <Text style={styles.tituloCard}>Como tratar bico de papagaio?</Text>

            <Text style={styles.textoCard} numberOfLines={2}>O tratamento para bico de papagaio (osteófitos) é focado em aliviar dores...</Text>
          </View>
        </View>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity onPress={irHome}>
          <Ionicons name="home-outline" size={28} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={irForum}>
          <Ionicons name="document-text-outline" size={28} color="#2B4F68" />
        </TouchableOpacity>

        <TouchableOpacity onPress={irVideo}>
          <Ionicons name="play-circle-outline" size={35} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={irChat}>
        <Ionicons name="chatbubble-outline" size={28} color="white" />
        </TouchableOpacity>

        <Ionicons name="person-outline" size={28} color="white" />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  fundoA: {
    backgroundColor: "#A8CBD8",
    height: 90,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },

  Sauimg: {
    flexDirection: "row",
    alignItems: "center",
  },

  Titulo: {
    color: "#FFF",
    fontSize: 35,
    fontWeight: "bold",
  },

  lupa: {
    marginTop: 8,
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

  menu: {
    backgroundColor: "#A8CBD8",
    height: 65,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});