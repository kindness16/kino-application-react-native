import * as React from 'react';
import { View, Text, Button,StyleSheet,TextInput, Image, FlatList } from 'react-native';
import More from './More'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Animatable from 'react-native-animatable';
const Stack = createStackNavigator();
export default function Search({navigation, route}) {
    const [datas, setData] = React.useState('')
    
    React.useEffect(() => {
        go()
      }, [route.params?.id]);
    
    async function go(){
        let val = route.params?.id
        let resp = await fetch("http://omdbapi.com/?i="+val+"&apikey=499c59f2")
        let data = await resp.json()
        setData(data)
    } 
  return (
    <View style={styles.container}>
        {datas?
             <View style={styles.container}> 
                <Text style={{ textAlign: 'center', fontSize: 30, color: 'white' }}>{datas.Title}</Text>
                <Text style={{ textAlign: 'center', fontSize: 15, color: 'white' }}><Text style={{color: 'green'}}>Type:</Text> {datas.Type}</Text>                
                <Text style={{ textAlign: 'center', fontSize: 15, color: 'white' }}><Text style={{color: 'green'}}>Actors:</Text>  {datas.Actors}</Text>     
                <Text style={{ textAlign: 'center', fontSize: 15, color: 'white' }}><Text style={{color: 'green'}}>Release:</Text>  {datas.Released}</Text> 
                <Text style={{ textAlign: 'center', fontSize: 15, color: 'white' }}><Text style={{color: 'green'}}>Runtime:</Text> {datas.Runtime}</Text>   
                <Text style={{ textAlign: 'center', fontSize: 15, color: 'white' }}><Text style={{color: 'green'}}>Genre:</Text> {datas.Genre}</Text>   
                <Text style={{ textAlign: 'center', fontSize: 15, color: 'white' }}><Text style={{color: 'green'}}>Writer:</Text> {datas.Writer}</Text> 
                <Text style={{ textAlign: 'center', fontSize: 15, color: 'white' }}><Text style={{color: 'green'}}>Language:</Text> {datas.Language}</Text>   
                <Text style={{ textAlign: 'center', fontSize: 15, color: 'white' }}><Text style={{color: 'green'}}>Writer:</Text> {datas.Writer}</Text>   
                <Image style={styles.img} source={{uri:datas.Poster}}/>
            </View>
        :null}
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
      backgroundColor: 'black',
      color:'#000',
    },
    containers: {
      padding: 10,
      flex: 1,
      backgroundColor: '#fff',
      color:'#fff',
      alignItems:'center'
    },
    txt:{
      fontSize:30,
      textAlign:'center',
      color:"#ff0000",
      marginBottom:15,
    },
    img:{
        width:230,
        height:300
    },
    btnn:{
      color: 'red'
    }
  });