import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const EndScreen = ({title, font}) => {
  return (
    <View style={styles.screen}>
      <Text style={{...styles.title, fontFamily:font}}>Compraste 1 entrada para {title}</Text>
    </View>
  )
}

export default EndScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        marginTop: 10,
      },
      title: {
        color: "white",
        fontSize: 25,
        marginBottom:20
      },
})