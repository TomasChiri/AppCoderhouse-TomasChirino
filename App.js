import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import colors from './constants/colors';
import EndScreen from './screens/EndScreen';
import StartScreen from './screens/StartScreen';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    MerriweatherSans: require("./assets/fonts/MerriweatherSans-Regular.ttf"),
    MerriweatherSansBold: require("./assets/fonts/MerriweatherSans-Bold.ttf")
  })

  const [movieTitle, setMovieTitle] = useState("");

  const handleStartApp = (title) => {
    setMovieTitle(title);
  }

  let content = <StartScreen onStart={handleStartApp} font="MerriweatherSans"/>

  if(movieTitle != ""){
    content = <EndScreen title={movieTitle} font="MerriweatherSans"/>
  }

  if(!loaded){
    return null;
  }

  return (
    <View style={styles.container}>
      <Header title="Compra de entradas" newStyles={{fontFamily: "MerriweatherSansBold"}}/>
      {content}  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
