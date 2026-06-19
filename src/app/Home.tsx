import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {router} from 'expo-router'

const irHome = () => router.push("/Home");
const irForum = () => router.push("/Forum");
const irVideo = () => router.push("/Video");
const irChat= () => router.push("/Chat");
// const irPerfil = () => router.push("/Perfil");

export default function TelaHome() {
  return (
    <View style={styles.container}>

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

      <View style={styles.menu}>
        <TouchableOpacity onPress={irHome}>
          <Ionicons name="home-outline" size={28} color="#2B4F68" />
        </TouchableOpacity>
                
        <TouchableOpacity onPress={irForum}>
          <Ionicons name="document-text-outline" size={28} color="white" />
        </TouchableOpacity>
                
        <TouchableOpacity onPress={irVideo}>
          <Ionicons name="play-circle-outline" size={35} color="white" />
        </TouchableOpacity>
                
        <TouchableOpacity onPress={irChat}>
          <Ionicons name="chatbubble-outline" size={28} color="white" />
        </TouchableOpacity>

        <Ionicons name="person-outline" size={30} color="white" />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

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

  menu: {
    height: 65,
    backgroundColor: "#A8CBD8",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});