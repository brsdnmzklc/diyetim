import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  bodyContainer: {
    marginHorizontal: 20,
    paddingVertical: 40,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#07635D',
    margin: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#07635D',
    margin: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  footerContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  footerText: {
    fontWeight: 'bold',
    color: '#07635D',
  },
  line: {
    borderBottomWidth: 1,
    marginHorizontal: 10,
    color: '#07635D',
  },
});
