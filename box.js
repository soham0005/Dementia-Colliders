import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MARGIN, SIZE} from './utils';

const Box = ({count}) => {
  const backgroundColor = count % 2 === 0 ? '#957ff0' : 'green';
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Text style={styles.text}>{count}</Text>
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  container: {
    width: SIZE - MARGIN,
    height: SIZE - MARGIN,
    margin: MARGIN,
    borderRadius: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#cde9e4',
  },
});
