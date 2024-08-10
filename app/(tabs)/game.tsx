import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Button } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import GameCard from '../gamecard';

const Game = () => {
  const initialGameData = [
        {
        "scam-contact": "scotiabank-etfr.com",
        "scam-subject": "",
        "scam-text": "Alex, your Scotiabank e-Transfer of $500 was not completed. To retry, visit: scotiabank-etfr.com.",
        "answer": true,
        "device": "text",
        "info": "This message is a scam because the link is suspicious and not a legitimate Scotiabank URL. Always verify the domain name and never click on unfamiliar links."
    },
    {
        "scam-contact": "1-800-SCOTIA",
        "scam-subject": "",
        "scam-text": "Scotiabank Notice: We detected unusual activity on your account. Please call us at 1-800-SCOTIA immediately to verify.",
        "answer": false,
        "device": "text",
        "info": "This message is not a scam. The phone number provided is a legitimate contact number for Scotiabank. Always verify by calling the official bank number found on their website."
    },
    {
        "scam-contact": "scotiabank-rewards.com",
        "scam-subject": "",
        "scam-text": "Alex, your Scotiabank account benefits are expiring soon. Renew them now to keep your rewards: scotiabank-rewards.com.",
        "answer": true,
        "device": "text",
        "info": "This message is a scam because it pressures the recipient to take immediate action with an unfamiliar link. Real rewards programs typically do not expire suddenly and would direct you to their official website."
    },
    {
        "scam-contact": "scotiabank-security.com",
        "scam-subject": "",
        "scam-text": "ALERT: Scotiabank security update required. Failure to do so may result in limited access to your account: scotiabank-security.com.",
        "answer": true,
        "device": "text",
        "info": "This message is a scam because it asks for an update through a suspicious link. Banks do not ask for security updates via email or text. Always use the official banking app or website."
    },
    {
        "scam-contact": "1-800-472-6842",
        "scam-subject": "",
        "scam-text": "Scotiabank Alert: Your account is approaching its overdraft limit. Please deposit funds to avoid fees.",
        "answer": false,
        "device": "text",
        "info": "This message is not a scam. The message does not ask for any sensitive information and provides a valid phone number. However, it's always good to verify by checking your account directly."
    },
    {
        "scam-contact": "scotiabank-fraud.com",
        "scam-subject": "",
        "scam-text": "Dear Alex, an unauthorized purchase was made on your Scotiabank credit card. Please visit scotiabank-fraud.com to report it immediately.",
        "answer": true,
        "device": "text",
        "info": "This is a scam because it directs you to a suspicious website. Banks would not ask you to report fraud through a non-official link. Instead, they would provide direct contact instructions."
    },
    {
        "scam-contact": "scotiabank-settings.com",
        "scam-subject": "",
        "scam-text": "Dear Alex, your Scotiabank account security settings have been updated. If this wasn’t you, please visit scotiabank-settings.com to review.",
        "answer": true,
        "device": "text",
        "info": "This is a scam because the message directs you to a suspicious link. Scotiabank would notify you of security updates via the official banking app or website."
    },
    {
        "scam-contact": "1-800-SCOTIA",
        "scam-subject": "",
        "scam-text": "Alex, your account is scheduled for maintenance. Please ensure all transactions are completed today to avoid delays.",
        "answer": false,
        "device": "text",
        "info": "This is not a scam. Banks often notify customers about scheduled maintenance. The message does not request any sensitive information."
    },
    {
        "scam-contact": "scotiabank-delivery.com",
        "scam-subject": "",
        "scam-text": "We tried to deliver your package, but it is currently on hold. Please confirm your delivery address at scotiabank-delivery.com to receive your package.",
        "answer": true,
        "device": "text",
        "info": "This message is a scam because banks typically do not manage delivery services. The link provided is suspicious and likely designed to steal personal information."
    },
    {
        "scam-contact": "1-800-SCOTIA",
        "scam-subject": "",
        "scam-text": "Scotiabank: Important changes are being made to your account. Please call us at 1-800-SCOTIA for details.",
        "answer": false,
        "device": "text",
        "info": "This is not a scam. The message directs you to contact the official Scotiabank support line. However, it's always a good idea to verify by checking your account directly."
    },
    {
        "scam-contact": "scotiabank-alert.com",
        "scam-subject": "Your Account Has Been Compromised",
        "scam-text": "We've detected unusual activity on your account. Please review your recent transactions. If you see anything suspicious, visit scotiabank-alert.com.",
        "answer": true,
        "device": "email",
        "info": "This email is a scam because it directs you to a suspicious link instead of advising you to contact the bank through official channels. Always verify any account activity directly through the official website or app."
    },
    {
        "scam-contact": "info@scotiabank.com",
        "scam-subject": "Your Scotiabank Monthly Statement is Ready to View",
        "scam-text": "Your latest bank statement is available online. Please log in to your account to view the details. If you encounter any issues, please contact our support team.",
        "answer": false,
        "device": "email",
        "info": "This is not a scam. The email comes from a legitimate Scotiabank address and does not ask for sensitive information or include suspicious links. Always verify the sender's email address."
    },
    {
        "scam-contact": "scotiabank-payment.com",
        "scam-subject": "Payment Declined: Action Needed",
        "scam-text": "Your automatic payment of $120.00 was declined. Please update your payment information or contact us if you believe this is an error. scotiabank-payment.com",
        "answer": true,
        "device": "email",
        "info": "This email is a scam because banks do not request payment updates through email links. Always use the official banking website or app to make changes to your payment information."
    },
    {
        "scam-contact": "scotiabank-claim.com",
        "scam-subject": "Claim Your Unclaimed Funds Today",
        "scam-text": "Our records show unclaimed funds in your Scotiabank account. Please visit scotiabank-claim.com to claim them.",
        "answer": true,
        "device": "email",
        "info": "This email is a scam because the message uses urgency to entice you to click on a suspicious link. Legitimate banks would inform you about unclaimed funds through secure channels."
    },
    {
        "scam-contact": "info@scotiabank.com",
        "scam-subject": "Important: Update Required to Continue Using Your Account",
        "scam-text": "Due to recent updates, we need you to update your account information. You can do this by logging into your account or visiting a branch.",
        "answer": false,
        "device": "email",
        "info": "This is not a scam. The email is from a legitimate Scotiabank address, and the update request is standard practice. Always log in through the official website or app to perform updates."
    },
    {
        "scam-contact": "scotiabank-spending.com",
        "scam-subject": "Alert: Unusual Spending Detected on Your Scotiabank Account",
        "scam-text": "We've detected unusual spending on your account. Please review your transactions and report any unauthorized charges by replying to this email or visiting scotiabank-spending.com.",
        "answer": true,
        "device": "email",
        "info": "This email is a scam because it directs you to a suspicious website. A legitimate email would not ask you to reply with sensitive information or visit an unfamiliar link."
    },
    {
        "scam-contact": "scotiabank-confirm.com",
        "scam-subject": "Action Required: Confirm Your Recent Scotiabank Transaction",
        "scam-text": "A transaction of $1,500.00 is pending on your account. Please review it in your online banking portal. If you did not authorize this, contact us immediately or visit scotiabank-confirm.com.",
        "answer": true,
        "device": "email",
        "info": "This is a scam. The message includes a suspicious link and creates a false sense of urgency. Always check your transactions through the official banking app or website."
    },
    {
        "scam-contact": "1-800-472-6842",
        "scam-subject": "Immediate Action Required: Suspicious Activity Detected",
        "scam-text": "We've detected suspicious activity in your account. Please review your recent transactions by logging in to your account or contacting our security team.",
        "answer": false,
        "device": "email",
        "info": "This is not a scam. The email provides a valid phone number and asks you to check your account through official channels. Always verify by contacting the bank directly."
    },
    {
        "scam-contact": "scotiabank-prize.com",
        "scam-subject": "Congratulations! You've Won a Prize",
        "scam-text": "You've been selected as a winner of our latest sweepstakes! Please reply to this email to claim your prize or visit our promotions page at scotiabank-prize.com.",
        "answer": true,
        "device": "email",
        "info": "This email is a scam because Scotiabank does not run random sweepstakes and would not ask you to claim a prize through an unfamiliar link. Always be cautious of unsolicited prize notifications."
    },
    {
        "scam-contact": "Unknown Caller",
        "scam-subject": "",
        "scam-text": "This is Scotiabank calling to inform you of suspicious activity on your account. Please press 1 to speak with a representative and secure your account immediately.",
        "answer": true,
        "device": "call",
        "info": "This call is a scam. Banks typically do not ask you to press a button to secure your account. They would ask you to contact them directly through their official number."
    },
    {
        "scam-contact": "1-800-SCOTIA",
        "scam-subject": "",
        "scam-text": "Hello Alex, this is Scotiabank. We are calling to confirm a recent transaction of $1,200. If you did not authorize this, please visit your nearest branch.",
        "answer": false,
        "device": "call",
        "info": "This call is not a scam. It provides the official Scotiabank contact number and asks you to take action by visiting a branch, not by providing information over the phone."
    },
    {
        "scam-contact": "Unknown Caller",
        "scam-subject": "",
        "scam-text": "This is Scotiabank. We need to verify your account information to process a pending transaction. Please provide your account number and PIN.",
        "answer": true,
        "device": "call",
        "info": "This call is a scam. Banks will never ask you to provide your PIN or full account number over the phone. Always hang up and contact the bank directly using their official number."
    },
    {
        "scam-contact": "1-800-472-6842",
        "scam-subject": "",
        "scam-text": "Hello, this is Scotiabank. We noticed some unusual activity on your account and wanted to confirm it with you. Please call us back at 1-800-472-6842 if you have any concerns.",
        "answer": false,
        "device": "call",
        "info": "This call is not a scam. It provides a valid contact number and does not ask for sensitive information directly. Always verify by calling the official number provided."
    },
    {
        "scam-contact": "Unknown Caller",
        "scam-subject": "",
        "scam-text": "Scotiabank is updating its security systems. To keep your account safe, please provide your security answers and password over the phone.",
        "answer": true,
        "device": "call",
        "info": "This call is a scam. Banks will never ask for your password or security answers over the phone. Always refuse to provide such information and report the call to your bank."
    },
    {
        "scam-contact": "1-800-SCOTIA",
        "scam-subject": "",
        "scam-text": "Hello, this is Scotiabank. We just wanted to let you know about some updates to your account. No action is needed from your side at this time.",
        "answer": false,
        "device": "call",
        "info": "This call is not a scam. It is simply an informational call that does not ask for any sensitive information or immediate action."
    },
    {
        "scam-contact": "Unknown Caller",
        "scam-subject": "",
        "scam-text": "This is Scotiabank. Your account has been locked due to suspicious activity. Please press 2 to unlock your account.",
        "answer": true,
        "device": "call",
        "info": "This call is a scam. Legitimate banks do not ask you to press buttons during an automated call to unlock accounts. Always contact the bank directly through their official number."
    },
    {
        "scam-contact": "1-800-472-6842",
        "scam-subject": "",
        "scam-text": "Hello, this is Scotiabank calling to notify you of some recent activity on your account. Please review your recent transactions at your earliest convenience.",
        "answer": false,
        "device": "call",
        "info": "This call is not a scam. It is a courtesy call that provides a legitimate contact number and does not ask for sensitive information."
    },
    {
        "scam-contact": "Unknown Caller",
        "scam-subject": "",
        "scam-text": "This is Scotiabank. We need to update your account information. Please provide your date of birth and Social Insurance Number to proceed.",
        "answer": true,
        "device": "call",
        "info": "This call is a scam. Banks will never ask for your Social Insurance Number or other sensitive personal information over the phone. Always refuse and report the call."
    },
    {
        "scam-contact": "1-800-SCOTIA",
        "scam-subject": "",
        "scam-text": "Hello Alex, this is Scotiabank. We noticed a large withdrawal from your account. If you did not authorize this, please visit your nearest branch to secure your account.",
        "answer": false,
        "device": "call",
        "info": "This call is not a scam. It provides the official Scotiabank contact number and asks you to take action by visiting a branch, not by providing information over the phone."
    }
];


const shuffleArray = (array) => {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};
  
  const shuffledData = shuffleArray([...initialGameData]); // Shuffle and reset game data
  const [gameData, setGameData] = useState(shuffledData);
  const [points, setPoints] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsGameOver(true);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleSwipe = (cardIndex: number, direction: string) => {
    if (isGameOver) return; // Prevent swipes if game is over

    const card = gameData[cardIndex];
    const isCorrectSwipe = (direction === 'right' && card.answer === true) || (direction === 'left' && card.answer === false);

    if (isCorrectSwipe) {
      setPoints(prevPoints => prevPoints + 10); // Award 10 points for correct answer
    } else {
      setPoints(prevPoints => prevPoints - 5); // Deduct 5 points for wrong answer
    }

    console.log(`Swiped card at index ${cardIndex}, Direction: ${direction}`);
  };

  const restartGame = () => {
    const shuffledData = shuffleArray([...initialGameData]); // Shuffle and reset game data
    setGameData(shuffledData); // Reset game data
    setPoints(0); // Reset points
    setTimeLeft(10); // Reset timer
    setIsGameOver(false); // Reset game over state
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>Time Left: {timeLeft}s</Text>
      <Text style={styles.points}>Points: {points}</Text>
      {isGameOver ? (
        <View style={styles.gameOverContainer}>
          <Text style={styles.gameOver}>Game Over!</Text>
          <Button title="Restart Game" onPress={restartGame} />
        </View>
      ) : (
      <View style={styles.swiperContainer}>
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
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  swiperContainer: {
    position: 'absolute',
    top: 25,
    left: 0,
  },
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
  gameOverContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameOver: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff0000',
    marginBottom: 20,
  },
});

export default Game;