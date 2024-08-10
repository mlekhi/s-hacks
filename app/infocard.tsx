    import React from 'react';
    import { StyleSheet, View, Text } from 'react-native';

    interface InfoCardProps {
    info: string;
    }

    const InfoCard: React.FC<InfoCardProps> = ({ info }) => {
    return (
        <View style={styles.card}>
        <Text style={styles.infoText}>{info}</Text>
        </View>
    );
    };

    const styles = StyleSheet.create({
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',  // Red background
        borderRadius: 15,            // Same borderRadius as GameCard
        shadowColor: '#000',         // Same shadow color
        shadowOffset: { width: 0, height: 4 }, // Same shadow offset
        shadowOpacity: 0.4,          // Same shadow opacity
        shadowRadius: 4,             // Same shadow blur radius
        padding: 20,
    },
    infoText: {
        fontSize: 18,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'center',
        width: 200
    },
    });

    export default InfoCard;
