import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

interface FooterProps {
    telaAtual: "home" | "forum" | "video" | "chat" | "perfil";
}

export default function Footer({ telaAtual }: FooterProps) {
  return (
    <View style={styles.menu}>
      <TouchableOpacity onPress={() => router.push("/Principal/Home")}>
        <Ionicons
          name="home-outline"
          size={28}
          color={telaAtual === "home" ? "#2B4F68" : "white"}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/Principal/Forum")}>
        <Ionicons
          name="document-text-outline"
          size={28}
          color={telaAtual === "forum" ? "#2B4F68" : "white"}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/Principal/Video")}>
        <Ionicons
          name="play-circle-outline"
          size={35}
          color={telaAtual === "video" ? "#2B4F68" : "white"}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/Principal/Chat")}>
        <Ionicons
          name="chatbubble-outline"
          size={28}
          color={telaAtual === "chat" ? "#2B4F68" : "white"}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/Principal/Perfil")}>
          <Ionicons 
          name="person-outline" 
          size={28} 
          color={telaAtual === "perfil"  ? "#2B4F68" : "white" }
          />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
    menu: {
        height: 65,
        backgroundColor: "#A8CBD8",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
});