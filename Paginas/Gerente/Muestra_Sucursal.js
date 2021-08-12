import React, { Component } from 'react';
import {View, Text,Button,StyleSheet,TextInput,Alert,ImageBackground,ActivityIndicator,ScrollView,FlatList,SafeAreaView,TouchableOpacity,Image} from 'react-native';

export default class Muestra_Sucursal extends Component {
  constructor(props) {
    super(props);
    let datos = this.props.route.params.datos.split(',');
    this.state = {
      dataSource: [],
      isLoading: true,
      id: datos[0]
    };
  }
  renderItem = ({ item }) => {
    return (
      <View style={{flex:1, flexDirection:'row', marginBottom: 3}}>
        <View style={{flex:1, justifyContent:'center'}}>
          <Text style={{fontSize:14, color:'white', backgroundColor:'red', alignSelf: 'flex-start'}}>ID: {item.id}</Text>
          <Text style={styles.text}>Nombre: {item.nombre}</Text>
          <Text style={styles.text}>Teléfono: {item.telefono}</Text>
          <Text style={styles.text}>Dirección: {item.direccion}</Text>
        </View>
      </View>
    );
  };

  renderSeparator= () =>{
    return(
      <View style={{height:1, width:'100%', backgroundColor: 'black'}}>
      </View>
    )
  }

  componentDidMount() {
    console.log(this.state.id)
    const url =
      'https://mppag.000webhostapp.com/Seminario_Bases_Datos/Gerente/muestra_sucursal.php?id='+this.state.id;
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.sucursal
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    if(this.state.isLoading){
      return (
          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
              <ActivityIndicator size="large" color="#330066" animating/>
          </View>
      )
    }
    else{
    return (
      <View style={styles.container}>
      <ImageBackground
          source={require('../Fondo_1.jpg')}
          style={styles.image}>
        <FlatList 
          data={this.state.dataSource} 
          renderItem={this.renderItem} 
          keyExtractor={(item, index) => index}
        />
        </ImageBackground>
      </View>
    );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text:{
    fontSize:12, 
    color:'white', 
    backgroundColor:'blue', 
    alignSelf: 'flex-start'
  }
});