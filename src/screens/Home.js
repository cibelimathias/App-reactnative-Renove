import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

export default function Home() {
    const productsData = [
        { id: 1, title: 'Coturno Salto', price: 'R$ 39,99', description: 'Coturno salto alto preto, usado poucas vezes.', image: require('../assets/bota.png') },
        { id: 2, title: 'Calça Skinny Rosa', price: 'R$ 29,99', description: 'Calça jeans rosa, tamanho 38, em bom estado.', image: require('../assets/calçarosa.png') },
        { id: 3, title: 'Camiseta Social Branca', price: 'R$ 56,00', description: 'Camiseta social branca, tamanho M, pouco usada.', image: require('../assets/camiseta.png') },
        { id: 4, title: 'Calça Jeans Strasse', price: 'R$ 54,00', description: 'Calça jeans azul escuro, tamanho 40, em ótimo estado.', image: require('../assets/jeans.png') },
        { id: 5, title: 'Mini Saia Jeans', price: 'R$ 29,99', description: 'Mini saia jeans azul, tamanho P, usada algumas vezes.', image: require('../assets/saiajeans.png') },
        { id: 6, title: 'Mini Saia Vermelha', price: 'R$ 25,00', description: 'Mini saia vermelha, tamanho PP, em perfeito estado.', image: require('../assets/saiavermelha.png') },
        { id: 7, title: 'Sandália Salto Rosa', price: 'R$ 69,99', description: 'Sandália salto alto rosa, tamanho 37, em bom estado.', image: require('../assets/salto.png') },
        { id: 8, title: 'Suéter Rosa', price: 'R$ 39,99', description: 'Suéter rosa, tamanho M, usado poucas vezes.', image: require('../assets/sueter.png')},
        { id: 9, title: 'Vestido Rosa', price: 'R$ 29,99', description: 'Vestido rosa, tamanho G, em excelente estado.', image: require('../assets/vestido.png') },
    ];

    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductPress = (item) => {
        setSelectedProduct(item);
    };

    const renderProductItem = ({ item }) => (
        <TouchableOpacity
            style={styles.productContainer}
            onPress={() => handleProductPress(item)}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productInfo}>
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={productsData}
                renderItem={renderProductItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.productList}
                centerContent={true}
            />
            {selectedProduct && (
                <View style={styles.modalContainer}>
                    <Image source={selectedProduct.image} style={styles.modalImage} />
                    <Text style={styles.modalTitle}>{selectedProduct.title}</Text>
                    <Text style={styles.modalPrice}>{selectedProduct.price}</Text>
                    <Text style={styles.modalDescription}>{selectedProduct.description}</Text>
                    <Text style={styles.modalUsed}>Produto usado</Text>
                    <TouchableOpacity style={styles.closeButton} onPress={() => setSelectedProduct(null)}>
                        <Text style={styles.closeButtonText}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBE5E7',
    },
    productList: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    productContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
        width:350
    },
    productImage: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    productInfo: {
        flex: 1,
        marginLeft: 10,
    },
    productTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    productPrice: {
        fontSize: 16,
        color: '#888',
    },
    modalContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalImage: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#FFF',
    },
    modalPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    modalDescription: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
        color: '#FFF',
    },
    modalUsed: {
        fontSize: 14,
        marginBottom: 10,
        textAlign: 'center',
        fontStyle: 'italic',
        color: '#FFF',
    },
    closeButton: {
        backgroundColor: '#EC8C94',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 20,
    },
    closeButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
    },
});
