import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import {CustomHeader, CustomModal} from '../../common/components';
import {settings} from '../../assets/homepage';
import _ from 'lodash';
import {
  heart,
  heartFill,
  comment,
  save,
  saveActive,
  send,
} from '../../assets/homepage';
import styles from './styles';
import {numberWithCommas} from '../../common/utils/numberFormat';

const photos =
  'https://api.unsplash.com/photos/?client_id=28cfioXQXaqSdo-7vmxBzhSTT0HsaKXvoSJRv7o_-2g&per_page=20';

function Homepage({}) {
  const [saved, setSaved] = useState(false);
  const [pressHeart, setPressHeart] = useState(false);
  const [visible, setVisible] = useState(false);
  const [datas, setDatas] = useState([]);
  const message = 'We have reached 50 retries per hour';

  useEffect(() => {
    getPhotos()
  }, []);
  
  const getPhotos = async () => {
    try {
      const data = await fetch(photos).then(response => response.json());
      setDatas(data);
    } catch (error) {
      alert(message);
    }
  }

  const pressLike = () => {
    setPressHeart(!pressHeart);
  };

  const renderCards = item => (
    <View key={item.user.id}>
      <View style={styles.cardHeaderContainer}>
        <View style={styles.cardProfileContainer}>
          <Image
            source={{uri: item.user.profile_image.large}}
            style={styles.imageProfile}
          />
          <Text style={styles.labelProfile}>{`${
            _.isEmpty(item.user.first_name) ? '' : item.user.first_name
          } ${
            _.isEmpty(item.user.last_name) ? '' : item.user.last_name
          }`}</Text>
        </View>
        <View style={styles.settingsContainer}>
          <TouchableOpacity onPress={() => setVisible(true)}>
            <Image source={settings} style={styles.settingsImage} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Image source={{uri: item.urls.regular}} style={styles.newsImage} />
      </View>
      <View style={styles.actionContainer}>
        <View style={styles.interactContainer}>
          <TouchableOpacity onPress={val => pressLike(val)}>
            <Image
              source={pressHeart ? heartFill : heart}
              style={styles.heartImage}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setVisible(true)}>
            <Image source={comment} style={styles.heartImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setVisible(true)}>
            <Image source={send} style={styles.sendImage} />
          </TouchableOpacity>
        </View>
        <View style={styles.saveContainer}>
          <TouchableOpacity onPress={() => setSaved(!saved)}>
            <Image
              source={saved ? saveActive : save}
              style={styles.saveImage}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.labelLikes}>{`${numberWithCommas(
        item.user.total_likes,
      )} likes`}</Text>
      <Text style={styles.labelProfileComment}>
        {`${_.isEmpty(item.description) ? '' : item.user.first_name} `}
        <Text style={styles.labelComment}>{item.description}</Text>
      </Text>
    </View>
  );

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
      <CustomHeader leftContent rightContent />
      <ScrollView style={styles.container}>
        <View style={styles.subContainer}>
          {datas.map(data => renderCards(data))}
        </View>
      </ScrollView>
    </View>
  );
}

export default Homepage;
