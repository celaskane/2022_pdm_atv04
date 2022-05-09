import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { PROTOCOL, BASE_URL, LANGUAGE, UNITS, APPID } from '@env'

export default function App() {

  const [cidade, setCidade] = useState('')
  const[previsoes, setPrevisoes] = useState([])
  const capturarCidade = (cidadeDigitada) => {
    setCidade(cidadeDigitada)
  }
  const obterPrevisoes = () => {
    const endPoint = `${PROTOCOL}://${BASE_URL}?lang=${LANGUAGE}&units=${UNITS}&appid=${APPID}&q=${cidade}`
    fetch(endPoint)
    .then(response => {
      return response.json()
    })
    .then(dados => {
      setPrevisoes(dados['list'])
    })
  }

  return (
    <View style={styles.containerView}>
      <View style={styles.entradaView}>
        <TextInput
          style={styles.cidadeTextInput}
          placeholder="Digite o nome da cidade desejada."
          value={cidade}
          onChangeText={capturarCidade}
        />
        <Button
          title='OK'
          onPress={obterPrevisoes}
        />
      </View>
      <FlatList
        data={previsoes}
        renderItem={p => (
          <Text>{JSON.stringify(p)}</Text>
        )}
      />
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