import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {},
  imagebackground: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  welcomeText: {
    fontSize: 20,
    color: '#FFFFFF',
    margin: 10,
  },
  signinText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#551A8B',
  },
});
