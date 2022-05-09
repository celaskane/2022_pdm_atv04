import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { PROTOCOL, BASE_URL, LANGUAGE, UNITS, APPID } from '@env'

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