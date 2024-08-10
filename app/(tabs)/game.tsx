import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Button } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import GameCard from '../gamecard';
import InfoCard from '../infocard';

const Game = () => {
  const initialGameData = [
    {
        "scam-contact": "scotiabank-etfr.com",
        "scam-subject": "",
        "scam-text": "Alex, tu transferencia electrónica de Scotiabank de $500 no se completó. Para volver a intentarlo, visita: scotiabank-etfr.com.",
        "answer": true,
        "device": "text",
        "info": "Este mensaje es una estafa porque el enlace es sospechoso y no es un URL legítimo de Scotiabank. Siempre verifica el nombre de dominio y nunca hagas clic en enlaces desconocidos."
    },
    {
        "scam-contact": "1-800-SCOTIA",
        "scam-subject": "",
        "scam-text": "Aviso de Scotiabank: Detectamos actividad inusual en tu cuenta. Por favor, llámanos al 1-800-SCOTIA inmediatamente para verificar.",
        "answer": false,
        "device": "text",
        "info": "Este mensaje no es una estafa. El número de teléfono proporcionado es un número de contacto legítimo de Scotiabank. Siempre verifica llamando al número oficial del banco que se encuentra en su sitio web."
    },
    {
        "scam-contact": "scotiabank-rewards.com",
        "scam-subject": "",
        "scam-text": "Alex, los beneficios de tu cuenta de Scotiabank están por expirar. Renuévalos ahora para mantener tus recompensas: scotiabank-rewards.com.",
        "answer": true,
        "device": "text",
        "info": "Este mensaje es una estafa porque presiona al destinatario para que tome acción inmediata con un enlace desconocido. Los programas de recompensas reales generalmente no expiran repentinamente y te dirigirían a su sitio web oficial."
    },
    {
        "scam-contact": "scotiabank-security.com",
        "scam-subject": "",
        "scam-text": "ALERTA: Se requiere una actualización de seguridad de Scotiabank. Si no lo haces, podrías tener acceso limitado a tu cuenta: scotiabank-security.com.",
        "answer": true,
        "device": "text",
        "info": "Este mensaje es una estafa porque pide una actualización a través de un enlace sospechoso. Los bancos no piden actualizaciones de seguridad por correo electrónico o mensaje de texto. Siempre usa la aplicación o sitio web oficial del banco."
    },
    {
        "scam-contact": "1-800-472-6842",
        "scam-subject": "",
        "scam-text": "Alerta de Scotiabank: Tu cuenta está llegando a su límite de sobregiro. Por favor deposita fondos para evitar tarifas.",
        "answer": false,
        "device": "text",
        "info": "Este mensaje no es una estafa. El mensaje no pide ninguna información sensible y proporciona un número de teléfono válido. Sin embargo, siempre es bueno verificar revisando directamente tu cuenta."
    },
    {
        "scam-contact": "scotiabank-fraud.com",
        "scam-subject": "",
        "scam-text": "Estimado Alex, se realizó una compra no autorizada en tu tarjeta de crédito de Scotiabank. Por favor, visita scotiabank-fraud.com para reportarlo de inmediato.",
        "answer": true,
        "device": "text",
        "info": "Esto es una estafa porque te dirige a un sitio web sospechoso. Los bancos no te pedirían reportar un fraude a través de un enlace no oficial. En su lugar, proporcionarían instrucciones de contacto directo."
    },
    {
        "scam-contact": "scotiabank-settings.com",
        "scam-subject": "",
        "scam-text": "Estimado Alex, se han actualizado las configuraciones de seguridad de tu cuenta de Scotiabank. Si no fuiste tú, por favor visita scotiabank-settings.com para revisarlo.",
        "answer": true,
        "device": "text",
        "info": "Esto es una estafa porque el mensaje te dirige a un enlace sospechoso. Scotiabank te notificaría sobre actualizaciones de seguridad a través de la aplicación oficial del banco o su sitio web."
    },
    {
        "scam-contact": "1-800-SCOTIA",
        "scam-subject": "",
        "scam-text": "Alex, tu cuenta está programada para mantenimiento. Por favor, asegúrate de completar todas las transacciones hoy para evitar retrasos.",
        "answer": false,
        "device": "text",
        "info": "Esto no es una estafa. Los bancos a menudo notifican a los clientes sobre mantenimiento programado. El mensaje no solicita ninguna información sensible."
    },
    {
        "scam-contact": "scotiabank-delivery.com",
        "scam-subject": "",
        "scam-text": "Intentamos entregar tu paquete, pero actualmente está en espera. Por favor, confirma tu dirección de entrega en scotiabank-delivery.com para recibir tu paquete.",
        "answer": true,
        "device": "text",
        "info": "Este mensaje es una estafa porque los bancos generalmente no gestionan servicios de entrega. El enlace proporcionado es sospechoso y probablemente diseñado para robar información personal."
    },
    {
        "scam-contact": "1-800-SCOTIA",
        "scam-subject": "",
        "scam-text": "Scotiabank: Se están realizando cambios importantes en tu cuenta. Por favor, llámanos al 1-800-SCOTIA para obtener más detalles.",
        "answer": false,
        "device": "text",
        "info": "Esto no es una estafa. El mensaje te dirige a contactar con la línea de soporte oficial de Scotiabank. Sin embargo, siempre es una buena idea verificar revisando directamente tu cuenta."
    },
    {
        "scam-contact": "scotiabank-alert.com",
        "scam-subject": "Tu cuenta ha sido comprometida",
        "scam-text": "Hemos detectado actividad inusual en tu cuenta. Por favor revisa tus transacciones recientes. Si ves algo sospechoso, visita scotiabank-alert.com.",
        "answer": true,
        "device": "email",
        "info": "Este correo electrónico es una estafa porque te dirige a un enlace sospechoso en lugar de aconsejarte contactar al banco a través de canales oficiales. Siempre verifica cualquier actividad de cuenta directamente a través del sitio web o la aplicación oficial."
    },
    {
        "scam-contact": "info@scotiabank.com",
        "scam-subject": "Tu estado de cuenta mensual de Scotiabank está listo para ser visto",
        "scam-text": "Tu último estado de cuenta está disponible en línea. Por favor, inicia sesión en tu cuenta para ver los detalles. Si encuentras algún problema, por favor contacta a nuestro equipo de soporte.",
        "answer": false,
        "device": "email",
        "info": "Esto no es una estafa. El correo electrónico proviene de una dirección legítima de Scotiabank y no solicita información sensible ni incluye enlaces sospechosos. Siempre verifica la dirección de correo electrónico del remitente."
    },
    {
        "scam-contact": "scotiabank-payment.com",
        "scam-subject": "Pago rechazado: Acción necesaria",
        "scam-text": "Tu pago automático de $120.00 fue rechazado. Por favor, actualiza tu información de pago o contáctanos si crees que esto es un error. scotiabank-payment.com",
        "answer": true,
        "device": "email",
        "info": "Este correo electrónico es una estafa porque los bancos no solicitan actualizaciones de pago a través de enlaces en correos electrónicos. Siempre utiliza el sitio web oficial del banco o la aplicación para realizar cambios en tu información de pago."
    },
    {
        "scam-contact": "scotiabank-claim.com",
        "scam-subject": "Reclama tus fondos no reclamados hoy",
        "scam-text": "Nuestros registros muestran fondos no reclamados en tu cuenta de Scotiabank. Por favor, visita scotiabank-claim.com para reclamarlos.",
        "answer": true,
        "device": "email",
        "info": "Este correo electrónico es una estafa porque el mensaje usa la urgencia para inducirte a hacer clic en un enlace sospechoso. Los bancos legítimos te informarían sobre fondos no reclamados a través de canales seguros."
    },
    {
        "scam-contact": "info@scotiabank.com",
        "scam-subject": "Importante: Se requiere actualización para continuar usando tu cuenta",
        "scam-text": "Debido a actualizaciones recientes, necesitamos que actualices la información de tu cuenta. Puedes hacerlo iniciando sesión en tu cuenta o visitando una sucursal.",
        "answer": false,
        "device": "email",
        "info": "Esto no es una estafa. El correo electrónico proviene de una dirección legítima de Scotiabank, y la solicitud de actualización es una práctica estándar. Siempre inicia sesión a través del sitio web o la aplicación oficial para realizar actualizaciones."
    },
    {
        "scam-contact": "scotiabank-spending.com",
        "scam-subject": "Alerta: Se ha detectado gasto inusual en tu cuenta de Scotiabank",
        "scam-text": "Hemos detectado gasto inusual en tu cuenta. Por favor, revisa tus transacciones y reporta cualquier cargo no autorizado respondiendo a este correo electrónico o visitando scotiabank-spending.com.",
        "answer": true,
        "device": "email",
        "info": "Este correo electrónico es una estafa porque te dirige a un sitio web sospechoso. Un correo electrónico legítimo no te pediría que respondas con información sensible o visites un enlace desconocido."
    },
    {
        "scam-contact": "scotiabank-confirm.com",
        "scam-subject": "Acción requerida: Confirma tu transacción reciente en Scotiabank",
        "scam-text": "Hay una transacción de $1,500.00 pendiente en tu cuenta. Por favor, revísala en tu portal de banca en línea. Si no la autorizaste, contáctanos de inmediato o visita scotiabank-confirm.com.",
        "answer": true,
        "device": "email",
        "info": "Esto es una estafa. El mensaje incluye un enlace sospechoso y crea una falsa sensación de urgencia. Siempre verifica tus transacciones a través de la aplicación o el sitio web oficial del banco."
    },
    {
        "scam-contact": "1-800-472-6842",
        "scam-subject": "Acción inmediata requerida: Se ha detectado actividad sospechosa",
        "scam-text": "Hemos detectado actividad sospechosa en tu cuenta. Por favor, revisa tus transacciones recientes iniciando sesión en tu cuenta o contactando a nuestro equipo de seguridad.",
        "answer": false,
        "device": "email",
        "info": "Esto no es una estafa. El correo electrónico proporciona un número de teléfono válido y te pide que revises tu cuenta a través de canales oficiales. Siempre verifica contactando al banco directamente."
    },
    {
        "scam-contact": "scotiabank-prize.com",
        "scam-subject": "¡Felicitaciones! Has ganado un premio",
        "scam-text": "Has sido seleccionado como ganador de nuestro último sorteo. Por favor, responde a este correo electrónico para reclamar tu premio o visita nuestra página de promociones en scotiabank-prize.com.",
        "answer": true,
        "device": "email",
        "info": "Este correo electrónico es una estafa porque Scotiabank no realiza sorteos al azar y no te pediría que reclames un premio a través de un enlace desconocido. Siempre ten cuidado con notificaciones de premios no solicitados."
    },
    {
        "scam-contact": "Unknown Caller",
        "scam-subject": "",
        "scam-text": "Este es un llamado de Scotiabank para informarte sobre actividad sospechosa en tu cuenta. Por favor, presiona 1 para hablar con un representante y asegurar tu cuenta de inmediato.",
        "answer": true,
        "device": "call",
        "info": "Esta llamada es una estafa. Los bancos generalmente no te piden que presiones un botón para asegurar tu cuenta. Te pedirían que los contactes directamente a través de su número oficial."
    },
    {
        "scam-contact": "1-800-SCOTIA",
        "scam-subject": "",
        "scam-text": "Hola Alex, este es Scotiabank. Estamos llamando para confirmar una transacción reciente de $1,200. Si no la autorizaste, por favor visita tu sucursal más cercana.",
        "answer": false,
        "device": "call",
        "info": "Esta llamada no es una estafa. Proporciona el número de contacto oficial de Scotiabank y te pide que tomes acción visitando una sucursal, no proporcionando información por teléfono."
    },
    {
        "scam-contact": "Unknown Caller",
        "scam-subject": "",
        "scam-text": "Este es Scotiabank. Necesitamos verificar la información de tu cuenta para procesar una transacción pendiente. Por favor, proporciona tu número de cuenta y PIN.",
        "answer": true,
        "device": "call",
        "info": "Esta llamada es una estafa. Los bancos nunca te pedirán que proporciones tu PIN o número completo de cuenta por teléfono. Siempre cuelga y contacta al banco directamente utilizando su número oficial."
    },
    {
        "scam-contact": "1-800-472-6842",
        "scam-subject": "",
        "scam-text": "Hola, este es Scotiabank. Notamos alguna actividad inusual en tu cuenta y queríamos confirmarla contigo. Por favor, llámanos al 1-800-472-6842 si tienes alguna preocupación.",
        "answer": false,
        "device": "call",
        "info": "Esta llamada no es una estafa. Proporciona un número de contacto válido y no solicita información sensible directamente. Siempre verifica llamando al número oficial proporcionado."
    },
    {
        "scam-contact": "Unknown Caller",
        "scam-subject": "",
        "scam-text": "Scotiabank está actualizando sus sistemas de seguridad. Para mantener tu cuenta segura, por favor proporciona tus respuestas de seguridad y contraseña por teléfono.",
        "answer": true,
        "device": "call",
        "info": "Esta llamada es una estafa. Los bancos nunca te pedirán tu contraseña o respuestas de seguridad por teléfono. Siempre rehúsa proporcionar dicha información y reporta la llamada a tu banco."
    },
    {
        "scam-contact": "1-800-SCOTIA",
        "scam-subject": "",
        "scam-text": "Hola, este es Scotiabank. Solo queríamos informarte sobre algunas actualizaciones en tu cuenta. No se requiere ninguna acción de tu parte en este momento.",
        "answer": false,
        "device": "call",
        "info": "Esta llamada no es una estafa. Es simplemente una llamada informativa que no solicita ninguna información sensible ni acción inmediata."
    },
    {
        "scam-contact": "Unknown Caller",
        "scam-subject": "",
        "scam-text": "Este es Scotiabank. Tu cuenta ha sido bloqueada debido a actividad sospechosa. Por favor, presiona 2 para desbloquear tu cuenta.",
        "answer": true,
        "device": "call",
        "info": "Esta llamada es una estafa. Los bancos legítimos no te pedirán que presiones botones durante una llamada automatizada para desbloquear cuentas. Siempre contacta al banco directamente a través de su número oficial."
    },
    {
        "scam-contact": "1-800-472-6842",
        "scam-subject": "",
        "scam-text": "Hola, este es Scotiabank llamando para notificarte sobre alguna actividad reciente en tu cuenta. Por favor, revisa tus transacciones recientes a la mayor brevedad.",
        "answer": false,
        "device": "call",
        "info": "Esta llamada no es una estafa. Es una llamada de cortesía que proporciona un número de contacto legítimo y no solicita información sensible."
    },
    {
        "scam-contact": "Unknown Caller",
        "scam-subject": "",
        "scam-text": "Este es Scotiabank. Necesitamos actualizar la información de tu cuenta. Por favor, proporciona tu fecha de nacimiento y número de seguro social para continuar.",
        "answer": true,
        "device": "call",
        "info": "Esta llamada es una estafa. Los bancos nunca te pedirán tu número de seguro social u otra información personal sensible por teléfono. Siempre rehúsa y reporta la llamada."
    },
    {
        "scam-contact": "1-800-SCOTIA",
        "scam-subject": "",
        "scam-text": "Hola Alex, este es Scotiabank. Notamos un retiro grande de tu cuenta. Si no lo autorizaste, por favor visita tu sucursal más cercana para asegurar tu cuenta.",
        "answer": false,
        "device": "call",
        "info": "Esta llamada no es una estafa. Proporciona el número de contacto oficial de Scotiabank y te pide que tomes acción visitando una sucursal, no proporcionando información por teléfono."
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

const shuffledData = shuffleArray([...initialGameData]); // Shuffle the game data
const [gameData, setGameData] = useState(shuffledData);
const [cardsStack, setCardsStack] = useState([]);
const [points, setPoints] = useState(0);
const [timeLeft, setTimeLeft] = useState(60);
const [isGameOver, setIsGameOver] = useState(false);
const [flashColor, setFlashColor] = useState('#ffffff'); // Default background color
const [swipeCount, setSwipeCount] = useState(0); 

useEffect(() => {
  // Pre-create the cards in a stack with the info card after each question card
  const createdCardsStack = gameData.flatMap((card, index) => [
    <GameCard key={`game-${index}`} card={card} />,
    <InfoCard key={`info-${index}`} info={card.info}/>
  ]);
  setCardsStack(createdCardsStack);
}, [gameData]);

useEffect(() => {
  if (timeLeft <= 0) {
    setIsGameOver(true);
    return;
  }
  const timer = setInterval(() => {
    setTimeLeft((prev) => prev - 1);
  }, 1000);

  return () => clearInterval(timer);
}, [timeLeft]);

const handleSwipe = (cardIndex, direction) => {
  if (isGameOver) return; // Prevent swipes if game is over
  setSwipeCount((prevCount) => prevCount + 1); // Increment swipe count

  if (swipeCount % 2 === 0) {

    // Adjusted to account for info cards in between
    const actualCardIndex = Math.floor(cardIndex / 2);
    const card = gameData[actualCardIndex];
    const isCorrectSwipe =
      (direction === 'right' && card.answer === true) ||
      (direction === 'left' && card.answer === false);

    if (isCorrectSwipe) {
      setPoints((prevPoints) => prevPoints + 10); // Award 10 points for correct answer
      triggerFlash('#ABE6A1'); // Green flash for correct
    } else {
      setPoints((prevPoints) => prevPoints - 5); // Deduct 5 points for wrong answer
      triggerFlash('#ED9393'); // Red flash for incorrect
    }

    console.log(`Swiped card at index ${cardIndex}, Direction: ${direction}`);}
  };

const triggerFlash = (color) => {
  setFlashColor(color);
  setTimeout(() => {
    setFlashColor('#ffffff'); // Reset to default after 200ms
  }, 300);
};

const restartGame = () => {
  const shuffledData = shuffleArray([...initialGameData]); // Shuffle and reset game data
  setGameData(shuffledData); // Reset game data
  setPoints(0); // Reset points
  setTimeLeft(60); // Reset timer
  setIsGameOver(false); // Reset game over state
  setSwipeCount(0); // Reset swipe count
};

return (
  <View style={[styles.container, { backgroundColor: flashColor }]}>
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
          cards={cardsStack}
          renderCard={(card) => card}
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