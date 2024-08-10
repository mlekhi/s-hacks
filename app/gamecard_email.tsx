import React from 'react';
import { StyleSheet, View, Text, Card } from 'react-native';

interface GameCardProps {
  card: {
    description: string;
  };
}

const GameCard: React.FC<GameCardProps> = ({ card }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.description}>{card.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dddddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555555',
  },
});

export default GameCard;
