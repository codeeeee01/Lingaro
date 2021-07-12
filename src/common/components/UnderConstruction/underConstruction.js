import React from 'react';
import {Text, View, Image} from 'react-native';
import unavailable from '../../../assets/underConstruction.png';
import styles from './styles';

function UnderConstruction({}) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image source={unavailable} style={styles.image} />
        <Text style={styles.label}>
          Sorry for the inconvenience, this is under construction
        </Text>
      </View>
    </View>
  );
}

export default UnderConstruction;
