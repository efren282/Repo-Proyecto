import React, { Component } from 'react';
import { Alert, Button, ImageBackground, Platform, StyleSheet, Text, TextInput, View, } from 'react-native';

class Registra_Sucursal extends React.Component {

  state = {
    id: '',
    nombre: '',
    telefono: '',
    direccion: ''
  };

  cambiaID = inputText => {
    this.setState({ id: inputText });
  };
  cambiaNombre = inputText => {
    this.setState({ nombre: inputText });
  };
  cambiaTelefono = inputText => {
    this.setState({ telefono: inputText });
  };
  cambiaDireccion = inputText => {
    this.setState({ direccion: inputText });
  };

  limpiar = () => {
    this.setState({
      id: '',
      nombre: '',
      telefono: '',
      direccion: ''
    });
  };

  salva=()=>{
    if(this.state.nombre === ''){
      Alert.alert('Aviso', 'Debe de insertar el ID de la sucursal.', [
        {
          text: 'ok',
          onPress: () => { console.log('ok') },
        },
      ]);
    }
    else if(this.state.compañia === ''){
      Alert.alert('Aviso', 'Debe de insertar el nombre de la sucursal.', [
        {
          text: 'ok',
          onPress: () => { console.log('ok') },
        },
      ]);
    }
    else if(this.state.editorial === ''){
      Alert.alert('Aviso', 'Debe de insertar el teléfono de la sucursal.', [
        {
          text: 'ok',
          onPress: () => { console.log('ok') },
        },
      ]);
    }
    else if(this.state.año === ''){
      Alert.alert('Aviso', 'Debe de insertar la dirección de la sucursal.', [
        {
          text: 'ok',
          onPress: () => { console.log('ok') },
        },
      ]);
    }
    else{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      if(xhttp.responseText == "1"){
        Alert.alert(
          "Aviso",
          "Se ha registrado con éxito. ¿Desea ingresar otra sucursal?",
          [{text: 'SÍ'}, 
          {text: 'NO', onPress: () => {this.props.navigation.navigate('Menu_Gerente')}}],        
        )
       }
       else{
         Alert.alert(
          "Aviso",
          "El ID ingresado ya se encuentra registrado.",
          [{text: 'ok', onPress: () => {console.log("ok")}}])  
       }
    }
};
xhttp.open("GET", 'https://mppag.000webhostapp.com/Seminario_Bases_Datos/Gerente/registra_sucursal.php?id='+this.state.id+'&nombre='+this.state.nombre+'&telefono='+this.state.telefono+'&direccion='+this.state.direccion, true);
xhttp.send();
this.limpiar();
    }
  }

  render() {
    return (
      <ImageBackground
          source={require('../Fondo_1.jpg')}
          style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.textmenu}>Registro de producto</Text>
          <TextInput
            placeholder="ID de la sucursal"
            keyboardType="text"
            style={styles.input}
            placeholderTextColor="black"
            backgroundColor = "white"
            onChangeText={this.cambiaID}
            value={this.state.id}
          />
          <TextInput
            placeholder="Nombre de la sucursal"
            keyboardType="text"
            style={styles.input}
            placeholderTextColor="black"
            backgroundColor = "white"
            onChangeText={this.cambiaNombre}
            value={this.state.nombre}
          />
          <TextInput
            placeholder="Teléfono de la sucursal"
            keyboardType="numeric"
            style={styles.input}
            placeholderTextColor="black"
            backgroundColor = "white"
            onChangeText={this.cambiaTelefono}
            value={this.state.telefono}
          />
          <TextInput
            placeholder="Dirección de la sucursal"
            keyboardType="text"
            style={styles.input}
            placeholderTextColor="black"
            backgroundColor = "white"
            onChangeText={this.cambiaDireccion}
            value={this.state.direccion}
          />
          <View style={styles.button}>
            <Button title="Registrar sucursal" onPress={this.salva} color="#FF"/>
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

export default Registra_Sucursal;