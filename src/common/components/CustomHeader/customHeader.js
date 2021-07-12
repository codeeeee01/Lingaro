/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import _ from 'lodash';
import {Header} from 'native-base';
import styles from './styles';
import {CustomModal} from '..';
import {logo, send, settings} from '../../../assets/homepage';

const divider = () => (
  <View style={{borderWidth: 0.4, borderColor: 'gainsboro'}} />
);

function CustomHeader({leftContent, middleContent, rightContent}) {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <CustomModal
        isVisible={visible}
        buttonTextAgree="Okay"
        onPressAgree={() => {
          setVisible(false);
        }}
        title="Sorry"
        message="This feature is under construction"
      />
      <Header
        iosBarStyle="dark-content"
        transparent
        androidStatusBarColor="rgba(255,255,255, 0.01)"
        style={styles.header}>
        <View style={styles.headerContainer}>
          {leftContent ? (
            <View style={styles.imageContainer}>
              <Image source={logo} style={styles.headerLogo} />
            </View>
          ) : (
            <View style={{width: '33%'}} />
          )}
          {middleContent && (
            <View style={styles.midContent}>
              <Text style={styles.titleHeader}>Profile</Text>
            </View>
          )}
          <TouchableOpacity
            style={styles.sendIconContainer}
            onPress={() => setVisible(true)}>
            <Image
              source={rightContent ? send : settings}
              style={styles.sendIcon}
            />
          </TouchableOpacity>
        </View>
      </Header>
      {divider()}
    </View>
  );
}

CustomHeader.propTypes = {
  leftContent: PropTypes.bool,
  middleContent: PropTypes.bool,
  rightContent: PropTypes.bool,
};

CustomHeader.defaultProps = {
  leftContent: false,
  middleContent: false,
  rightContent: false,
};

export default CustomHeader;
