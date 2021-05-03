import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, Image, ActivityIndicator } from "react-native"
import { AppContext } from '../../context'
import { singin } from '../../api/authService';
import { initialData } from '../../api/dataService';

const Login = () => {
  const { setToken } = useContext(AppContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Handler login button to call loginService, validate dummy user and return dummy token
  const handleButtonLogin = async () => {
    setLoading(true);
    setMessage('');
    let resp = await singin({username, password});
    if(!resp.error) {
      setToken(resp.data.token);
    }else {
      setMessage('Usuario y/o contraseña son inválidas');
      setLoading(false);
    }
  }

  // Init render component load init data session storage dummy
  const loadData = async () => {
    await initialData();
  }

  useEffect(() => {
    loadData();
    return(() => {
      setMessage('');
      setLoading(false);
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mis Finanzas</Text>
      <View style={styles.containerLogo}>
        <Image style={styles.logo} source={{uri: 'https://www.creativefabrica.com/wp-content/uploads/2019/09/Money-vector-finance-symbol-by-hartgraphic-580x386.jpg'}} />
      </View>
      <SafeAreaView>
        <Text>Usuario</Text>
        <TextInput
          testID="test-username"
          style={styles.input}
          onChangeText={setUsername}
          value={username}
        />
        <Text>Password</Text>
        <TextInput
          testID="test-password"
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          maxLength={6}
        />
        {loading
          ? <ActivityIndicator size="small" color="#841584" />
          : <Button testID="sumbitLogin" style={styles.buttonLoggin} onPress={handleButtonLogin} title="Ingresar" color="#841584" />
        }
      </SafeAreaView>
      <View style={styles.containerLogo}>
        <Text testID="test-error-message" style={{color: '#e74c3c', marginTop: '25px'}}>{message}</Text>
      </View>
      <View style={styles.containerLogo}>
        <Text style={{color: '#3498db', marginTop: '25px'}}>
          {JSON.stringify('usuario: admin, password: admin')}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
    flex: 1,
    height: '100%',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    display: 'flex',
	},
	text: {
		fontWeight: "light",
    fontSize: 30,
    display: 'flex',
    justifyContent: 'center',
    marginTop: '15px'
	},
  input: {
    height: 40,
    borderWidth: 1,
    marginTop: '10px',
    marginBottom: '30px',
    padding: '5px'
  },
  containerLogo: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  buttonLoggin: {
    padding: '10px',
    marginTop: '100px'
  },
  logo: {
    width: 66,
    height: 58,
    marginTop: '20px'
  },
})

export default Login;