import React, { Component } from 'react';
import { Alert, Button, ImageBackground, Platform, StyleSheet, Text, TextInput, View, } from 'react-native';

class Recupera_Producto extends React.Component {
  state = {
    id: '',
  };

  cambiaID = inputText => {
    this.setState({ id: inputText });
  };

  buscar=()=>{
  if(this.state.id === '')  {
    Alert.alert(
        "Aviso",
        "Ingrese el ID del producto.",
        [{text: 'ok', onPress: () => {console.log("ok")}}])
  }
  else{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = () => {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    if(xhttp.responseText == "0"){
        Alert.alert(
        "Aviso",
        "No se encontró ningún comic registrado con el parámetro ingresado.",
        [{text: 'ok', onPress: () => {console.log("ok")}}])
      }
      else{
        this.props.navigation.navigate('Modifica_Producto', {datos: xhttp.responseText});
        console.log(xhttp.responseText)
      }
  }
};
xhttp.open("GET", 'https://mppag.000webhostapp.com/Seminario_Bases_Datos/Empleado/recupera_producto.php?id='+this.state.id, true);
xhttp.send();
  }
  }

  render() {
    return (
      <ImageBackground
      source={require('../Fondo_1.jpg')}
      style={styles.image}>
        <View>
          <Text style={styles.textmenu}>Modificar producto</Text>
          <TextInput
            placeholder="ID del producto"
            keyboardType="text"
            style={styles.input}
            placeholderTextColor="black"
            backgroundColor = "white"
            onChangeText={this.cambiaID}
            value={this.state.id}
          />
          <View style={styles.button}>
            <Button title="Buscar producto" onPress={this.buscar} color="#FF"           />
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

export default Recupera_Producto;