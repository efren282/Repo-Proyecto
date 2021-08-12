import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TextInput, Alert, ImageBackground} from 'react-native';

class Modifica_Producto extends React.Component {
  constructor(props) {
    super(props);

    let datos = this.props.route.params.datos.split(',');
    this.state = {
      id: datos[0],
      nombre: datos[1],
      num_volumen: datos[2],
      compania: datos[3],
      editorial: datos[4],
      year: datos[5],
      precio: datos[6],
      cantidad: datos[7],
      imagen: datos[8],
      aux: datos[0]
    };
  }

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

  modificar=()=>{
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
            "Se ha modificado con éxito, los cambios se reflejarán al actualizar la página",
            [{text: 'ok', onPress: () => this.props.navigation.navigate('Menu_Empleado')}],
          )
        }
        else{
          Alert.alert(
            "Aviso",
            "Ha ocurrido un error, intente de nuevo.",
            [{text: 'ok', onPress: () => console.log("ok")}]
          )
        }
      }
    };
    xhttp.open("GET", 'https://mppag.000webhostapp.com/Seminario_Bases_Datos/Empleado/modifica_producto.php?id='+this.state.aux+'&aux='+this.state.id+'&nombre='+this.state.nombre+'&num_volumen='+this.state.num_volumen+'&compania='+this.state.compania+'&editorial='+this.state.editorial+'&year='+this.state.year+'&precio='+this.state.precio+'&cantidad='+this.state.cantidad+'&imagen='+this.state.imagen, true);
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
            placeholder=''
            keyboardType='text'
            style={styles.input}
            placeholderTextColor='black'
            backgroundColor = 'white'
            onChangeText={this.cambiaID}
            value={this.state.id}
            />
            <TextInput
            placeholder=''
            keyboardType='text'
            style={styles.input}
            placeholderTextColor='black'
            backgroundColor = 'white'
            onChangeText={this.cambiaNombre}
            value={this.state.nombre}
            />
            <TextInput
            placeholder=''
            keyboardType='text'
            style={styles.input}
            placeholderTextColor='black'
            backgroundColor = 'white'
            onChangeText={this.cambiaNum}
            value={this.state.num_volumen}
            />
            <TextInput
            placeholder=''
            keyboardType='text'
            style={styles.input}
            placeholderTextColor='black'
            backgroundColor = 'white'
            onChangeText={this.cambiaCompania}
            value={this.state.compania}
            />
            <TextInput
            placeholder=''
            keyboardType='text'
            style={styles.input}
            placeholderTextColor='black'
            backgroundColor = 'white'
            onChangeText={this.cambiaEditorial}
            value={this.state.editorial}
            />
            <TextInput
            placeholder=''
            keyboardType='text'
            style={styles.input}
            placeholderTextColor='black'
            backgroundColor = 'white'
            onChangeText={this.cambiaYear}
            value={this.state.year}
            />
            <TextInput
            placeholder=''
            keyboardType='text'
            style={styles.input}
            placeholderTextColor='black'
            backgroundColor = 'white'
            onChangeText={this.cambiaPrecio}
            value={this.state.precio}
            />
            <TextInput
            placeholder=''
            keyboardType='text'
            style={styles.input}
            placeholderTextColor='black'
            backgroundColor = 'white'
            onChangeText={this.cambiaCantidad}
            value={this.state.cantidad}
            />
            <TextInput
            placeholder=''
            keyboardType='text'
            style={styles.input}
            placeholderTextColor='black'
            backgroundColor = 'white'
            onChangeText={this.cambiaImagen}
            value={this.state.imagen}
            />
            <View style={styles.button}>
              <Button 
              title="Modificar"
              onPress={this.modificar}
              color="#FF"
              />
            </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles= StyleSheet.create({
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

export default Modifica_Producto