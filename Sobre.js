// SobreMim.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Sobre = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Sobre mim</Text>
                <Text style={styles.info}>Experiente gestor de projetos de Digital Signage apaixonado
                por criar experiências visuais envolventes.
                Com foco no Cliente, lidero equipes para transformar conceitos em realidade,
                desde o planejamento até a entrega.
                Acredito na sinalização digital como uma poderosa ferramenta de comunicação.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: 10,
    },
    info: {
        fontSize: 22,
        marginBottom: 10,
        marginLeft: 10,
        textAlign: 'left',
    },
});

export default Sobre;
