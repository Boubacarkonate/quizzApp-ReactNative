// Importation des modules nécessaires
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';  // Importation du gestionnaire de pile de navigation
import HomeScreen from './screens/HomeScreen';  // Écran d'accueil
import QuizSelectionScreen from './screens/QuizSelectionScreen';  // Écran de sélection de quiz
import QuizScreen from './screens/QuizScreen';  // Écran du quiz
import AllScoresScreen from './screens/AllScoresScreen';  // Écran de tous les scores
import ResultScreen from './screens/ResultScreen' ;  // Écran des résultats
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


// Création d'un nouvel objet Stack pour la navigation
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

// Définition du composant AppNavigator
const AppNavigator = () => {
  return (

    <Tab.Navigator initialRouteName="Home">  
    
    <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // tabBarLabel: 'Accueil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="QuizSelection" component={QuizSelectionScreen}  
      options={{ /* tabBarLabel: 'Accueil',*/ tabBarIcon: ({ color, size }) => (<Ionicons name="" size={size} color={color} />), }} 
      />
      <Tab.Screen name="Quiz" component={QuizScreen} 
            options={{ /* tabBarLabel: 'Accueil',*/ tabBarIcon: ({ color, size }) => (<Ionicons name="play-outline" size={size} color={color} />), }} 

      />

        <Tab.Screen name="Result" component={ResultScreen}
        options={{ /* tabBarLabel: 'Accueil',*/ tabBarIcon: ({ color, size }) => (<Ionicons name="ribbon-outline" size={size} color={color} />), }} 
        />
        <Tab.Screen name="AllScores" component={AllScoresScreen}
        options={{ /* tabBarLabel: 'Accueil',*/ tabBarIcon: ({ color, size }) => (<Ionicons name="" size={size} color={color} />), }} 
        />
    </Tab.Navigator>
  );
};

// Exportation du composant pour utilisation dans d'autres fichiers
export default AppNavigator;