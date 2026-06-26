import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TelaCadastro() {
    return (
    <View style={styles.container}>

        <View style={styles.topo}>
            <Text style={styles.logo}>+Saúde</Text>
            <Image source={require("@/images/Folha.png")}/>
        </View>

      
        <View style={styles.card}>

            <Text style={styles.label}>Nome:</Text>
            <TextInput style={styles.input} />

            <Text style={styles.label}>Email:</Text>
            <TextInput style={styles.input} />

            <Text style={styles.label}>CPF:</Text>
            <TextInput style={styles.input} />

            <Text style={styles.label}>Senha:</Text>

            <View style={styles.inputSenha}>
                <TextInput style={styles.inputFlex} secureTextEntry />
                <Ionicons name="eye-off-outline" size={20} color="#555" />
            </View>

            <Text style={styles.label}>Confirmar senha:</Text>
            <View style={styles.inputSenha}>
                <TextInput style={styles.inputFlex} secureTextEntry />
                <Ionicons name="eye-off-outline" size={20} color="#555" />
            </View>

            <Text style={styles.label}>Data nascimento:</Text>
            <TextInput style={styles.input} placeholder="dd/mm/aaaa" />

            <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Cadastrar</Text>
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
        paddingTop: 60,
    },

    topo: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },

    logo: {
        fontSize: 65,
        fontWeight: "bold",
        color: "#fff",
        marginRight: 8,
    },

    card: {
        width: "90%",
        backgroundColor: "#fff",
        borderRadius: 25,
        padding: 20,
    },

    label: {
        marginTop: 10,
        marginBottom: 5,
        fontWeight: "600",
        color: "#555",
    },

    input: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: "black" 
    },

    inputSenha: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "black" 
    },

    inputFlex: {
        flex: 1,
        paddingVertical: 10,
    },

    botao: {
        marginTop: 20,
        backgroundColor: "#163E5C",
        padding: 12,
        borderRadius: 10,
        alignItems: "center",
    },

    textoBotao: {
        color: "#fff",
        fontWeight: "bold",
    },
});