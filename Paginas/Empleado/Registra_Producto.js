import React, { Component } from 'react';
import { Alert, Button, ImageBackground, Platform, StyleSheet, Text, TextInput, View, } from 'react-native';

class Registra_Producto extends React.Component {

  state = {
    id: '',
    nombre: '',
    num_volumen: '',
    compania: '',
    editorial:'',
    year: '',
    precio: '',
    cantidad: '',
    imagen: ''
  };

  cambiaID=(inputText) => {
    this.setState({id:inputText})
  }
  cambiaNombre=(inputText) => {
    this.setState({nombre:inputText})
  }
  cambiaNum=(inputText) => {
    this.setState({num_volumen:inputText})
  }
  cambiaCompania=(inputText) => {
    this.setState({compania:inputText})
  }
  cambiaEditorial=(inputText) => {
    this.setState({editorial:inputText})
  }
  cambiaYear=(inputText) => {
    this.setState({year:inputText})
  }
  cambiaPrecio=(inputText) => {
    this.setState({precio:inputText})
  }
  cambiaCantidad=(inputText) => {
    this.setState({cantidad:inputText})
  }
  cambiaImagen=(inputText) => {
    this.setState({imagen:inputText})
  }
  
  limpiar = () => {
    this.setState({
      id: '',
      nombre: '',
      num_volumen: '',
      compania: '',
      editorial:'',
      year: '',
      precio: '',
      cantidad: '',
      imagen: ''
    });
  };

  salva=()=>{
    var n = this.state.year.length
    console.log(n)
    if(this.state.id === ''){
        Alert.alert('Aviso', 'Debe de insertar el ID.', [
          {
            text: 'ok',
            onPress: () => { console.log('ok') },
          },
        ]);
      }

    else if(this.state.nombre === ''){
      Alert.alert('Aviso', 'Debe de insertar el nombre del cómic.', [
        {
          text: 'ok',
          onPress: () => { console.log('ok') },
        },
      ]);
    }

    else if(this.state.num_volumen === ''){
      Alert.alert('Aviso', 'Debe de insertar el volumen del cómic.', [
        {
          text: 'ok',
          onPress: () => { console.log('ok') },
        },
      ]);
    }
    else if(this.state.compania === ''){
      Alert.alert('Aviso', 'Debe de insertar el nombre de la compañía del cómic.', [
        {
          text: 'ok',
          onPress: () => { console.log('ok') },
        },
      ]);
    }
    else if(this.state.editorial === ''){
      Alert.alert('Aviso', 'Debe de insertar el nombre de la editorial del cómic.', [
        {
          text: 'ok',
          onPress: () => { console.log('ok') },
        },
      ]);
    }
    else if(this.state.year === ''){
      Alert.alert('Aviso', 'Debe de insertar el año de lanzamiento del cómic.', [
        {
          text: 'ok',
          onPress: () => { console.log('ok') },
        },
      ]);
    }
    else if(n < 4){
      Alert.alert('Aviso', 'Debe de insertar los 4 dígitos del año.', [
        {
          text: 'ok',
          onPress: () => { console.log('ok') },
        },
      ]);
    }
    else if(this.state.precio === ''){
      Alert.alert('Aviso', 'Debe de insertar el precio del cómic.', [
        {
          text: 'ok',
          onPress: () => { console.log('ok') },
        },
      ]);
    }
    else if(this.state.precio < 0){
      Alert.alert('Aviso', 'No se aceptan valores negativos.', [
        {
          text: 'ok',
          onPress: () => { console.log('ok') },
        },
      ]);
    }
    else if(this.state.cantidad === ''){
      Alert.alert('Aviso', 'Debe de insertar la cantidad disponible en stock del cómic.', [
        {
          text: 'ok',
          onPress: () => { console.log('ok') },
        },
      ]);
    }
    else if(this.state.cantidad < 0){
      Alert.alert('Aviso', 'No se aceptan valores negativos.', [
        {
          text: 'ok',
          onPress: () => { console.log('ok') },
        },
      ]);
    }
    else if(this.state.imagen === ''){
      Alert.alert('Aviso', 'Debe de insertar el link de la imagen del cómic.', [
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
          "Se ha registrado con éxito. ¿Desea ingresar otro producto?",
          [{text: 'SÍ'}, 
          {text: 'NO', onPress: () => {this.props.navigation.navigate('Menu_Empleado')}}],        
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
xhttp.open("GET", 'https://mppag.000webhostapp.com/Seminario_Bases_Datos/Empleado/registra_producto.php?id='+this.state.id+'&nombre='+this.state.nombre+'&num_volumen='+this.state.num_volumen+'&compania='+this.state.compania+'&editorial='+this.state.editorial+'&year='+this.state.year+'&precio='+this.state.precio+'&cantidad='+this.state.cantidad+'&imagen='+this.state.imagen, true);
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
            placeholder='ID del producto'
            keyboardType='text'
            style={styles.input}
            placeholderTextColor='black'
            backgroundColor = 'white'
            onChangeText={this.cambiaID}
            value={this.state.id}
            />
            <TextInput
            placeholder='Nombre'
            keyboardType='text'
            style={styles.input}
            placeholderTextColor='black'
            backgroundColor = 'white'
            onChangeText={this.cambiaNombre}
            value={this.state.nombre}
            />
            <TextInput
            placeholder='Volumen'
            keyboardType='numeric'
            style={styles.input}
            placeholderTextColor='black'
            backgroundColor = 'white'
            onChangeText={this.cambiaNum}
            value={this.state.num_volumen}
            />
            <TextInput
            placeholder='Compañía'
            keyboardType='text'
            style={styles.input}
            placeholderTextColor='black'
            backgroundColor = 'white'
            onChangeText={this.cambiaCompania}
            value={this.state.compania}
            />
            <TextInput
            placeholder='Editorial'
            keyboardType='text'
            style={styles.input}
            placeholderTextColor='black'
            backgroundColor = 'white'
            onChangeText={this.cambiaEditorial}
            value={this.state.editorial}
            />
            <TextInput
            placeholder='Año'
            keyboardType='numeric'
            style={styles.input}
            placeholderTextColor='black'
            backgroundColor = 'white'
            onChangeText={this.cambiaYear}
            value={this.state.year}
            />
            <TextInput
            placeholder='Precio'
            keyboardType='numeric'
            style={styles.input}
            placeholderTextColor='black'
            backgroundColor = 'white'
            onChangeText={this.cambiaPrecio}
            value={this.state.precio}
            />
            <TextInput
            placeholder='Cantidad'
            keyboardType='numeric'
            style={styles.input}
            placeholderTextColor='black'
            backgroundColor = 'white'
            onChangeText={this.cambiaCantidad}
            value={this.state.cantidad}
            />
            <TextInput
            placeholder='Imagen (link)'
            keyboardType='text'
            style={styles.input}
            placeholderTextColor='black'
            backgroundColor = 'white'
            onChangeText={this.cambiaImagen}
            value={this.state.imagen}
            />
          <View style={styles.button}>
            <Button title="Registrar Producto" onPress={this.salva} color="#FF"/>
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

export default Registra_Producto;