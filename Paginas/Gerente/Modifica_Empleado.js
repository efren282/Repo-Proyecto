import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TextInput, Alert, ImageBackground} from 'react-native';

class Modifica_Empleado extends React.Component {
  constructor(props) {
    super(props);

    let datos = this.props.route.params.datos.split(',');
    this.state = {
      id: datos[0],
      rfc: datos[1],
      nombre: datos[2],
      telefono: datos[3],
      tipo_usuario: datos[4],
      salario: datos[6],
      password: datos[8],
      id_sucursal: datos[9],
      imagen: datos[10],
      aux: datos[0]
    };
  }

  cambiaID=(inputText) => {
    this.setState({id:inputText})
  }
  cambiaRFC=(inputText) => {
    this.setState({rfc:inputText})
  }
  cambiaNombre=(inputText) => {
    this.setState({nombre:inputText})
  }
  cambiaTelefono=(inputText) => {
    this.setState({telefono:inputText})
  }
  cambiaUsuario=(inputText) => {
    this.setState({tipo_usuario:inputText})
  }
  cambiaSalario=(inputText) => {
    this.setState({salario:inputText})
  }
  cambiaPassword=(inputText) => {
    this.setState({password:inputText})
  }
  cambiaSucursal=(inputText) => {
    this.setState({id_sucursal:inputText})
  }
  cambiaImagen=(inputText) => {
    this.setState({imagen:inputText})
  }

  modificar=()=>{
    if(this.state.id === ''){
        Alert.alert('Aviso', 'Debe de insertar el ID.', [
          {
            text: 'ok',
            onPress: () => { console.log('ok') },
          },
        ]);
      }

    else if(this.state.rfc === ''){
      Alert.alert('Aviso', 'Debe de insertar el RFC del empleado.', [
        {
          text: 'ok',
          onPress: () => { console.log('ok') },
        },
      ]);
    }
    else if(this.state.nombre === ''){
      Alert.alert('Aviso', 'Debe de insertar el nombre del empleado.', [
        {
          text: 'ok',
          onPress: () => { console.log('ok') },
        },
      ]);
    }
    else if(this.state.telefono === ''){
      Alert.alert('Aviso', 'Debe de insertar el teléfono del empleado.', [
        {
          text: 'ok',
          onPress: () => { console.log('ok') },
        },
      ]);
    }
    else if(this.state.tipo_usuario === ''){
      Alert.alert('Aviso', 'Debe de insertar el tipo de usuario del empleado.', [
        {
          text: 'ok',
          onPress: () => { console.log('ok') },
        },
      ]);
    }
    else if(this.state.salario === ''){
      Alert.alert('Aviso', 'Debe de insertar el salario del empleado.', [
        {
          text: 'ok',
          onPress: () => { console.log('ok') },
        },
      ]);
    }else if(this.state.password === ''){
      Alert.alert('Aviso', 'Debe de insertar la contraseña.', [
        {
          text: 'ok',
          onPress: () => { console.log('ok') },
        },
      ]);
    }else if(this.state.id_sucursal === ''){
      Alert.alert('Aviso', 'Debe de insertar la sucursal del empleado.', [
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
            [{text: 'ok', onPress: () => this.props.navigation.navigate('Recupera_Empleado')}],
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
    xhttp.open("GET", 'https://mppag.000webhostapp.com/Seminario_Bases_Datos/Gerente/modifica_empleado.php?id='+this.state.aux+'&aux='+this.state.id+'&nombre='+this.state.nombre+'&telefono='+this.state.telefono+'&tipo_usuario='+this.state.tipo_usuario+'&salario='+this.state.salario+'&password='+this.state.password+'&id_sucursal='+this.state.id_sucursal+'&imagen='+this.state.imagen, true);
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
            placeholder="ID del empleado"
            keyboardType="text"
            style={styles.input}
            placeholderTextColor="black"
            backgroundColor = "white"
            onChangeText={this.cambiaID}
            value={this.state.id}
          />
          <TextInput
            placeholder="RFC"
            keyboardType="text"
            style={styles.input}
            placeholderTextColor="black"
            backgroundColor = "white"
            onChangeText={this.cambiaRFC}
            value={this.state.rfc}
          />
          <TextInput
            placeholder="Nombre del empleado"
            keyboardType="text"
            style={styles.input}
            placeholderTextColor="black"
            backgroundColor = "white"
            onChangeText={this.cambiaNombre}
            value={this.state.nombre}
          />
          <TextInput
            placeholder="Teléfono del empleado"
            keyboardType="numeric"
            style={styles.input}
            placeholderTextColor="black"
            backgroundColor = "white"
            onChangeText={this.cambiaTelefono}
            value={this.state.telefono}
          />
          <TextInput
            placeholder="Tipo de usuario del empleado"
            keyboardType="numeric"
            style={styles.input}
            placeholderTextColor="black"
            backgroundColor = "white"
            onChangeText={this.cambiaUsuario}
            value={this.state.tipo_usuario}
          />
          <TextInput
            placeholder="Salario"
            keyboardType="numeric"
            style={styles.input}
            placeholderTextColor="black"
            backgroundColor = "white"
            onChangeText={this.cambiaSalario}
            value={this.state.salario}
          />
          <TextInput
            placeholder="Contraseña del empleado"
            keyboardType="text"
            secureTextEntry = { true }
            style={styles.input}
            placeholderTextColor="black"
            backgroundColor = "white"
            onChangeText={this.cambiaPassword}
            value={this.state.password}
          />
          <TextInput
            placeholder="ID de sucursal"
            keyboardType="text"
            style={styles.input}
            placeholderTextColor="black"
            backgroundColor = "white"
            onChangeText={this.cambiaSucursal}
            value={this.state.id_sucursal}
          />
          <TextInput
            placeholder="Imagen del empleado (link)"
            keyboardType="text"
            style={styles.input}
            placeholderTextColor="black"
            backgroundColor = "white"
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

export default Modifica_Empleado