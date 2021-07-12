import React, {useEffect, useState} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Container, TabHeading, Tabs, Tab, Header} from 'native-base';
import {
  CustomHeader,
  UnderConstruction,
  CustomModal,
} from '../../common/components';
import {grid, photo} from '../../assets/profile';
import avatar from '../../assets/avatar.png';
import styles from './styles';

const photos =
  'https://api.unsplash.com/photos/?client_id=28cfioXQXaqSdo-7vmxBzhSTT0HsaKXvoSJRv7o_-2g';

function Profile({}) {
  const [datas, setDatas] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetch(photos)
      .then(response => response.json())
      .then(json => setDatas(json))
      .catch(error => alert(error));
  }, []);

  const renderImage = item => (
    <View key={item.user.id}>
      <Image
        source={{uri: item.urls.small}}
        style={{width: 138, height: 138}}
      />
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
      <CustomHeader middleContent rightContent={false} />
      <ScrollView style={styles.scrollContainer} stickyHeaderIndices={[1]}>
        <View style={styles.marginProfile}>
          <View style={styles.headerContainer}>
            <View style={styles.imageWidth}>
              <Image source={avatar} style={styles.imageSize} />
            </View>
            <View style={styles.postsContainer}>
              <View style={styles.postLabelContainer}>
                <Text style={styles.postLabel}>
                  {Math.round(Math.random() * 1000)}
                </Text>
                <Text style={styles.labelCenter}>Posts</Text>
              </View>
              <View style={styles.postLabelContainer}>
                <Text style={styles.postLabel}>
                  {Math.round(Math.random() * 1000)}
                </Text>
                <Text style={styles.labelCenter}>Followers</Text>
              </View>
              <View style={styles.postLabelContainer}>
                <Text style={styles.postLabel}>
                  {Math.round(Math.random() * 1000)}
                </Text>
                <Text style={styles.labelCenter}>Following</Text>
              </View>
            </View>
          </View>
          <Text style={styles.labelProfile}>John Doe</Text>
          <TouchableOpacity
            onPress={() => setVisible(true)}
            style={styles.editProfileBtn}>
            <Text style={styles.editLabel}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <Container>
          <Header hasTabs style={styles.bg} />
          <Tabs tabBarUnderlineStyle={styles.underlineTab}>
            <Tab
              heading={
                <TabHeading style={styles.bg}>
                  <Image source={grid} style={styles.iconSize} />
                </TabHeading>
              }
              style={styles.bg}>
              <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
                {datas.map(data => renderImage(data))}
              </View>
            </Tab>
            <Tab
              heading={
                <TabHeading style={styles.bg}>
                  <Image source={photo} style={styles.iconSize} />
                </TabHeading>
              }>
              <View style={styles.constructionContainer}>
                <UnderConstruction />
              </View>
            </Tab>
          </Tabs>
        </Container>
      </ScrollView>
    </View>
  );
}

export default Profile;
