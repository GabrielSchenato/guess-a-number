import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import Colors from '../constants/colors';

const GameOverScreen = props => {

    return (
        <View style={styles.screen}>
            <TitleText>
                The Game is Over!
            </TitleText>
            <View style={styles.imageContainer}>
                <Image
                    fadeDuration={1000}
                    source={require('../assets/success.png')}
                    //source={{ uri: 'https://www.telegraph.co.uk/content/dam/Travel/ski/K2-mountain-Andrzej-Bargiel-first-ski-descent-by-Piotr-Pawlus-Red-Bull-Content-Pool.jpg' }}
                    style={styles.image}
                />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resulText}>
                    Your phone needed{' '}
                    <Text style={styles.highline}>{props.roundsNumber}</Text>{' '}
                    rounds to guess the number{' '}
                    <Text style={styles.highline}>{props.userNumber}</Text>.
                </BodyText>
            </View>
            <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 20
    },
    resulText: {
        textAlign: 'center',
        fontSize: 20
    },
    highline: {
        color: Colors.accent,
        fontFamily: 'open-sans-bold'
    }
});

export default GameOverScreen;
