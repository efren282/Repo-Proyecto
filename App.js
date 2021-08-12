import * as React from 'react';
import { Button, View, Text, ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Registra_Producto from './Paginas/Empleado/Registra_Producto'
import Login from './Paginas/Login'
import Menu_Gerente from './Paginas/Gerente/Menu_Gerente'
import Menu_Empleado from './Paginas/Empleado/Menu_Empleado'
import Busca_Producto from './Paginas/Empleado/Busca_Producto'
import Mostrar_Productos from './Paginas/Empleado/Mostrar_Productos'
import Recupera_Producto from './Paginas/Empleado/Recupera_Producto'
import Modifica_Producto from './Paginas/Empleado/Modifica_Producto'
import Registra_Sucursal from './Paginas/Gerente/Registra_Sucursal'
import Registra_Empleado from './Paginas/Gerente/Registra_Empleado'
import Busca_Empleado from './Paginas/Gerente/Busca_Empleado'
import Muestra_Empleado from './Paginas/Gerente/Muestra_Empleado'
import Mostrar_Empleados from './Paginas/Gerente/Mostrar_Empleados'
import Recupera_Empleado from './Paginas/Gerente/Recupera_Empleado'
import Modifica_Empleado from './Paginas/Gerente/Modifica_Empleado'
import Muestra_Producto from './Paginas/Empleado/Muestra_Producto'
import Busca_Sucursal from './Paginas/Gerente/Busca_Sucursal'
import Muestra_Sucursal from './Paginas/Gerente/Muestra_Sucursal'
import Mostrar_Sucursales from './Paginas/Gerente/Mostrar_Sucursales'
import Elimina_Producto from './Paginas/Empleado/Elimina_Producto'
import Baja_Producto from './Paginas/Empleado/Baja_Producto'
import Elimina_Empleado from './Paginas/Gerente/Elimina_Empleado'
import Baja_Empleado from './Paginas/Gerente/Baja_Empleado'
import Activa_Empleado from './Paginas/Gerente/Activa_Empleado'
import Reactiva_Empleado from './Paginas/Gerente/Reactiva_Empleado'
import Remover_Empleado from './Paginas/Gerente/Remover_Empleado'
import Baja_Sistema from './Paginas/Gerente/Baja_Sistema'




const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View>
      <Text style={styles.textmenu}>ComicZone</Text>
      <View style={styles.button}>
      <Button
        title="Inicio de sesión"
        onPress={() => navigation.navigate('Login')}
      />
      </View>
    </View>
    
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Menu_Gerente" component={Menu_Gerente} />
        <Stack.Screen name="Menu_Empleado" component={Menu_Empleado} />
        <Stack.Screen name="Registra_Producto" component={Registra_Producto} />
        <Stack.Screen name="Busca_Producto" component={Busca_Producto}/>
        <Stack.Screen name="Muestra_Producto" component={Muestra_Producto}/>
        <Stack.Screen name="Recupera_Producto" component={Recupera_Producto}/>
        <Stack.Screen name="Mostrar_Productos" component={Mostrar_Productos}/>        
        <Stack.Screen name="Modifica_Producto" component={Modifica_Producto}/>
        <Stack.Screen name="Registra_Empleado" component={Registra_Empleado}/>
        <Stack.Screen name="Busca_Empleado" component={Busca_Empleado}/>
        <Stack.Screen name="Muestra_Empleado" component={Muestra_Empleado}/>
        <Stack.Screen name="Mostrar_Empleados" component={Mostrar_Empleados}/>
        <Stack.Screen name="Recupera_Empleado" component={Recupera_Empleado}/>
        <Stack.Screen name="Modifica_Empleado" component={Modifica_Empleado}/>
        <Stack.Screen name="Registra_Sucursal" component={Registra_Sucursal}/>
        <Stack.Screen name="Busca_Sucursal" component={Busca_Sucursal}/>
        <Stack.Screen name="Muestra_Sucursal" component={Muestra_Sucursal}/>
        <Stack.Screen name="Mostrar_Sucursales" component={Mostrar_Sucursales}/>
        <Stack.Screen name="Elimina_Producto" component={Elimina_Producto}/>
        <Stack.Screen name="Baja_Producto" component={Baja_Producto}/>
        <Stack.Screen name="Elimina_Empleado" component={Elimina_Empleado}/>
        <Stack.Screen name="Baja_Empleado" component={Baja_Empleado}/>
        <Stack.Screen name="Activa_Empleado" component={Activa_Empleado}/>
        <Stack.Screen name="Reactiva_Empleado" component={Reactiva_Empleado}/>
        <Stack.Screen name="Remover_Empleado" component={Remover_Empleado}/>
        <Stack.Screen name="Baja_Sistema" component={Baja_Sistema}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles= StyleSheet.create({
  textmenu:{
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
  }
});

export default App