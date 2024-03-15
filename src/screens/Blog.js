import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Blog({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/renovelogo.png')} style={styles.logo} />
                <Text style={styles.title}>Informações</Text>
            </View>
            <View style={styles.content}>
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate('Info1')}>
                    <Text style={styles.buttonText}>Saiba mais sobre os Fretes</Text>
                </Pressable>
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate('Info2')}>
                    <Text style={styles.buttonText}>Recesso de Fim de Ano</Text>
                </Pressable>
            </View>
            <View style={styles.decorativeLine} />
            <Ionicons name="heart-circle-outline" size={24} color="#EC8C94" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBE5E7',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        marginRight: 10,
        height: 50,
        width: 100,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#EC8C94',
    },
    content: {
        alignItems: 'center',
        marginBottom: 20,
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        backgroundColor: '#EC8C94',
        borderRadius: 20,
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
    decorativeLine: {
        width: '80%',
        height: 1,
        backgroundColor: '#EC8C94',
        marginVertical: 20,
    },
});
