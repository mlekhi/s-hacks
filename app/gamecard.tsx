import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

interface GameCardProps {
  card: {
    scamContact: string;  // Ensure the key matches your data structure
    scamSubject?: string; // Optional, can be empty
    scamText: string;
    answer: boolean;
    device: string;
    info: string;
  };
}

const GameCard: React.FC<GameCardProps> = ({ card }) => {
  const scamText = card['scam-text'] as string;
  const device = card.device as string;

  // Dynamically choose the image based on the device type
  if (device === 'text') {
    imageUri = 'https://i.imgur.com/EHqIgPE.png'; // Example URL for text messages
  } else if (device === 'call') {
    imageUri = 'https://i.imgur.com/WEMHsem.png'; // Replace with actual URL for calls
  } else {
    imageUri = 'https://i.imgur.com/1NFztJw.png'; // Default URL for email
  }
  return (
    <ImageBackground 
      source={{ uri: imageUri }}
      style={styles.card}
    >
      <View style={[styles.content, device === 'call' ? styles.callContent : device === 'text' ? styles.textContent : styles.emailContent]}>
        <Text style={[
          styles.title,
          device === 'call' ? styles.callText : 
          device === 'text' ? styles.textText : 
          styles.emailText
        ]}>
          {scamText}
        </Text>
      </View>
    </ImageBackground>
  );

};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#dddddd',
    backgroundColor: '#d92a11',
    borderRadius: 15,
  },
  textContent: {
    color: '#000000',
    position: 'absolute', 
    padding: 15,
    backgroundColor: '#D3D3D3',
    borderRadius: 15,
    width: 200,
    left: 60,
    top: 170
  },
  callContent: {
    color: '#000000',
    position: 'absolute', 
    width: 270,
    left: 45,
    top: 60
  },
  emailContent: {
    color: '#000000',
    position: 'absolute', 
    width: 250,
    left: 60,
    top: 215
  },
  callText: {
    fontSize: 22,
    fontWeight: '500',
  },
  textText: {
    fontSize: 16,
    fontWeight: '400',
  },
  emailText: {
    fontSize: 16,
    fontWeight: '400',
  }
});

export default GameCard;
