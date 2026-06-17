import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function TelaHome () {
    return(

    <View style={styles.container}>

        <View style={styles.header}>
            <Text style={styles.nome}>+Saúde</Text>
            <Image source={require("@/images/Folha.png")}/>
        </View>

        <Ionicons name="search-outline" size={28} color="white" />

        <View style={styles.fundoB}>
            <View style={styles.card1}>
                <Ionicons name ="notifications-outline" size={28} color="black" />
                <Text>Agendamento de conversa com o médico Rubens Junior feito com sucesso!</Text>
            </View>

            <View style={styles.card1}>
                <Ionicons name ="notifications-outline" size={28} color="black" />
                <Text>O resultado do seu exame saiu! Verifique seu chat.</Text>
            </View>
            
        </View>

        <View style={styles.menu}>
            <Ionicons name="home-outline" size={28} color="#2B4F68" />
            <Ionicons name="document-text-outline" size={28} color="white" />
            <Ionicons name="play-circle-outline" size={35} color="white" />
            <Ionicons name="chatbubble-outline" size={28} color="white" />
            <Ionicons name="person-outline" size={28} color="white" />
        </View>

    </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#8EBCCD",
        justifyContent: "center",
        alignItems: "center",
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },

    nome: {
        fontSize: 32,
        color: "#fff",
        fontWeight: "bold",
    },

    fundoB: {
        backgroundColor: "#F5F5F5",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
    },

    card1: {
        backgroundColor: "#E2E2E2",
        color: "#4E4E4E",
        alignItems: "center",
        justifyContent: "center",
        padding: "5%",
        width: "90%",
        borderRadius: "5px",
        margin: 15
    },

    menu: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 15,
        borderTopWidth: 1,
        borderColor: "ddd",
    },
});
