import React, { useState } from 'react';
import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';
import Curriculo from './Curriculo';
import SobreMim from './Sobre';
import Matheus from './assets/Matheus.jpg';

const App = () => {
  const [abaAtiva, setAbaAtiva] = useState('Curriculo');

  const renderizarConteudo = () => {
    if (abaAtiva === 'Curriculo') {
      return <Curriculo />;
    } else if (abaAtiva === 'SobreMim') {
      return <SobreMim />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
        <Text style={styles.meuNome}>Matheus</Text>
        <Text style={styles.meuNome}>Crasto</Text>
        </View>
      <View style={styles.foto}> 
        <Image source={Matheus} style={{width: 100, height: 100}}/>
      </View> 
      </View>

      <View style={styles.content}>{renderizarConteudo()}</View>

      <View style={styles.menu}>
        <Text
          style={[styles.menuItem, abaAtiva === 'Curriculo' && styles.menuItemAtiva]}
          onPress={() => setAbaAtiva('Curriculo')}
        >
          Minhas informações
        </Text>
        <Text
          style={[styles.menuItem, abaAtiva === 'SobreMim' && styles.menuItemAtiva]}
          onPress={() => setAbaAtiva('SobreMim')}
        >
          Sobre mim
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 30,
    borderBottomWidth: 2,
    borderBottomColor: '#09292c',
  },
  meuNome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
  },
  menuItem: {
    fontSize: 18,
    color: '#09292c',
  },
  menuItemAtiva: {
    fontWeight: 'bold',
    color: 'blue',
  },
  Perfil:{
    justifyContent:'flex-end'
  }
});

export default App;