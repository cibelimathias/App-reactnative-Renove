import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importando ícones do Ionicons

export default function Info1({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Informações Especiais</Text>
            <Text style={styles.description}>
                Aproveite nossas ofertas especiais de frete! Para os clientes nas regiões sul e sudeste do Brasil, oferecemos frete grátis. É nossa forma de agradecer pela sua preferência e lealdade.
            </Text>
            <Text style={styles.description}>
                Para as demais regiões do país, temos um valor fixo de frete de apenas R$ 15,00. Assim, você pode comprar com tranquilidade, sabendo que o custo de envio é acessível e previsível.
            </Text>
            <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
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
