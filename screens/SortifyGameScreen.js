import { StyleSheet, View, Button, SafeAreaView, Alert, Text } from 'react-native';
import React, { useCallback, useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Box from '../box';
import Draggable from '../draggable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSharedValue } from 'react-native-reanimated';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const createShuffledArray = () => {
  const arr = new Array(24).fill('').map((_, i) => i);
  return shuffleArray(arr);
};

export default function SortifyGameScreen() {
  const [chances, setChances] = useState(3);
  const [shuffledArr, setShuffledArr] = useState(createShuffledArray());
  const positions = useSharedValue(
    Object.fromEntries(shuffledArr.map((item, index) => [item, index]))
  );

  const resetGame = useCallback(() => {
    setChances(3);
    const newShuffledArr = createShuffledArray();
    setShuffledArr(newShuffledArr);
    positions.value = Object.fromEntries(newShuffledArr.map((item, index) => [item, index]));
  }, []);

  const handleSubmit = () => {
    const currentOrder = Object.entries(positions.value)
      .sort(([, a], [, b]) => a - b)
      .map(([key]) => parseInt(key));

    const isSorted = currentOrder.every((value, index) => value === index);

    if (isSorted) {
      Alert.alert("Hurray!!!!", "The puzzle is solved!", [
        { text: "New Game", onPress: resetGame }
      ]);
    } else {
      const newChances = chances - 1;
      setChances(newChances);
      
      if (newChances > 0) {
        Alert.alert("So Close!!!", `The Tiles are almost sorted, try once again. You have ${newChances} chance${newChances > 1 ? 's' : ''} left.`);
      } else {
        Alert.alert("Game Over", "You're out of chances. Start a new game?", [
          { text: "New Game", onPress: resetGame }
        ]);
      }
    }

    console.log('Current order:', currentOrder);
  };

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.container}>
        <SafeAreaView style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.chancesText}>Chances left: {chances}</Text>
            <View style={styles.draggableArea}>
              {shuffledArr.map(item => (
                <Draggable key={item} positions={positions} id={item}>
                  <Box key={item} count={item} />
                </Draggable>
              ))}
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Submit" onPress={handleSubmit} disabled={chances === 0} />
          </View>
        </SafeAreaView>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    justifyContent:'center',
    marginTop:0
  },
  draggableArea: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonContainer: {
    padding: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  chancesText: {
    textAlign: 'center',
    fontSize: 18,
    padding: 10,
    fontWeight: 'bold',
  }
});