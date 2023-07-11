

import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

export default function CurrentLocation() {
  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      (coords) => {
        setPosition(JSON.stringify(coords));
      },
      (error) => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      { enableHighAccuracy: true }
    );
  };

  const [position, setPosition] = useState(null);
  console.log(position);
  return (
    <View>
      <Text>
        <Text style={styles.title}>Current position: </Text>
        
      </Text>
      <Button title="Get Current Position" onPress={getCurrentPosition} />
    <Text>{position}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '500',
  },
});