import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";

const IrLogin = () => router.push("/inicio/Login");

export default function RecuperarSenha() {
  return (
    <View style={styles.container}>

        <View style={styles.topo}>
            <Text style={styles.logo}>+Saúde</Text>
            <Image source={require("@/images/Folha.png")} />
        </View>

        <View style={styles.card}>

            <Text style={styles.titulo}>Esqueci minha senha</Text>
            <Text style={styles.descricao}>Para redefinir sua senha, digite seu nome de usuário ou e-mail cadastrado e lhe enviaremos um e-mail com as instruções.</Text>
            <Text style={styles.label}>Email ou usuário:</Text>

            <TextInput style={styles.input} />

            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textoBotao}>Enviar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={IrLogin}>
                <Text style={styles.cancelar}> Cancelar</Text>
            </TouchableOpacity>

        </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#8EBCCD",
        alignItems: "center",
        paddingTop: 70,
    },

    topo: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },

    logo: {
        fontSize: 60,
        fontWeight: "bold",
        color: "#FFF",
    },

    card: {
        width: "85%",
        backgroundColor: "#FFF",
        borderRadius: 25,
        padding: 20,
        minHeight: 350,
    },

    titulo: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#666",
        textAlign: "center",
        marginTop: 10,
    },

    descricao: {
        textAlign: "center",
        color: "#666",
        fontSize: 15,
        marginTop: 25,
        marginBottom: 35,
        lineHeight: 22,
    },

    label: {
        fontSize: 18,
        fontWeight: "600",
        color: "#666",
        marginBottom: 8,
    },

    input: {
        borderWidth: 1,
        borderColor: "#444",
        borderRadius: 8,
        padding: 10,
    },

    botao: {
        backgroundColor: "#123F66",
        marginTop: 20,
        paddingVertical: 12,
        borderRadius: 5,
        alignItems: "center",

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,

        elevation: 4,
    },

    textoBotao: {
        color: "#FFF",
        fontSize: 24,
        fontWeight: "bold",
    },

    cancelar: {
        marginTop: 25,
        textAlign: "center",
        color: "#1E3FA8",
        fontSize: 20,
        textDecorationLine: "underline",
    },
});