import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#ffff',
    margin: 10,
    alignItems: 'center',
    borderRadius: 10,
    flex: 1,
  },
  subContainer: {
    flexDirection: 'row',
    flex: 1,
    width: 200,
  },
  text: {
    margin: 5,
    color: 'black',
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
  icon: {
    position: 'absolute',
    right: 0,
    marginLeft: 5,
    justifyContent: 'center',
  },
});
