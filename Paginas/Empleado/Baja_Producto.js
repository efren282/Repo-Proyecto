import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TextInput, Alert, ImageBackground} from 'react-native';

class Baja_Producto extends React.Component {
  constructor(props) {
    super(props);

    let datos = this.props.route.params.datos.split(',');

    this.state={
      id: datos,
    };
  }

  elimina=()=>{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      if(xhttp.responseText == "1"){
         Alert.alert(
          "Aviso",
          "Se ha eliminado con éxito",
          [{text: 'ok', onPress: () => console.log("ok")}],
          this.props.navigation.navigate('Menu_Empleado')
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
  xhttp.open("GET", 'https://mppag.000webhostapp.com/Seminario_Bases_Datos/Empleado/baja_producto.php?id='+this.state.id, true);
  xhttp.send();
}

  render() {
    return (
      <ImageBackground
      source={require('../Fondo_1.jpg')}
      style={styles.image}>
        <View>
          <Text style={styles.textmenu}>Eliminar producto</Text>
            <View style={styles.button}>
              <Button
              title="SÍ"
              onPress={this.elimina}
              color="#FF"
              />
            </View>
            <View style={styles.button}>
              <Button
              title="NO"
              onPress={()=>this.props.navigation.navigate('Menu_Empleado')}
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
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});

export default Baja_Producto