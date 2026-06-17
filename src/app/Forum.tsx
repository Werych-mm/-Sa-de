import {View, Text, TextInput, Image, StyleSheet} from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function TelaForum () {
    return(
        <View> {/* Tela*/} 
        
            <View style={styles.fundoA}> {/*fundo AZUL */}

                <View style={styles.Sauimg}> {/*// Saude + imagem*/}
                    <Text style={styles.Titulo}>+Saúde</Text>
                    <Image source={require("@/images/Folha.png")}/>
                </View>

                {/* Lupa*/}

            </View>

            <View> {/* Fundo branco*/}

                <View style={styles.fundoC}> {/*Fundo cinza*/}

                        <View> {/*Card*/}

                        <View> {/*foto e nome*/} 
                            <Image style={styles.imgfo} source={{uri: 'https://blog.ipog.edu.br/wp-content/uploads/2017/10/m%C3%A9dico.jpg'}}/>
                            <Text>Dra. Dandara</Text>
                        </View>

                        <View> {/*Titulo e explicação*/}
                            <Text>Como aliviar a dor de garganta?</Text>
                            <Text>Pra curar a dor de garganta, hidrate-se bastante, faça gargarejos com água...</Text>
                        </View>

                    </View>
                </View>

            </View>

            <View> {/*Icones debaixo*/}
                
            </View>

        </View>
    );
    
};

const styles = StyleSheet.create ({
    fundoA: {
        backgroundColor: "#8EBCCD",
    },

    Sauimg: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginLeft: 15
    },

    Titulo: {
        color: "#FFFFFF",
        fontSize: 40,
    },

    imgfo: {
        width: 40,
        height: 40
    },

    fundoC: {
        backgroundColor: "#F5F5F5",
    },
})