import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Feed from '../screens/Feed';
import About from '../screens/About';
import Blog from "../screens/Blog";
import Info1 from '../screens/Info1';
import Info2 from '../screens/Info2';

const TabBottom = createBottomTabNavigator();

function TabBottomRoutes() {
  return (
    <TabBottom.Navigator
      initialRouteName="Produtos"
      screenOptions={{
        tabBarActiveTintColor: "#EC8C94", // Cor quando selecionado
        tabBarInactiveTintColor: "#888", // Cor quando não selecionado
      }}
    >

      <TabBottom.Screen
        name="Produtos"
        component={Home}
        options={{
          tabBarLabel: "Produtos",
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            focused ? <Ionicons name='shirt' size={size} color={color} /> : <Ionicons name='shirt-outline' size={size} color={color} />
          ),
        }}
      />

      <TabBottom.Screen
        name="Categorias"
        component={Feed}
        options={{
          tabBarLabel: "Categorias",
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            focused ? <Ionicons name='pricetag' size={size} color={color} /> : <Ionicons name='pricetag-outline' size={size} color={color} />
          ),
        }}
      />


      <TabBottom.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: "Sobre",
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            focused ? <Ionicons name='information-circle' size={size} color={color} /> : <Ionicons name='information-circle-outline' size={size} color={color} />
          ),
        }}
      />
    </TabBottom.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: "#EC8C94", // Cor quando selecionado no drawer
        drawerInactiveTintColor: "#888", // Cor quando não selecionado no drawer
      }}
    >
      <Drawer.Screen
        name='Início'
        component={TabBottomRoutes}
        options={{
          drawerLabel: 'Início',
          drawerIcon: ({ size, color }) => (
            <Ionicons
              size={size}
              color={color}
              name='home' />
          )
        }} />
      <Drawer.Screen
        name='Informações'
        component={StackRoutes}
        options={{
          drawerLabel: 'Informações',
          drawerIcon: ({ size, color }) => (
            <Ionicons
              size={size}
              color={color}
              name='archive' />
          )
        }} />
    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='Blog'
        component={Blog} />
      <Stack.Screen
        name='Info1'
        component={Info1} />
      <Stack.Screen
        name='Info2'
        component={Info2} />
    </Stack.Navigator>
  );
}
