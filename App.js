import React, { useRef, useEffect } from 'react';
import { View, ImageBackground, Image, Text, Button,StyleSheet, Animated} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Animatable from 'react-native-animatable';
import { BlurView, VibrancyView } from "@react-native-community/blur";
import Upload from 'react-native-background-upload'
import {TextAnimationFadeIn, TextAnimationZoom, TextAnimationRain, TextAnimationSlideDown, TextAnimationSlideUp, TextAnimationSlideLeft, TextAnimationSlideRight, TextAnimationShake, TextAnimationReverse, TextAnimationDeZoom} from 'react-native-text-effects';
import Search from './Search'
import More from './More'
function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
     <ImageBackground 
    source={{uri: 'https://yourdubaiguide.com/wp-content/uploads/2019/03/Novo-Cinemas-IMG-Worlds-of-Adventure-dubai.jpg'}}
    style={{width: 400, height: 250}}/>
      <TextAnimationSlideRight value={"SEARCH MOVIES"} delay={200} duration={1000} style={{color: 'white', fontSize: 20}}/>
      <Animatable.Text animation="pulse" easing="ease-out-circ" iterationCount="infinite" style={{ textAlign: 'center', fontSize: 130, color: 'red'}}>❤️</Animatable.Text>
       <Button title="Let's Go"
         onPress={() => navigation.navigate('Search')}
         color="#841584"
         style={{ fontSize: 40}}
       />
    </View>
  );
}
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Search" component={Search}/>
        <Stack.Screen name="More" component={More}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingBottom: 180,
    backgroundColor: 'black',
    height: 600,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default App;