import React from 'react';
import { View, Image, TouchableWithoutFeedback, StyleSheet } from 'react-native';

export default function ImageScreen({ navigation }) {
  const handlePress = () => {
    // Navega a la pantalla que deseas, por ejemplo, "Home"
    navigation.navigate('User_xx34');
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <Image 
          source={require('../../../assets/login.png')}
          style={styles.image}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
