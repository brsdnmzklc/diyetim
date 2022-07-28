import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#7209b7',
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    margin: 10,
    marginHorizontal: 100,
  },
  icon: {
    position: 'absolute',
    right: 5,
    top: 10,
  },
});
