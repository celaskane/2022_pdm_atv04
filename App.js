import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { PROTOCOL, BASE_URL1, BASE_URL2, LANGUAGE, UNITS, CNT, APPID } from '@env';
import PrevisaoItem from './components/PrevisaoItem';

export default function App() {

  const [cidade, setCidade] = useState('')
  const[previsoes, setPrevisoes] = useState([])
  const capturarCidade = (cidadeDigitada) => {
    setCidade(cidadeDigitada)
  }
  const obterPrevisoes = () => {
    const endPoint = `${PROTOCOL}://${BASE_URL1}?lang=${LANGUAGE}&units=${UNITS}&cnt=${CNT}&appid=${APPID}&q=${cidade}`
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
          <PrevisaoItem previsao={p.item} />
          //<Text>{JSON.stringify(p)}</Text>
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