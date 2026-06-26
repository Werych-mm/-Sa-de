import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import Header from "@/components/header";
import Footer from "@/components/footer"

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

export default function TelaChat() {
  return (
    <View style={styles.container}>

      <Header /> 

      <FlatList
        data={mensagens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => router.push("/Detalhes/DetChat")}>
              <View style={styles.card}>

                  <Ionicons name="person-circle-outline" size={55} color="#CFCFCF"/>

                  <View style={styles.info}>
                    <Text style={styles.nome}> {item.nome} </Text>
                    <Text style={styles.mensagem} numberOfLines={2}> {item.mensagem} </Text>
                  </View>

                  <Text style={styles.horario}> {item.horario} </Text>
              </View>
          </TouchableOpacity>
        )}
      />

      <Footer telaAtual="chat" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
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

});