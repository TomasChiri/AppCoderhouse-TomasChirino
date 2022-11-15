import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native';
import React from 'react';
import Card from '../components/Card';
import bat from "../assets/images/batman.jpg";
import top from "../assets/images/topgun.jpg";
import jur from "../assets/images/jurassic.jpg";

const StartScreen = ({onStart, font}) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={{...styles.title, fontFamily:font}}>Elige la pelicula que quieras ver</Text>
        <Card img={bat} title={"Batman"} onStart={onStart}></Card>
        <Card img={top} title={"Top Gun Maverick"} onStart={onStart}></Card>
        <Card img={jur} title={"Jurassic World Dominion"} onStart={onStart}></Card>
      </View>
    </ScrollView>
  )
}

export default StartScreen

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
      marginBottom:20,
    },
})