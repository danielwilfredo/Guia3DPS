import React from 'react';
import {
    View,
    Text,StyleSheet,StatusBar
  } from 'react-native';
  
const Cars = () => {
    return (  
        <View >
            <Text style={styles.textos}>Universidad Don Bosco</Text>
            <Text style={styles.textos}>Diseño y Programación de Software Multiplataforma</Text>
            <Text style={styles.textos}>Daniel Wilfredo Granados Hernández</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, marginTop: 5},
    textos: {
      color: '#ffffff',
      padding: 2,
      marginVertical: 4,
      marginHorizontal: 8,
      textAlign:'center'
    }
  });
 
export default Cars;