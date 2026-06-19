import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {router} from "expo-router"

const irHome = () => router.push("/Home");
const irForum = () => router.push("/Forum");
const irVideo = () => router.push("/Video");
const irChat= () => router.push("/Chat");
// const irPerfil = () => router.push("/Perfil");

const mensagens = [
  {
    id: "1",
    nome: "Dra. Samira",
    mensagem:
      "Você estava pensando em agendar uma consulta mas não sei se ele poderia ir pois e...",
    horario: "Ontem",
  },
  {
    id: "2",
    nome: "Dra. Rosilda",
    mensagem:
      "O atendimento está disponível de Segunda a sexta!",
    horario: "20:04",
  },
  {
    id: "3",
    nome: "Dr. Rubens Junior",
    mensagem:
      "Verifique se você não esqueceu de tomar a medicação, é muito importante para o s...",
    horario: "16:02",
  },
];

export default function TelaForum() {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={styles.titulo}>+Saúde</Text>
          <Image source={require("@/images/Folha.png")}/>
        </View>

        <Ionicons name="search-outline" size={28} color="white" />
      </View>

      {/* LISTA DE CONVERSAS */}
      <FlatList
        data={mensagens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>

            <Ionicons name="person-circle-outline" size={55} color="#CFCFCF"/>

            <View style={styles.info}>
              <Text style={styles.nome}> {item.nome} </Text>
              <Text style={styles.mensagem} numberOfLines={2}> {item.mensagem} </Text>
            </View>

            <Text style={styles.horario}> {item.horario} </Text>
          </View>
        )}
      />

      {/* MENU INFERIOR */}
      <View style={styles.menu}>
        <TouchableOpacity onPress={irHome}>
            <Ionicons name="home-outline" size={28} color="white" />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={irForum}>
            <Ionicons name="document-text-outline" size={28} color="white" />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={irVideo}>
            <Ionicons name="play-circle-outline" size={35} color="white" />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={irChat}>
            <Ionicons name="chatbubble-outline" size={28} color="#2B4F68" />
        </TouchableOpacity>

        <Ionicons name="person-outline" size={30} color="white" />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },

  header: {
    height: 100,
    backgroundColor: "#A8CBD8",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingTop: 20,
  },

  logo: {
    flexDirection: "row",
    alignItems: "center",
  },

  titulo: {
    fontSize: 38,
    color: "#FFF",
    fontWeight: "bold",
  },

  folha: {
    fontSize: 26,
    marginLeft: 3,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EDEDED",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#DDD",
  },

  info: {
    flex: 1,
    marginLeft: 10,
  },

  nome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#444",
  },

  mensagem: {
    color: "#666",
    fontSize: 14,
    marginTop: 2,
  },

  horario: {
    fontSize: 12,
    color: "#888",
    alignSelf: "flex-start",
  },

  menu: {
    height: 70,
    backgroundColor: "#A8CBD8",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});