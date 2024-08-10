import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          Objective:
        </ThemedText>
        <ThemedText>
          As a detective, your mission is to uncover fraud. Swipe left if you think it's a fraudulent scheme, or swipe right if you believe it's a legitimate offer. Trust your instincts and your training!
        </ThemedText>
      </ThemedView>

      <ThemedView>
        <ThemedText type="subtitle">
          Rules:
        </ThemedText>
        <ThemedText>
          1. <ThemedText type="defaultSemiBold">Swipe Decisions:</ThemedText> You’ll encounter various scenarios. Use your keen detective skills to determine if it’s a fraud or not.
          {"\n"}
          2. <ThemedText type="defaultSemiBold">Time Limit:</ThemedText> You have just 10 seconds to make each call. Act swiftly to avoid getting caught in the scammer’s web!
          {"\n"}
          3. <ThemedText type="defaultSemiBold">Scoring:</ThemedText> Earn points for accurate and quick judgments. The better your decisions, the higher your score on the fraud detection leaderboard!
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          Scene Points: Getting a Fresh Start
        </ThemedText>
        <ThemedText>
          As a top detective, staying sharp is crucial. To earn additional scene points, you need to maintain a fresh perspective by resetting your investigation environment. Here’s how you can do it:
          {"\n"}
          Earn Scene Points: Successfully executing this reset process not only refreshes your game environment but also awards you extra scene points. Use these points to track your progress and unlock special detective tools for your next investigation.
        </ThemedText>
      </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
