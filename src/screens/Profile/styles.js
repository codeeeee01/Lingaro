import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {backgroundColor: 'white'},
  scrollContainer: {
    paddingTop: 16,
  },
  headerContainer: {flexDirection: 'row'},
  imageWidth: {width: '30%'},
  imageSize: {width: 80, height: 80},
  postsContainer: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-evenly',
  },
  postLabelContainer: {flexDirection: 'column', justifyContent: 'center'},
  postLabel: {textAlign: 'center', fontWeight: 'bold'},
  labelCenter: {textAlign: 'center'},
  labelProfile: {justifyContent: 'center', marginTop: 8, marginLeft: 8},
  editProfileBtn: {
    borderWidth: 1.5,
    marginTop: 30,
    borderRadius: 4,
    borderColor: 'lightgray',
    marginBottom: 40,
  },
  editLabel: {textAlign: 'center', marginVertical: 8},
  marginProfile: {marginHorizontal: 16},
  constructionContainer: {marginTop: 40},
  iconSize: {width: 25, height: 25},
  bg: {flex: 1, backgroundColor: 'white'},
  underlineTab: {
    backgroundColor: 'gray',
  },
  renderImageContainer: {flex: 1, flexWrap: 'wrap', flexDirection: 'row'},
  tabMargin: {marginBottom: 16},
});
