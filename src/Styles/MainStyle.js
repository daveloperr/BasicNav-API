import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    zIndex: 1, 
  },
  background: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
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



export const HomePageStyle = StyleSheet.create({
  View: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundImage: "url('../assets/background.jpeg')",
  },
  Logo: {
      width: 356,
      height: 300,
      margin: 10


  },
  RegisterButton: {
      borderWidth: 1,
      borderColor: '1D1616',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 49,
      paddingRight: 49,
      margin: 5,
  },
  LoginButton: {
      borderWidth: 1,
      borderColor: '1D1616',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 60,
      paddingRight: 60,
      margin: 5,
      alignSelf: 'center'
  }
});





export const loginstyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fffdf6', 

  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  signUpContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: 25,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  signUpText: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginBottom: 20,
    color: 'black',
  },

  TextInput: {
    borderWidth: 1,
    borderColor: "#bbb",
    width: "100%",
    fontSize: 16,
    height: 50,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    marginBottom: 10,
    color: 'black',
  },

  inputError: {
    borderColor: "red",
  },

  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 10,
    textAlign: "left",
    width: "100%",
    paddingLeft: 5,
  },

  button: {
    backgroundColor: "orange",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    width: "100%",
    marginVertical: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },

  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    textAlign: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    textAlign: "center",
  },

  linkText: {
    fontSize: 12,
    color: "black",
    textAlign: "center",
    marginTop: 10,
    textDecorationLine: "none",
  },

});




export const LandingPageStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffdf6', 
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  lottie: {
    width: 300, // Adjusted size for better fit
    height: 300,
  
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});


export const registerstyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fffdf6', 
  
  },

  signUpContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: 25,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  signUpText: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginBottom: 20,
  },

  TextInput: {
    borderWidth: 1,
    borderColor: "#bbb",
    width: "100%",
    fontSize: 16,
    height: 50,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    marginBottom: 10,
  },

  inputError: {
    borderColor: "red",
  },

  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 10,
    textAlign: "left",
    width: "100%",
    paddingLeft: 5,
  },

  button: {
    backgroundColor: "orange",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    width: "100%",
    marginVertical: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },

  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    textAlign: "center",
  },


  linkText: {
    fontSize: 12,
    color: "black",
    textAlign: "center",
    marginTop: 10,
    textDecorationLine: "none",
  },
});
