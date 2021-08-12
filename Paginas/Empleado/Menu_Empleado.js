import * as React from 'react';
import {  Alert, Button, View, Text, ImageBackground, StyleSheet,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class Menu_Empleado extends React.Component {
  constructor(props) {
    super(props);

    let datos = this.props.route.params.datos.split(',');
    console.log(datos)
    this.state = {
      id: datos[0],
      rfc: datos[1],
      nombre: datos[2],
      telefono: datos[3],
      tipo_usuario: datos[4],
      fecha_ingreso: datos[5],
      salario: datos[6],
      activo: datos[7],
      password: datos[8],
      id_sucursal: datos[9],
      imagen: datos[10]
    };
  }

  render() {
    return (
      <ImageBackground source={require('../Fondo_1.jpg')} style={styles.image}>
        <View>
          <Text style={styles.textmenu}>ComicZone</Text>
          <Text style={styles.textBlue}>Bienvenido, {this.state.nombre}.</Text>
          <View style={styles.button}>
            <Button
              title="Registrar producto"
              onPress={() => this.props.navigation.navigate('Registra_Producto')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Buscar producto"
              onPress={() => this.props.navigation.navigate('Busca_Producto')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Mostrar todos los productos"
              onPress={() =>
                this.props.navigation.navigate('Mostrar_Productos')
              }
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Modificar productos"
              onPress={() =>
                this.props.navigation.navigate('Recupera_Producto')
              }
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Eliminar productos"
              onPress={() =>
                this.props.navigation.navigate('Elimina_Producto')
              }
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  textmenu: {
    marginTop: 25,
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'notoserif',
    backgroundColor: 'red',
    color: 'white',
  },
  textBlue: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'notoserif',
    backgroundColor: 'blue',
    color: 'white',
  },
  button: {
    width: '90%',
    margin: 10,
    backgroundColor: 'blue',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default Menu_Empleado;
