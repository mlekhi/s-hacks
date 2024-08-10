import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface InfoCardProps {
  info: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ info }) => {
  // Find the index of the first instance of "scam" (case insensitive)
  const scamIndex = info.toLowerCase().indexOf("scam");

  // Separate the text before and after the word "scam"
  const beforeScam = info.substring(0, scamIndex + 4);  // Include "scam"
  const afterScam = info.substring(scamIndex + 4);

  return (
    <View style={styles.card}>
      <Text style={styles.infoTextBold}>
        {beforeScam}
      </Text>
      <Text style={styles.infoTextNormal}>
        {afterScam}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    padding: 20,
  },
  infoTextBold: {
    fontSize: 24,  // Larger font size for the bold text
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoTextNormal: {
    fontSize: 18,  // Normal font size for the rest of the text
    color: '#000000',
    textAlign: 'center',
  },
});

export default InfoCard;
