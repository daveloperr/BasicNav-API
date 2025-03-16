import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";
import { LandingPageStyle } from "../Styles/MainStyle";

const LandingPage = ({ navigation }) => {  
  return (
    <View style={LandingPageStyle.container}>
      <Text style={LandingPageStyle.title}>Welcome to Our Platform</Text>
      <Text style={LandingPageStyle.subtitle}>
        Your journey starts here. Experience the best services with us.
      </Text>

      <LottieView
        source={{
          uri: "https://lottie.host/d9474747-2ee7-45bc-9e00-14b8001278d6/zUGTWqtP21.lottie",
        }}
        autoPlay
        loop
        style={[LandingPageStyle.lottie, { width: 500, height: 500 }]}
      />

      <TouchableOpacity
        style={LandingPageStyle.button}
        onPress={() => navigation.navigate("LoginScreen")}  
      >
        <Text style={LandingPageStyle.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LandingPage;
