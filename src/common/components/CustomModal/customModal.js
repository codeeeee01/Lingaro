import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Card} from 'native-base';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import _ from 'lodash';
import barricade from '../../../assets/barricade.png';
import defaultFunction from '../../utils/tests';
import styles from './styles';

const CustomModal = ({
  isVisible,
  title,
  message,
  onPressAgree,
  buttonTextAgree,
  image,
}) => (
  <Modal
    isVisible={isVisible}
    animationType="slide"
    presentationStyle="overFullScreen">
    <View style={styles.modalView}>
      <Card style={styles.card}>
        <View style={styles.modalImage}>
          <Image
            style={styles.headerDisagreeImage}
            source={_.isEmpty(image) ? barricade : {uri: image}}
          />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.textParagraph}>{message}</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            disabled={false}
            onPress={onPressAgree}
            style={styles.btn}>
            <Text style={styles.btnLabel}>{buttonTextAgree.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  </Modal>
);

CustomModal.propTypes = {
  isVisible: PropTypes.bool,
  title: PropTypes.string,
  message: PropTypes.string,
  onPressAgree: PropTypes.func,
  buttonTextAgree: PropTypes.string,
  image: PropTypes.string,
};

CustomModal.defaultProps = {
  isVisible: false,
  title: 'Alert title',
  message: 'Alert message',
  onPressAgree: defaultFunction,
  buttonTextAgree: '',
  image: '',
};

export default CustomModal;
