import {StyleSheet, Dimensions} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen');

export default StyleSheet.create({
  modalView: {
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
  overlay: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
  card: {
    width: '100%',
    borderRadius: 16,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
  },
  textParagraph: {
    paddingTop: 16,
    paddingBottom: 40,
    fontSize: 14,
    textAlign: 'center',
  },
  headerDisagreeImage: {
    height: 80,
    width: 80,
  },
  modalImage: {alignItems: 'center', marginBottom: 16},
  btnLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  btn: {
    backgroundColor: 'darksalmon',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
  },
  btnContainer: {marginTop: 8},
});
