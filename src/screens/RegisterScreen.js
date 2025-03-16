import React, { useState, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity} from "react-native";
import { registerstyle } from "../Styles/MainStyle";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

 
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);

  

  useEffect(() => {
   
    return () => {
      setNameError(null);
      setEmailError(null);
      setPasswordError(null);
      setConfirmPasswordError(null);
    };
  }, []);

  const validateName = (text) => {
    setName(text);
    setNameError(text.length < 4 ? "Name must be at least 4 characters." : null);
  };

  const validateEmail = (text) => {
    setEmail(text);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailRegex.test(text) ? "Enter a valid email address." : null);
  };

  const validatePassword = (text) => {
    setPassword(text);
    setPasswordError(text.length < 8 ? "Password must be at least 8 characters." : null);
  };

  const validateConfirmPassword = (text) => {
    setConfirmPassword(text);
    setConfirmPasswordError(text !== password ? "Passwords do not match." : null);
  };

  const handlepress = () => {
    let valid = true;

    if (name.length < 3) {
      setNameError("Name must be at least 3 characters.");
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Enter a valid email address.");
      valid = false;
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
      valid = false;
    }

    if (password !== confirmpassword) {
      setConfirmPasswordError("Passwords do not match.");
      valid = false;
    }

    if (!valid) return;

 
    console.log("Register Successful!");
    console.log("User Details:", { name, email, password });


    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    alert("Register Successful!");
  };

  return (
    <View style={registerstyle.container}>
      <View style={registerstyle.signUpContainer}>
        <Text style={registerstyle.signUpText}>Create Account</Text>

       
        <TextInput
          value={name}
          style={[registerstyle.TextInput, nameError ? registerstyle.inputError : null]}
          onChangeText={validateName}
          placeholder="Name"
        />
        {nameError && <Text style={registerstyle.errorText}>{nameError}</Text>}

       
        <TextInput
          value={email}
          style={[registerstyle.TextInput, emailError ? registerstyle.inputError : null]}
          onChangeText={validateEmail}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        {emailError && <Text style={registerstyle.errorText}>{emailError}</Text>}

    
        <TextInput
          value={password}
          style={[registerstyle.TextInput, passwordError ? registerstyle.inputError : null]}
          onChangeText={validatePassword}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {passwordError && <Text style={registerstyle.errorText}>{passwordError}</Text>}

 
        <TextInput
          value={confirmpassword}
          style={[registerstyle.TextInput, confirmPasswordError ? registerstyle.inputError : null]}
          onChangeText={validateConfirmPassword}
          placeholder="Confirm Password"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {confirmPasswordError && <Text style={registerstyle.errorText}>{confirmPasswordError}</Text>}

   
        <TouchableOpacity style={registerstyle.button} onPress={handlepress}>
          <Text style={registerstyle.buttonText}>REGISTER</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={registerstyle.linkText}>Already have an account? Log in here.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;
