import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { loginstyle } from "../Styles/MainStyle";

const LogInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("johnd");
  const [password, setPassword] = useState("m38rmF$");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please fill in all fields before logging in!");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error("Invalid login credentials");
      }

      setLoading(false);
      navigation.navigate("HomePageScreen", { token: data.token }); 
    } catch (err) {
      setLoading(false);
      setError(err.message || "An error occurred");
    }
  };

  return (
    <View style={loginstyle.container}>
      <View style={loginstyle.signUpContainer}>
        <Text style={loginstyle.signUpText}>Login</Text>

        <TextInput
          value={email}
          style={[loginstyle.TextInput, error ? loginstyle.inputError : null]}
          onChangeText={setEmail}
          placeholder="Username"
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
        />
        {error ? <Text style={loginstyle.errorText}>{error}</Text> : null}

        <TextInput
          value={password}
          style={loginstyle.TextInput}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TouchableOpacity
          style={loginstyle.button}
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={loginstyle.buttonText}>LOG IN</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
          <Text style={loginstyle.linkText}>Don't have an account? Register here.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LogInScreen;
