import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function About() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/renovelogo.png')} style={styles.logo} />
            <View style={styles.textContainer}>
                <Text style={[styles.title, { color: '#EC8C94' }]}>Renove: Seu Brechó Online</Text>
                <Text style={styles.description}>Descubra um universo de moda sustentável e autêntica. Renove é mais do que um brechó online - é uma comunidade apaixonada por estilo e consciente do meio ambiente.</Text>
                <Text style={[styles.subTitle, { color: '#EC8C94' }]}>Por que escolher Renove?</Text>
                <Text style={styles.subDescription}>- Peças únicas e estilosas selecionadas com cuidado.</Text>
                <Text style={styles.subDescription}>- Experiência de compra e venda intuitiva e conveniente.</Text>
                <Text style={styles.subDescription}>- Contribua para um estilo de vida mais sustentável e consciente.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FBE5E7',
        paddingHorizontal: 20,
    },
    textContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        marginTop: 0, // Espaço reduzido
        elevation: 5,
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 10, // Espaço reduzido
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    subTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subDescription: {
        fontSize: 16,
        marginLeft: 10,
        marginBottom: 5,
    },
});
