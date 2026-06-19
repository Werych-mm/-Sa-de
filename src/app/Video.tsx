import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router"

const irHome = () => router.push("/Home");
const irForum = () => router.push("/Forum");
const irVideo = () => router.push("/Video");
const irChat= () => router.push("/Chat");
// const irPerfil = () => router.push("/Perfil");

export default function Videos() {
  return (
    <View style={styles.container}>

        <View style={styles.header}>
            <Text style={styles.logo}>+Saúde </Text>

            <Image source={require("@/images/Folha.png")} style={styles.folha} />
                <View style={styles.lupa}>
                   <Ionicons name= "search-outline" size={28} color="white" />
                </View>
        </View> 

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

            <View style={styles.menu}>
                <TouchableOpacity onPress={irHome}>
                    <Ionicons name="home-outline" size={28} color="white" />
                </TouchableOpacity>
                                
                <TouchableOpacity onPress={irForum}>
                    <Ionicons name="document-text-outline" size={28} color="white" />
                </TouchableOpacity>
                                
                <TouchableOpacity onPress={irVideo}>
                    <Ionicons name="play-circle-outline" size={35} color="#2B4F68" />
                </TouchableOpacity>
                                
                <TouchableOpacity onPress={irChat}>
                    <Ionicons name="chatbubble-outline" size={28} color="white" />
                </TouchableOpacity>

                <Ionicons name="person-outline" size={28} color="white" />
            </View>
    </View>     
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#F5F5F5",
    },

    header: {
        backgroundColor: "#A8CBD8",
        paddingVertical: 20,
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",  
    },

    lupa: {
       position: "absolute",
       top: 25,
       right: 20,
    },

    logo: {
        flexDirection: "row",
        alignItems: "center",
        fontSize: 28,
        fontWeight: "bold",
        color: "white",
    },

    folha: {
        width: 25,
        height: 25,
        marginLeft: 3,
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

    menu: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 15,
       backgroundColor: "#A8CBD8",
    },
});