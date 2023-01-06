import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

function App(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageStackStack}>
        <View style={styles.imageStack}>
          <Image
            source={require("C:\Users\LENOVO\PABelajarInggris\assets\awan2.png")}
            resizeMode="contain"
            style={styles.image}
            ></Image>
             <Image
            source={require("C:\Users\LENOVO\PABelajarInggris\assets\awan2.png")}
            resizeMode="contain"
            style={styles.image1}
            ></Image>
            <TouchableOpacity
            onPress={() => props.navigation.navigate("Dashboard")}
            style={styles.button}
            >
              <Text style={styles.loremIpsum}>
                let&#39;s learn and {"\n"}play
              </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.image2Stack}>
          <Image
          source={require("C:\Users\LENOVO\PABelajarInggris\assets\pohon.png")}
          resizeMode="contain"
          style={styles.image2}
          ></Image>
          <Image
          source={require("C:\Users\LENOVO\PABelajarInggris\assets\jerapah.png")}
          resizeMode="contain"
          style={styles.image3}
          ></Image>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(194,213,228,1)"
  },
  image: {
    top: 14,
    left: 212,
    width: 276,
    height: 239,
    position: "absolute",
    transform: [
      {
        rotate: "-2.00deg"
      }
    ]
  },
  image1: {
    top: 124,
    left: 8,
    width: 244,
    height: 224,
    position: "absolute"
  },
  button: {
    top: 0,
    left: 0,
    width: 375,
    height: 812,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.3)"
  },
  loremIpsum: {
    fontFamily: "mochiy-pop-p-one-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    textAlign: "center",
    marginTop: 349,
    marginLeft: 9
  },
  imageStack: {
    top: 0,
    left: 0,
    width: 488,
    height: 812,
    position: "absolute"
  },
  image2: {
    top: 0,
    left: 83,
    width: 253,
    height: 278,
    position: "absolute"
  },
  image3: {
    top: 89,
    left: 0,
    width: 183,
    height: 198,
    position: "absolute"
  },
  image2Stack: {
    top: 453,
    left: 15,
    width: 336,
    height: 287,
    position: "absolute"
  },
  imageStackStack: {
    width: 488,
    height: 812,
    marginTop: -9
  }
});

export default App;