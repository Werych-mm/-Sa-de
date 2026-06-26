import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function TelaVideos() {
  return (
    <View style={styles.container}>

        <Header />

        <ScrollView>
            <View style={styles.card}>
                <View style={styles.capa}>
                    <Text>(capa do video) </Text>
                </View>

                <Text style={styles.titulo}> O que fazer quando você acaba pegando um vírus?</Text>

                <View style={styles.autorContainer}>
                    <Ionicons name="person-circle-outline" size={20} color="gray" />
                    <Text style={styles.autor}>Dr.Miguel</Text>
                </View>
            </View>    

        </ScrollView>

        <Footer telaAtual='video' />

    </View>     
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#F5F5F5",
    },

    card: {
        padding: 15, 
    },
    
    capa: {
        height: 180,
        backgroundColor: "#ddd",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },

    titulo: {
        color: "#5A5A5A",
        fontWeight: "600",
        fontSize: 16,
        marginTop: 10,
    },

    autorContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },

    autor: {
        color: "gray",
        marginLeft: 5, 
    },
});