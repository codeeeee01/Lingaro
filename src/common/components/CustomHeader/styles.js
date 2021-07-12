import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {backgroundColor: 'white'},
  header: {
    backgroundColor: 'white',
    paddingRight: 16,
    paddingLeft: 8,
    // justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerLogo: {
    width: 150,
    height: 50,
  },
  sendIcon: {
    width: 25,
    height: 25,
  },
  sendIconContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
    marginBottom: 8,
  },
  imageContainer: {justifyContent: 'center', alignItems: 'flex-start', flex: 1},
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  midContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleHeader: {fontSize: 16, fontWeight: 'bold'},
});
