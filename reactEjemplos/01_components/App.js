import React,{useState} from 'react';
import { StyleSheet, Text, View, ImagePickerIOS, Image, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const saludo = () => {Alert.alert("Alerta")};
  const [name, setName] = useState("");
  return (
    /*<View style={styles.container}>
      <View style={styles.boxbox}>
        <View style={styles.box1}></View>
        <View style={styles.box3}></View> 
      </View>
      <View style={styles.boxbox}>
        <View style={styles.box2}></View>
        <View style={styles.box4}></View>  
      </View>      
    </View>*/
    <View style={styles.container}>
      <Text>{name}</Text>
      <Image style={styles.image} source={require('./assets/login.png')}></Image>
      <TextInput style={styles.input} onChangeText={(text) => setName(text)}></TextInput>
      <Button title="Start" onPress={saludo}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',    
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100
  },
  input: {
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    width: 300,
    textAlign: 'center',
    margin: 10
  },
  text: {
    color: '#ff1744'
  },
  boxbox: {
    flex: 1,
    flexDirection: 'row'
  },
  box1: {
    flex: 1,backgroundColor: '#ffc107',
    flexDirection: 'row'
  },
  box2: {
    flex: 1,
    backgroundColor: '#0d47a1',
    flexDirection: 'row'
  },
  box3: {
    flex: 1,
    backgroundColor: '#d50000',
    flexDirection: 'column'
  },
  box4: {
    flex: 1,
    backgroundColor: '#445626',
    flexDirection: 'column'
  }

});
