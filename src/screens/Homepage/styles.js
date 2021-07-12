import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  cardHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    marginTop: 0,
  },
  cardProfileContainer: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageProfile: {width: 40, height: 40, borderRadius: 40},
  labelProfile: {marginLeft: 8, fontWeight: '600'},
  settingsContainer: {width: '5%'},
  settingsImage: {
    width: 25,
    height: 25,
    transform: [{rotate: '90deg'}],
  },
  newsImage: {width: '100%', height: 500},
  actionContainer: {margin: 8, flexDirection: 'row'},
  interactContainer: {width: '90%', flexDirection: 'row'},
  heartImage: {
    width: 40,
    height: 40,
  },
  sendImage: {
    width: 25,
    height: 25,
    marginTop: 10,
    marginLeft: 8,
  },
  saveContainer: {width: '10%'},
  saveImage: {width: 30, height: 30, marginTop: 4},
  labelLikes: {
    marginHorizontal: 16,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  labelProfileComment: {
    fontWeight: 'bold',
    marginHorizontal: 16,
    textAlign: 'left',
    lineHeight: 20,
    marginBottom: 16,
  },
  labelComment: {fontWeight: 'normal'},
  flatListPad: {paddingTop: 16},
});
