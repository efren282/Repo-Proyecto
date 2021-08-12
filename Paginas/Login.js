import React, { Component } from 'react';
import { Alert, Button, ImageBackground, Platform, StyleSheet, Text, TextInput, View, } from 'react-native';

class Login extends React.Component {
  state = {
    id_emp: '',
    pw: '',
  };
  constructor(props) {
    super(props);
  this.state={
      id: '',
      rfc: '',
      nombre: '',
      telefono: '',
      tipo_usuario: '',
      fecha_ingreso: '',
      salario: '',
      activo: '',
      password: '',
      id_sucursal: '',
      imagen: ''
    };
  }
  cambiaUsuario = inputText => {
    this.setState({ id_emp: inputText });
  };
  cambiaPassword = inputText => {
    this.setState({ pw: inputText });
  };

  ingreso=()=>{
  /*if(this.state.id_emp === ''){
    Alert.alert(
        "Aviso",
        "Ingresa el ID para continuar.",
        [{text: 'ok', onPress: () => {console.log("ok")}}])
  }
  else if(this.state.pw == ''){
    Alert.alert(
        "Aviso",
        "Ingresa la contraseña para continuar.",
        [{text: 'ok', onPress: () => {console.log("ok")}}])
  }*/
  //else{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = () => {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    if(xhttp.responseText == '0'){
        Alert.alert(
        "Aviso",
        "Correo o contraseña incorrecta, intente de nuevo.",
        [{text: 'ok', onPress: () => {console.log("ok")}}])
      }
      else{
        console.log('Debug')
        var datos = xhttp.responseText.split(',');
        console.log(datos)
        this.setState({id: datos[0]});
        this.setState({rfc: datos[1]});
        this.setState({nombre: datos[2]});
        this.setState({telefono: datos[3]});
        this.setState({tipo_usuario: datos[4]});
        this.setState({fecha_ingreso: datos[5]});
        this.setState({salario: datos[6]});
        this.setState({activo: datos[7]});
        this.setState({password: datos[8]});
        this.setState({id_sucursal: datos[9]});
        this.setState({imagen: datos[10]});
        if(this.state.activo == '1'){
          if(this.state.tipo_usuario == '1'){
          this.props.navigation.navigate('Menu_Empleado', {datos: xhttp.responseText});
          }
          if(this.state.tipo_usuario == '2'){
            this.props.navigation.navigate('Menu_Gerente', {datos: xhttp.responseText});
          }
        }
        else{
           Alert.alert(
          "Aviso",
          "La cuenta está desabilitada, contacte con un gerente para reactivarla.",
          [{text: 'ok', onPress: () => {console.log("ok")}}])
        }
      }
  }
};
xhttp.open("GET", 'https://mppag.000webhostapp.com/Seminario_Bases_Datos/login.php?id_emp='+this.state.id_emp+'&pw='+this.state.pw, true);
xhttp.send();
  }
  //}
  render(){
    return (
      <ImageBackground
          source={require('./Fondo_1.jpg')}
          style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.textmenu}>Inicio de sesión</Text>
          <TextInput
            placeholder="ID de empleado"
            keyboardType="text"
            style={styles.input}
            placeholderTextColor="black"
            backgroundColor = "white"
            onChangeText={this.cambiaUsuario}
            value={this.state.id_emp}
          />
          <View>
          <TextInput
            placeholder="Contraseña"
            keyboardType="text"
            secureTextEntry = { true }
            style={styles.input}
            placeholderTextColor="black"
            backgroundColor = "white"
            onChangeText={this.cambiaPassword}
            value={this.state.pw}
          />
          </View>
          <View style={styles.button}>
            <Button title="Iniciar sesión" 
            onPress={this.ingreso}
            color="#FF"/>
          </View>
        </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  textmenu: {
    marginTop:25,
    textAlign:"center",
    fontSize:30,
    fontFamily: 'notoserif',
    backgroundColor: "red",
    color: "white",
  },
  button:{
    width:"90%",
    margin:10,
    backgroundColor: "blue",    
  },
  input: {
    width: 200,
    height: 40,
    padding: 10,
    bordercolor: 'blue',
    borderWidth: 2,
    marginLeft: 100,
    marginTop: 10,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});

export default Login;