import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function TelaDetalhePost() {
    return (
        <View style={styles.container}>
            <Header />

            <ScrollView contentContainerStyle={styles.conteudo}>
                <Ionicons
                name="chevron-back-outline"
                size={24}
                color="#555"
                style={styles.voltar}
                />

                <View style={styles.autorContainer}>
                    <TouchableOpacity onPress={() => router.push("/Principal/Forum")}>
                        <Ionicons name="person-circle-outline" size={60} color="#D6D6D6"/>
                    </TouchableOpacity>

                    <View style={styles.infoAutor}>
                        <Text style={styles.nome}>Doutora Dandara</Text>
                        <Text style={styles.especializacao}>
                        Especialização: Dermatologista
                        </Text>
                    </View>
                </View>

                <Text style={styles.titulo}>
                Dor de garganta: como aliviar o desconforto e acelerar a recuperação
                </Text>

                <Text style={styles.paragrafo}>
                A dor de garganta é um sintoma comum e pode surgir por gripe,
                resfriado, alergias, ar seco, fumaça ou infecções virais e
                bacterianas. Em muitos casos, o desconforto melhora em poucos dias
                com cuidados simples em casa.
                </Text>

                <Text style={styles.subtitulo}>Principais sintomas</Text>

                <Text style={styles.paragrafo}>
                Além da dor ao engolir, também podem aparecer:
                </Text>

                <View style={styles.lista}>
                    <Text style={styles.item}>• Ardência e irritação</Text>
                    <Text style={styles.item}>• Vermelhidão</Text>
                    <Text style={styles.item}>• Rouquidão</Text>
                    <Text style={styles.item}>• Tosse seca</Text>
                    <Text style={styles.item}>• Sensação de garganta "arranhando"</Text>
                    <Text style={styles.item}>• Febre leve</Text>
                </View>
            </ScrollView>

            <Footer telaAtual="forum" />
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },

    conteudo: {
        padding: 15,
    },

    voltar: {
        marginBottom: 10,
    },

    autorContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },

    infoAutor: {
        marginLeft: 10,
    },

    nome: {
        fontSize: 18,
        fontWeight: "500",
        color: "#555",
    },

    especializacao: {
        fontSize: 12,
        color: "#777",
    },

    titulo: {
        fontSize: 30,
        fontWeight: "400",
        color: "#333",
        marginBottom: 15,
        lineHeight: 38,
    },

    paragrafo: {
        fontSize: 18,
        color: "#666",
        lineHeight: 28,
        marginBottom: 12,
    },

    subtitulo: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#555",
        marginTop: 8,
        marginBottom: 8,
    },

    lista: {
        marginTop: 5,
        paddingLeft: 10,
    },

    item: {
        fontSize: 18,
        color: "#666",
        lineHeight: 30,
    },
});