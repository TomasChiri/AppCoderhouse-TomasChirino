import React from 'react';
import { StyleSheet, View, Dimensions, Image, Pressable, Text } from 'react-native';
import colors from '../constants/colors';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Card = ({img, title, onStart, newStyles}) => {
  return (
    <View style={{...styles.inputContainer, ...newStyles}}>
        <Image source={img} style={styles.image}/>
        <Text style={styles.title}>{title}</Text>
        <Pressable style={styles.button} onPress={() => onStart(title)}>
            <Text style={{color:"white"}}>Comprar</Text>
        </Pressable>
    </View>
  )
}

export default Card;

const styles = StyleSheet.create({
    inputContainer: {
        width: width / 1.2,
        maxWidth: 400,
        minWidth: 100,
        height: height / 2,
        padding: 20,
        marginTop: 20,
        marginBottom: 20,
        alignItems: "center",
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.5,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: colors.white,
    },
    image: {
        height: "75%",
        width: "90%",
        resizeMode: "contain"
    },
    title: {
        fontSize: 20,
        marginTop: 10
    },
    button: {
        marginTop: 20,
        backgroundColor: "grey",
        height: 35,
        width: "40%",
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 10,
    }
})