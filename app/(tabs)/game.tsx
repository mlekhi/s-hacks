import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import axios from 'axios';
import GameCard from '../gamecard_email';

const API_KEY = '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'; // Store securely in environment variables

const prompts = [
  'Create a single scenario for a fraud detection game where a scammer is emailing you. Each scenario should include a title, description, and correct swipe direction ("left" or "right"). Format as JSON.',
  'Create a single scenario for a fraud detection game where a scammer is calling you. The scenario should include a title, description, and the correct swipe direction ("left" or "right"). Provide the response in JSON format.'
];

export const fetchGameData = async () => {
  try {
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo', // Using the chat model
        messages: [
          { role: 'system', content: 'You are a game scenario generator.' },
          { role: 'user', content: randomPrompt }
        ],
        max_tokens: 150,
        temperature: 0.7,
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const content = response.data.choices?.[0]?.message?.content;
    console.log(content);
    if (content) {
      try {
        const gameData = JSON.parse(content);
        console.log('Parsed game data:', gameData);
        return gameData;
      } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
        return [];
      }
    } else {
      console.error('Unexpected API response format:', response.data);
      return [];
    }
  } catch (error) {
    console.error('Error fetching game data:', error);
    console.error('Status Code:', error.response.status);
    console.error('Headers:', error.response.headers);
    console.error('Data:', error.response.data);
    return [];
  }
};

const Game = () => {
  const [gameData, setGameData] = useState([]);
  const [points, setPoints] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10); // 60 seconds for the timer

  useEffect(() => {
    const getGameData = async () => {
      const data = await fetchGameData();
      setGameData(data);
    };
    getGameData();
  }, []);
useEffect(() => {
  if (timeLeft <= 0) {
    // Add the "Time Up" card when the timer runs out
    setGameData(prevData => [
      ...prevData,
      {
        title: 'Time Up!',
        description: 'The game has ended. Thank you for playing!',
        correct: null
      }
    ]);
  } else {
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }
}, [timeLeft]);

  const handleSwipe = (cardIndex: number, direction: string) => {
    const card = gameData[cardIndex];
    if (card.correct === direction) {
      setPoints((prevPoints) => prevPoints + 10); // Award 10 points for correct answer
    }
    console.log(`Swiped card at index ${cardIndex}, Direction: ${direction}`);
  };

  console.log('Rendering game data:', gameData); // Debugging line

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>Time Left: {timeLeft}s</Text>
      <Text style={styles.points}>Points: {points}</Text>
      {gameData.length > 0? (
        <Swiper
          cards={gameData}
          renderCard={(card) => <GameCard card={card} />}
          onSwipedLeft={(cardIndex) => handleSwipe(cardIndex, 'left')}
          onSwipedRight={(cardIndex) => handleSwipe(cardIndex, 'right')}
          stackSize={3}
          cardIndex={0}
          backgroundColor={'#f0f0f0'}
          verticalSwipe={false}
        />
      ) : (
        <Text>Loading game data...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  timer: {
    position: 'absolute',
    top: 40,
    right: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff0000',
    zIndex: 1, // Ensure it appears above other components
  },
  points: {
    position: 'absolute',
    top: 40,
    left: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    zIndex: 1, // Ensure it appears above other components
  },
});

export default Game;
