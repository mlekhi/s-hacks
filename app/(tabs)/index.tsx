import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.text}>Swipe Left on Frauds. {'\n'}Swipe Right for Safe.</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D72B30',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,  // Increased size
    height: 300,  // Increased size
    marginBottom: 50,
  },
  text: {
    color: '#fff',
    fontSize: 24,  // Increased size
    fontWeight: '600',  // Made text bold
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#D72B30',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
