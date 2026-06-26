import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import Header from "@/components/header";
import Footer from "@/components/footer";

const IrLogin = () => router.push("/inicio/Login")

export default function TelaPerfil() {
  return (
    <View style={styles.container}>

      <Header />

    <View style={styles.conteudo}>

        <View style={styles.card}>

            <View style={styles.topo}>
                <Ionicons
                name="person-circle-outline"
                size={90}
                color="#CFCFCF"
                />

                <View style={styles.infoTopo}>
                    <View style={styles.caixaPequena}>
                        <Text style={styles.texto}>Dra. Laura</Text>
                    </View>

                    <View style={styles.caixaGrande}>
                        <Text style={styles.texto}>MEDICINA NA UES</Text>
                    </View>
                </View>
            </View>

            <View style={styles.botoesPerfil}>
                <TouchableOpacity style={styles.botaoEditar} onPress={() => router.push("/Detalhes/edPerfil")}>
                    <Text style={styles.textoBotao}>Editar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoOlho}>
                    <Ionicons name="eye-outline" size={28} color="#444" />
                </TouchableOpacity>
            </View>

            <View style={styles.campo}>
                <Text>Oculista</Text>
            </View>

            <View style={styles.campo}>
                <Text>101-255-589-44</Text>
            </View>

            <View style={styles.campo}>
                <Text>20/09/1999</Text>
            </View>

            <View style={styles.areaPosts}>
                <TouchableOpacity style={styles.botaoAcao}>
                    <Text>Novo post</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoAcao}>
                    <Text>Novo Vídeo</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={IrLogin} style={styles.botaoSair}>
                <Text style={styles.textoSair}>Sair</Text>
            </TouchableOpacity>

        </View>

    </View>

      <Footer telaAtual="perfil" />

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
    padding: 15,
  },

  card: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    borderRadius: 30,
    padding: 20,
  },

  topo: {
    flexDirection: "row",
    alignItems: "center",
  },

  infoTopo: {
    flex: 1,
    marginLeft: 10,
  },

  caixaPequena: {
    backgroundColor: "#D9D9D9",
    borderRadius: 12,
    padding: 8,
    marginBottom: 10,
    alignItems: "center",
  },

  caixaGrande: {
    backgroundColor: "#D9D9D9",
    borderRadius: 8,
    padding: 10,
  },

  texto: {
    fontWeight: "600",
    color: "#444",
  },

  botoesPerfil: {
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 15,
  },

  botaoEditar: {
    backgroundColor: "#D9D9D9",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginRight: 10,
  },

  botaoOlho: {
    backgroundColor: "#D9D9D9",
    borderRadius: 30,
    padding: 10,
  },

  textoBotao: {
    fontWeight: "bold",
    fontSize: 18,
  },

  campo: {
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },

  areaPosts: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 20,
  },

  botaoAcao: {
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },

  botaoSair: {
    alignSelf: "center",
    marginTop: 40,
    backgroundColor: "#FF4D73",
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 12,
  },

  textoSair: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});