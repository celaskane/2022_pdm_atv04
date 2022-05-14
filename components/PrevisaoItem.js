import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Cartao from './Cartao'

const PrevisaoItem = ({previsao}) => {
    const lat = previsao.weather[0].description
    const lon = previsao.weather[0].description
    return(
        <Cartao style={styles.cartao}>
            <View style={styles.tela}>
                <View>
                    <View style={styles.primeiraLinha}>
                        <Text>lat: {lat}</Text>
                        <Text>lon: {lon}</Text>
                    </View>
                </View>
            </View>
        </Cartao>
    )
}

export default PrevisaoItem

const styles = StyleSheet.create({
    cartao: {
        marginBottom: 8
    },
    tela: {
        flexDirection: 'row'
    },
    imagem: {
        width: 50,
        height: 50
    },
    primeiraLinha: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    segundaLinha: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 4,
        borderTopWidth: 1,
        color: '#DDD'
    },
    valor: {
        marginHorizontal: 2
    }
})