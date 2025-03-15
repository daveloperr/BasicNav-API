import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the container fills the screen
    justifyContent: 'center', // Centers the content
    alignItems: 'center', // Centers the content
    zIndex: 1, // Ensures content is placed on top of the background
  },
  background: {
    flex: 1, // Ensure the background image covers the full screen
    justifyContent: 'center', // Centers content vertically in the background
    alignItems: 'center', // Centers content horizontally in the background
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  card: {
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
  },
  button1: {
    backgroundColor: '#1e90ff',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText1: {
    color: '#fff',
    fontSize: 16,
  },

});
