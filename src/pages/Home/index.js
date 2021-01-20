import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation} from '@react-navigation/native'

export default function Home() {
    const nav = useNavigation();
 return (
   <View>
       <Text>Home</Text>
       <Button
       title="Contato"
       onPress={ () => nav.navigate('Contato')}
       />
       <Button
       title="abrir menu"
       onPress={ () => nav.toggleDrawer() }
       />
   </View>
  );
}