import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View>
      <View>
        <TextInput/>
        <Button/>
      </View>
      <FlatList/>
    </View>
  );
}

const styles = StyleSheet.create({
  containerView: {
    padding: 40,
  },
  entradaView: {
    marginBottom: 8
  },
  cidadeTextInput: {
    padding: 12,
    borderBottomColor: '#FF9800',
    borderWidth: 2,
    marginBottom: 4
  }
})