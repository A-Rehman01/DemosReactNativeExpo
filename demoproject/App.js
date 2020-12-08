import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  const [name, setName] = useState('AR')
  const [email, setEmail] = useState('ar@gmail.com')
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My first project yahooooo!!</Text>
      <Text style={styles.text}>Name:{name} {"\n"} Email:{email}</Text>
      <Text style={styles.text}>In Expo React Native</Text>
      <Button   title='Click' onPress={()=>Alert.alert('Happy')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: 'black',
    color: 'white',
    padding: 5,
    fontSize: 20,
  }
});
