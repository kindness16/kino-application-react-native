import * as React from 'react';
import { View, Text, Button,StyleSheet,TextInput, Image, FlatList } from 'react-native';
import More from './More'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Animatable from 'react-native-animatable';
import {TextAnimationFadeIn, TextAnimationZoom, TextAnimationRain, TextAnimationSlideDown, TextAnimationSlideUp, TextAnimationSlideLeft, TextAnimationSlideRight, TextAnimationShake, TextAnimationReverse, TextAnimationDeZoom} from 'react-native-text-effects';
const Stack = createStackNavigator();

export default function Search({navigation}) {
    const [value, onChangeText] = React.useState('');
    const [data, setData] = React.useState('')
    async function go(){
        let resp = await fetch("http://omdbapi.com/?s="+value+"&apikey=499c59f2")
        let data = await resp.json()
        setData(data.Search)
    } 
  return (
    <View style={styles.container}>
       <TextInput
            style={{ height: 50, fontSize: 20, borderColor: 'green', borderWidth: 2, borderRadius: 40, marginTop: 10, paddingLeft: 20, color:"#fff" }}
            onChangeText={text => onChangeText(text)}
            value={value}
        />
       <Button style={styles.btnn} title="Search"
       color="green"
         onPress={() => go()}
       />
       <View style={styles.container}>
        <FlatList
            data={data}
            renderItem={
                ({item}) => 
            <View style={styles.containers}>
                <Image style={styles.img} source={{uri:item.Poster}}/>
                <Animatable.Text animation="pulse" iterationCount="infinite" easing="ease-out" style={{ textAlign: 'center', fontSize: 40, color: 'white' }}>{item.Title}</Animatable.Text>
                <Button title="More Information"
                  onPress={() => navigation.navigate('More', {id:item.imdbID})}
                  color="green"
                />
            </View>
          }
        />
       </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      color:'#fff',
    },
    containers: {
      padding: 10,
      flex: 1,
      backgroundColor: '#000',
      color:'#fff',
      alignItems:'center'
    },
    txt:{
      fontSize:30,
      textAlign:'center',
      color:"#fff",
      marginBottom:15,
    },
    img:{
        width:250,
        height:280
    },
    btnn:{
      color: 'red'
    }
  });