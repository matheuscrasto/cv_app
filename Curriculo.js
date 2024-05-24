// Curriculo.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Curriculo = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>Formação</Text>
            <Text style={styles.item}> 2019 - Bacharel em Publicidade e Propaganda</Text>
            <Text style={styles.itemDesc}>Universidade Uninassau - PE</Text>
            <Text style={styles.item}> 2021 - Qualificação Socioprofissional em programação
                de Software </Text>
            <Text style={styles.itemDesc}>Adm&Tech - Instituto de Administração e Tecnologia -PE</Text>
            <Text style={styles.item}> 2022 - Tecnólogo em Análise e Desenvolvimento de Sistemas </Text>
            <Text style={styles.itemDesc}>Faculdade Senac - PE</Text>
            <Text style={styles.titulo}>Experiência</Text>
            <Text style={styles.empresa}>Click 4 Fun </Text>
            <Text style={styles.item}> 2017/2018 - </Text>
            <Text style={styles.item}> Iniciei minha carreira como Operador Técnico de Serviço de Foto Lembrança,
                marcando meu primeiro emprego formal. Durante esse período, adquiri habilidades sólidas em
                atendimento ao cliente, operação de equipamentos fotográficos e sua manutenção, contribuindo para
                entrega de serviços de alta qualidade. </Text>
            <Text style={styles.empresa}>Lojas Crocs e Aleatory - Recife </Text>
            <Text style={styles.item}> 2019-2022 - </Text>
            <Text style={styles.item}> Tive a oportunidade enriquecedora de trabalhar nas lojas Crocs
                e Aleatory no Shopping Center Recife, onde desempenhei um papel fundamental
                no atendimento ao cliente. Durante esse período, aprimorei minhas habilidades de comunicação
                e relacionamento interpessoal, garantindo que cada cliente experimentasse um serviço
                excepcional. </Text>
            <Text style={styles.empresa}>DsPlay / LOTV </Text>
            <Text style={styles.item}> 2023 - atual - </Text>
            <Text style={styles.item}> Como gerente de Desenvolvimento de Negócios nesta empresa
                de Software voltado para Digital Signage, lidero estrategicamente o crescimento, supervisionando
                vendas e parcerias estratégicas. Gerencio o desenvolvimento de produtos, 
                utilizo análise de dados, e participo de eventos do setor. Priorizo a satisfação 
                do cliente, mantendo-nos competitivos no mercado. </Text>
            <Text style={styles.titulo}>Soft Skills</Text>
            <Text style={styles.item}>Conhecimento de Mercado</Text>
            <Text style={styles.item}>Negociação</Text>
            <Text style={styles.item}>Liderança</Text>
            <Text style={styles.item}>Criatividade e Inovação</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titulo: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        fontSize: 26,
        fontWeight: 'bold',
        // marginBottom: 20,
        marginLeft: 10,
    },
    item: {
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 10,
        textAlign: 'left',
    },
    empresa: {
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 10,
        textAlign: 'left',
        fontWeight: 'bold',
    },
    itemDesc: {
        fontSize: 18,
        marginLeft: 15,
        marginBottom: 25,
    },
});

export default Curriculo;
