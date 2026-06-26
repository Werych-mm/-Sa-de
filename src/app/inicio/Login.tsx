import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from "react-native";
import {useState} from 'react';
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const IrCadastro = () => router.push("/inicio/Cadastro")
const IrSenha = () => router.push("/inicio/Senha")

const adm = {
    email: "admin@gmail.com",
    senha: "1989"
}

export default function TelaLogin() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [showSenha, setShowSenha] = useState(false);

    function logar() {
        if (email === adm.email && senha === adm.senha) {
            router.push("/Principal/Home");
        } else {
            alert("Email ou senha incorretos");
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.topo}>
                <Text style={styles.logo}>+Saúde</Text>
                <Image source={require("@/images/Folha.png")} />
            </View>

            <View style={styles.card}>

                <Text style={styles.label}>Nome de usuário ou e-mail:</Text>
                <TextInput style={styles.input} value={email} onChangeText={setEmail}/>

                <Text style={styles.label}>Senha:</Text>

                <View style={styles.inputSenha}>
                    <TextInput style={styles.inputFlex} secureTextEntry={!showSenha} value={senha} onChangeText={setSenha}/>

                    <TouchableOpacity onPress={() => setShowSenha(!showSenha)}>
                        <Ionicons name={showSenha ? "eye" : "eye-off-outline"} size={22} color="#444"/>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={IrSenha}>
                    <Text style={styles.esqueceuSenha}> Esqueceu a senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={logar} style={styles.botaoEntrar}>
                    <Text style={styles.textoBotao}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={IrCadastro}>
                    <Text style={styles.cadastro}> Cadastre-se</Text>
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
        marginBottom: 25,
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
        minHeight: 400,
    },

    label: {
        fontSize: 18,
        fontWeight: "600",
        color: "#666",
        marginBottom: 8,
        marginTop: 10,
    },

    input: {
        borderWidth: 1,
        borderColor: "#444",
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    },

    inputSenha: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#444",
        borderRadius: 8,
        paddingHorizontal: 10,
    },

    inputFlex: {
        flex: 1,
        paddingVertical: 10,
    },

    esqueceuSenha: {
        textAlign: "center",
        color: "#1E4BC6",
        fontSize: 18,
        marginTop: 30,
        textDecorationLine: "underline",
    },

    botaoEntrar: {
        backgroundColor: "#123F66",
        width: "55%",
        alignSelf: "center",
        paddingVertical: 12,
        borderRadius: 8,
        marginTop: 30,
    },

    textoBotao: {
        color: "#FFF",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },

    cadastro: {
        textAlign: "center",
        marginTop: 80,
        fontSize: 22,
        fontWeight: "bold",
        color: "#666",
    },
});