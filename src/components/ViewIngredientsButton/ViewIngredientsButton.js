import React from 'react';
import { TouchableHighlight, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default function ViewIngredientsButton (props) {
    return /*( //onPress={props.onPress} para clickear e ir a esa opcion
      <TouchableHighlight underlayColor='rgba(73,182,77,0.9)'> 
        <View style={styles.container}>
          <Text style={styles.text}>Cantidad de semillas</Text>
        </View>
      </TouchableHighlight>
    );*/
}

ViewIngredientsButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string
};
