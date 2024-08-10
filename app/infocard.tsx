import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

interface GameCardProps {
  card: {
    info?: string | null;
  };
}

const GameCard: React.FC<GameCardProps> = ({ card, isCorrectCard }) => {
  const info = card['info'] as string | "null";
  console.log('Scam info:', info);
  const cardStyle = isCorrectCard ? styles.correctCard : styles.incorrectCard;
  console.log('Is Correct Card:', isCorrectCard);

  return (
    <View style={styles.card}
    >
      <View style={styles.textContent}>
        <Text style={styles.text}>{info}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 15,
        shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 4 }, // Offset of the shadow
    shadowOpacity: 0.8, // Shadow opacity
    shadowRadius: 4, // Shadow blur radius

  },
  textContent: {
    padding: 40,
    borderRadius: 15,
  },
  text: {
    fontSize: 20,
  },
  correctCard: {
    backgroundColor: 'lightgreen',
  },
  incorrectCard: {
    backgroundColor: 'lightcoral',
  },
});

export default GameCard;
