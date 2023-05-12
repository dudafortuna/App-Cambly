import React from 'react';
import { StyleSheet, View, Text, Button, Image , TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Input } from 'react-native-elements';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/cambly.png')}
      />
      <Text style={styles.text}>WELCOME!</Text>
      <TouchableOpacity style={styles.botao1} onPress={() => navigation.navigate('Opcoes')}>
      <Text style={styles.botaoTexto}> Continue </Text>
          </TouchableOpacity>

    </View>
  );
};

const OpcoesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/cambly.png')}
      />
      <TouchableOpacity style={styles.botao2} onPress={() => navigation.navigate('Opcoes')}>
      <Text style={styles.botaoTexto2}> Login </Text>
          </TouchableOpacity>

        <TouchableOpacity style={styles.botao3} onPress={() => navigation.navigate('Opcoes')}>
      <Text style={styles.botaoTexto3}> Sing In </Text>
          </TouchableOpacity>
    </View>
  );
};

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Input placeholder="E-mail" />
      <Input placeholder="Senha" secureTextEntry />
      <Button
        title="Enviar"
        onPress={() => navigation.navigate('loginSusesso')}
        style={styles.button}
      />
    </View>
  );
};

const CadastroScreen = () => {
  return (
    <View style={styles.container}>
      <Input placeholder="Nome" />
      <Input placeholder="Data de Nascimento" />
      <Input placeholder="E-mail" />
      <Input placeholder="Senha" secureTextEntry />
      <Button
        title="Enviar"
        onPress={() => navigation.navigate('CadastroSusesso')}
        style={styles.button}
      />
    </View>
  );
};

const loginSusesso = () => {
  return (
    <View style={styles.container}>
      <Input placeholder="E-mail" />
      <Button
        title="Enviar"
        onPress={() => navigation.navigate('Get Start')}
        style={styles.button}
      />
    </View>
  );
};

const CadastroSusesso = () => {
  return (
    <View style={styles.container}>
      <Input placeholder="Nome" />
      <Button
        title="Enviar"
        onPress={() => navigation.navigate('Get Start')}
        style={styles.button}
      />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Opcoes" component={OpcoesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    marginVertical: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  botao1: {
    backgroundColor: '#3A979F',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    padding: 50,
    
  },
    botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
 botao2: {
    backgroundColor: '#3A979F',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    padding: 50,
  },
   botaoTexto2: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
   botao3: {
    backgroundColor: '#3A979F',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    padding: 50,
    marginTop: 20,
    
  },
  botaoTexto3: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
})

export default App;
``