import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';

// Mock de dados de produtos para cada categoria
const productsData = {
    'Parte de Cima': [
        
        
        { id: 3, title: 'Camiseta Social Branca', price: 'R$ 56,00', description: 'Camiseta social branca, tamanho M, pouco usada.', image: require('../assets/camiseta.png') },
        
        
        { id: 8, title: 'Suéter Rosa', price: 'R$ 39,99', description: 'Suéter rosa, tamanho M, usado poucas vezes.', image: require('../assets/sueter.png')},
        { id: 9, title: 'Vestido Rosa', price: 'R$ 29,99', description: 'Vestido rosa, tamanho G, em excelente estado.', image: require('../assets/vestido.png') },
    ],
    'Parte de Baixo': [{ id: 2, title: 'Calça Skinny Rosa', price: 'R$ 29,99', description: 'Calça jeans rosa, tamanho 38, em bom estado.', image: require('../assets/calçarosa.png') },
        { id: 4, title: 'Calça Jeans Strasse', price: 'R$ 54,00', description: 'Calça jeans azul escuro, tamanho 40, em ótimo estado.', image: require('../assets/jeans.png') },
        { id: 5, title: 'Mini Saia Jeans', price: 'R$ 29,99', description: 'Mini saia jeans azul, tamanho P, usada algumas vezes.', image: require('../assets/saiajeans.png') },
        { id: 6, title: 'Mini Saia Vermelha', price: 'R$ 25,00', description: 'Mini saia vermelha, tamanho PP, em perfeito estado.', image: require('../assets/saiavermelha.png') },
    ],
    'Calçados': [
       { id: 1, title: 'Coturno Salto', price: 'R$ 39,99', description: 'Coturno salto alto preto, usado poucas vezes.', image: require('../assets/bota.png') },
       { id: 7, title: 'Sandália Salto Rosa', price: 'R$ 69,99', description: 'Sandália salto alto rosa, tamanho 37, em bom estado.', image: require('../assets/salto.png') },
    ],
};

export default function Categories({ navigation }) {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryPress = (category) => {
        setSelectedCategory(category);
    };

    const renderProductItem = ({ item }) => (
        <TouchableOpacity style={styles.productContainer}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.categoriesContainer}>
                {Object.keys(productsData).map((category) => (
                    <TouchableOpacity
                        key={category}
                        style={[styles.categoryItem, selectedCategory === category && styles.selectedCategoryItem]}
                        onPress={() => handleCategoryPress(category)}>
                        <Text style={styles.categoryText}>{category}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            {selectedCategory && (
                <FlatList
                    data={productsData[selectedCategory]}
                    renderItem={renderProductItem}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.productList}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBE5E7',
        paddingHorizontal: 20,
    },
    categoriesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    categoryItem: {
        backgroundColor: '#FBE5E7',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    selectedCategoryItem: {
        backgroundColor: '#EC8C94',
    },
    categoryText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    productList: {
        paddingTop: 10,
    },
    productContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
    },
    productImage: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    productTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    productPrice: {
        fontSize: 14,
        color: '#888',
        marginLeft: 10,
    },
});
