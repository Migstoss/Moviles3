import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.boxbox}>
        <View style={styles.box1}></View>
        <View style={styles.box3}></View> 
      </View>
      <View style={styles.boxbox}>
        <View style={styles.box2}></View>
        <View style={styles.box4}></View>  
      </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
  text: {
    color: '#ff1744'
  },
  boxbox: {
    flex: 1,
    flexDirection: 'row'
  },
  box1: {
    flex: 1,
    backgroundColor: '#ffc107',
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
