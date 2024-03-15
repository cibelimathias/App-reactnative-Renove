import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importando ícones do Ionicons

export default function Info2({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Aviso de Recesso</Text>
            <Text style={styles.description}>
                Prezados clientes, gostaríamos de informar que nossa loja estará em recesso do dia 15 de dezembro até 5 de janeiro. Durante este período, não estaremos enviando nenhum produto.
            </Text>
            <Text style={styles.description}>
                As operações normais serão retomadas a partir de 6 de janeiro. Agradecemos pela sua compreensão e paciência durante este período. Qualquer dúvida, não hesite em entrar em contato conosco.
            </Text>
            <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="white" />
            </Pressable>
            <View style={styles.decorationContainer}>
                <View style={styles.decorativeLine} />
                <Ionicons name="heart-circle-outline" size={24} color="#EC8C94" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#FBE5E7',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#EC8C94', // Cor do título
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        marginBottom: 15,
        textAlign: 'center',

    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        backgroundColor: '#EC8C94',
        borderRadius: 10,
        marginTop: 20,
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    backButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        backgroundColor: '#EC8C94',
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    decorationContainer: {
        alignItems: 'center',
    },
    decorativeLine: {
        width: '80%',
        height: 1,
        backgroundColor: '#EC8C94',
        marginVertical: 20,
    },
});
