import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function Videos() {
  return (
    <View style={styles.container}>

        <View style={styles.header}>
            <Text style={styles.logo}>+Saúde </Text>
            <Image source={require("@/images/Folha.png")} />

            <Ionicons
            name= "search-outline"
            size={28}
            color="white"
            />
        </View>

        <ScrollView>
            <View style={styles.card}>
                <View style={styles.capa}>
                    <Text>(capa do video) </Text>
            </View>

            <Text style={styles.titulo}>
                O que fazer quando você acaba pegando um vírus?       
            </Text>

            <View style={styles.autorContainer}>
            <Ionicons
                name="person-circle-outline"
                size={20}
                color="gray"
                />
                <Text style={styles.autor}>Dr.Miguel</Text>
            </View>
            </View>    

            </ScrollView>

            <View style={styles.menu}>
            <Ionicons name="home-outline" size={28} color="white" />
            <Ionicons name="document-text-outline" size={28} color="white" />
            <Ionicons name="play-circle-outline" size={35} color="black" />
            <Ionicons name="chatbubble-outline" size={28} color="white" />
            <Ionicons name="person-outline" size={28} color="white" />
            </View>

       </View>     
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#fff",
    },

    header: {
        backgroundColor: "#8EBCCD",
        padding: 20,
        paddingHorizontal: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",  
    },

    logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
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
        fontSize: 20,
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
       backgroundColor: "#8EBCCD"
    },
});