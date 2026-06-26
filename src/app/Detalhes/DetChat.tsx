import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../../components/header';
import Footer from '../../components/footer';

export default function TelaDetChat() {
    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.chatHeader}>
                <Ionicons
                name="person-circle-outline"
                size={50}
                color="#CFCFCF"
                />

                <Text style={styles.nome}>Dra. Samira</Text>
            </View>

            <ScrollView style={styles.mensagens}>
                <View style={styles.msgRecebida}>
                    <Text>
                        Estava pensando em agendar uma consulta mas não sei se poderei ir,
                        pois eu talvez irei viajar.
                    </Text>
                </View>

                <View style={styles.msgEnviada}>
                    <Text>
                    Bom dia! Tudo bem? Podemos agendar e se acharar que não é possível!
                    </Text>
                </View>

                <View style={styles.msgRecebida}>
                    <Text>
                    Ah, ótimo! Qual o melhor horário pra você me marcar?
                    </Text>
                </View>

                <View style={styles.msgEnviada}>
                    <Text>
                    Pode vir na quarta, às 9h! Obrigada pela preferência!
                    </Text>
                </View>

                <View style={styles.msgRecebida}>
                    <Text>
                    Qualquer coisa entro em contato para avisar e irei, qual horário
                    inicia as consultas?
                    </Text>
                </View>

                <View style={styles.msgEnviada}>
                    <Text>
                    Entraremos em contato para confirmar. Nossa atendimento começa às
                    8:30min.
                    </Text>
                </View>

                <View style={styles.msgRecebida}>
                    <Text>Ok, obrigada e bom trabalho!</Text>
                </View>

                <View style={styles.msgEnviada}>
                    <Text>Disponha!</Text>
                </View>
            </ScrollView>

            <View style={styles.inputContainer}>
                <TextInput
                style={styles.input}
                placeholder="Digite sua mensagem..."
                />

                <TouchableOpacity style={styles.botaoEnviar}>
                    <Ionicons name="send" size={20} color="#FFF" />
                </TouchableOpacity>
            </View>

        <Footer telaAtual="chat" />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },

    chatHeader: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#E5E5E5",
    },

    nome: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: "600",
        color: "#555",
    },

    mensagens: {
        flex: 1,
        padding: 10,
    },

    msgRecebida: {
        alignSelf: "flex-start",
        backgroundColor: "#ECECEC",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        maxWidth: "80%",
    },

    msgEnviada: {
        alignSelf: "flex-end",
        backgroundColor: "#A8D4E5",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        maxWidth: "80%",
    },

    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: "#DDD",
        backgroundColor: "#FFF",
    },

    input: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        borderRadius: 20,
        paddingHorizontal: 15,
        height: 45,
    },

    botaoEnviar: {
        marginLeft: 10,
        backgroundColor: "#8FC6D8",
        width: 45,
        height: 45,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
});