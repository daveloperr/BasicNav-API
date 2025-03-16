import React, { useEffect, useState } from "react";
import { 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  ActivityIndicator, 
  Alert, 
  Image 
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomePageScreen = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        marginVertical: 5,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        elevation: 3,
      }}
      onPress={() => navigation.navigate("UserDetailScreen", { userId: item.id })}
    >
      {/* Profile Image */}
      <Image
        source={{ uri: `https://i.pravatar.cc/150?img=${item.id}` }} 
        style={{ width: 60, height: 60, borderRadius: 30, marginRight: 15 }}
      />

      {/* User Info */}
      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#333" }}>
          {item.name.firstname} {item.name.lastname}
        </Text>
        <Text style={{ color: "#666" }}>✉ {item.email}</Text>
        <Text style={{ color: "#666" }}>👤 {item.username}</Text>
        <Text style={{ color: "#666" }}>📞 {item.phone}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#fffdf6", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10, color: "#0d47a1" }}>
        👥 Admin Panel - Users
      </Text>

      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default HomePageScreen;
