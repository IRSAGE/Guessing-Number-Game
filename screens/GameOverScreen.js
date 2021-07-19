import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const GameOverScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>The Game Is Over</Text>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/success.png")} style={styles.image} />
      </View>
      <Text>Nunber Of Rounds: {props.roundsNumber}</Text>
      <Text>Nunber Was: {props.userNumber}</Text>
      <Button title="New Game" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameOverScreen;
