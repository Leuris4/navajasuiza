import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import GenderByName from "../pages/GenderByName";
import AgeByName from "../pages/AgeByName";
import Clima from '../pages/Clima';
import Universities from "../pages/Universities";
import AcercaDe from "../pages/AcercaDe";
import Inicio from "../pages/Inicio";

const Menu = createDrawerNavigator();

export default function MainStack() {
  return (
    <NavigationContainer>
        <Menu.Navigator>
            <Menu.Screen 
                name="Inicio" 
                component={Inicio}
                options={{
                  headerShown: false
                }}
                />        
            <Menu.Screen 
                name="Adivinar el genero" 
                component={GenderByName}
                />        
            <Menu.Screen 
                name="Adivinar la edad" 
                component={AgeByName} />        
            <Menu.Screen 
                name="Ver el clima" 
                component={Clima} />        
            <Menu.Screen 
                name="Generar universidades" 
                component={Universities} />        
            <Menu.Screen 
                name="Acerca de" 
                component={AcercaDe} />        
        </Menu.Navigator>
    </NavigationContainer>
  );
}
