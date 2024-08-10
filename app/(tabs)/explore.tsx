import { StyleSheet, View, Text, Image } from 'react-native';

export default function RewardsScreen() {
  const points = 520;

  return (
    <View style={styles.container}>
      <View style={styles.scenePointsContainer}>
        <Text style={styles.sceneYear}>2005</Text>
        <Text style={styles.scenePoints}>Scene Points</Text>
      </View>

      <View style={styles.header}>
        <Text style={styles.name}>Hi Alex</Text>
        <Text style={styles.points}>Redeem Your Points Below</Text>
      </View>

      <View style={styles.rewardsGrid}>
        <View style={styles.rewardItem}>
          <Image source={require('@/assets/images/reward2.png')} style={styles.rewardIcon} />
          <Text style={styles.rewardPoints}>500 Points</Text>
          <Text style={styles.rewardText}>Free Movie Ticket</Text>
        </View>
        <View style={styles.rewardItem}>
          <Image source={require('@/assets/images/reward2.png')} style={styles.rewardIcon} />
          <Text style={styles.rewardPoints}>1000 Points</Text>
          <Text style={styles.rewardText}>$10 Cineplex Gift Card</Text>
        </View>
        <View style={styles.rewardItem}>
          <Image source={require('@/assets/images/reward2.png')} style={styles.rewardIcon} />
          <Text style={styles.rewardPoints}>1500 Points</Text>
          <Text style={styles.rewardText}>Popcorn and Drink Combo</Text>
        </View>
        <View style={styles.rewardItem}>
          <Image source={require('@/assets/images/reward2.png')} style={styles.rewardIcon} />
          <Text style={styles.rewardPoints}>2000 Points</Text>
          <Text style={styles.rewardText}>Two Free Movie Tickets</Text>
        </View>
        <View style={styles.rewardItem}>
          <Image source={require('@/assets/images/reward2.png')} style={styles.rewardIcon} />
          <Text style={styles.rewardPoints}>2500 Points</Text>
          <Text style={styles.rewardText}>$25 Restaurant Gift Card</Text>
        </View>
        <View style={styles.rewardItem}>
          <Image source={require('@/assets/images/reward2.png')} style={styles.rewardIcon} />
          <Text style={styles.rewardPoints}>5000 Points</Text>
          <Text style={styles.rewardText}>$50 Shopping Voucher</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  scenePointsContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  sceneYear: {
    fontSize: 60,
    color: '#D72B30',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scenePoints: {
    fontSize: 25,
    color: '#D72B30',
    textAlign: 'center',
  },
  banner: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#D72B30',
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  points: {
    fontSize: 18,
    marginTop: 5,
    color: '#FFFFFF',
  },
  bold: {
    fontWeight: 'bold',
  },
  rewardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '90%',
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  rewardItem: {
    width: '45%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  rewardIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  rewardPoints: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D72B30',
    marginBottom: 5,
  },
  rewardText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#00234D',
  },
});
