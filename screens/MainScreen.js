import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Patient')}
      >
        <Image
          source={{ uri: 'https://via.placeholder.com/100?text=Patient' }}
          style={styles.buttonImage}
        />
        <Text style={styles.buttonText}>Dementia Patient</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Caretaker')}
      >
        <Image
          source={{ uri: 'https://via.placeholder.com/100?text=Caretaker' }}
          style={styles.buttonImage}
        />
        <Text style={styles.buttonText}>Caretaker</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 20,
    margin: 10,
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 50,
  },
  buttonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});