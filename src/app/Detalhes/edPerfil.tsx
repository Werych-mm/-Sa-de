import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function EditarPerfil() {
    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.conteudo}>
                <View style={styles.card}>

                <Text style={styles.titulo}>Editar perfil:</Text>

                <Text style={styles.label}>Anexe sua nova foto</Text>

                <TouchableOpacity style={styles.botaoUpload}>
                    <Text style={styles.textoUpload}>Upload do arquivo ⤴</Text>
                </TouchableOpacity>

                <Text style={styles.label}>Digite seu novo nome:</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                />

                <Text style={styles.label}>Digite sua nova Bio</Text>
                <TextInput
                    style={styles.bio}
                    multiline
                    textAlignVertical="top"
                />

                <Text style={styles.label}>Digite suas especialidades:</Text>
                <TextInput
                    style={styles.input}
                />

                <TouchableOpacity style={styles.botaoSalvar}>
                    <Text style={styles.textoSalvar}>Salvar</Text>
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
        backgroundColor: "#FFF",
    },

    conteudo: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },

    card: {
        width: "95%",
        backgroundColor: "#ECECEC",
        borderRadius: 20,
        padding: 25,
        elevation: 2,
    },

    titulo: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#666",
        marginBottom: 20,
    },

    label: {
        fontSize: 15,
        color: "#666",
        marginBottom: 5,
        marginTop: 10,
    },

    botaoUpload: {
        backgroundColor: "#0B84F3",
        paddingVertical: 8,
        borderRadius: 2,
        alignItems: "center",
        marginBottom: 15,
    },

    textoUpload: {
        color: "#FFF",
        fontWeight: "bold",
    },

    input: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#BBB",
        borderRadius: 6,
        height: 40,
        paddingHorizontal: 10,
    },

    bio: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#BBB",
        borderRadius: 6,
        height: 90,
        padding: 10,
    },

    botaoSalvar: {
        alignSelf: "center",
        marginTop: 30,
        backgroundColor: "#0E3A63",
        paddingHorizontal: 35,
        paddingVertical: 12,
        borderRadius: 8,
    },

    textoSalvar: {
        color: "#FFF",
        fontSize: 26,
        fontWeight: "bold",
    },
});