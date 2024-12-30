// src/screens/UserProfile.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { fetchUserDetails, fetchUserPosts } from '../services/api';

export default function UserProfile({ route }) {
  const { userId } = route.params;
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadUserData = async () => {
      const userDetails = await fetchUserDetails(userId);
      setUser(userDetails);
      const userPosts = await fetchUserPosts(userId);
      setPosts(userPosts);
    };
    loadUserData();
  }, [userId]);

  return (
    <View style={styles.container}>
      {user && (
        <View style={styles.userDetails}>
          <View style={styles.detailsContainer}>
            <View style={styles.avatarContainer}>
              <Image
                style={styles.avatar}
                source={{ uri: user.profilePicture || 'https://via.placeholder.com/1500' }} // Fetching photo from API
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.name}>{user.name}</Text>
              <Text style={styles.username}>Username: @{user.username}</Text>
              <Text style={styles.email}>E-mail: {user.email}</Text>
              <Text style={styles.phone}>Phone: {user.phone}</Text>
              <Text style={styles.website}>Website: {user.website}</Text>
              <Text style={styles.company}>Company Name: {user.company.name}</Text>
            </View>
          </View>

          <View style={styles.addressCard}>
            <Text style={styles.addressTitle}>Address</Text>
            <Text style={styles.addressText}>{user.address.street}, {user.address.suite}</Text>
            <Text style={styles.addressText}>{user.address.city}, {user.address.zipcode}</Text>
          </View>
        </View>
      )}

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.postCard}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  userDetails: { marginBottom: 20 },
  detailsContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  avatarContainer: { marginRight: 15 },
  avatar: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#ccc' },
  textContainer: { flex: 1 },
  name: { fontSize: 18, fontWeight: 'bold' },
  username: { fontSize: 14, color: '#555' },
  email: { fontSize: 14, color: '#555' },
  phone: { fontSize: 14, color: '#555' },
  website: { fontSize: 14, color: '#555' },
  company: { fontSize: 14, color: '#555' },
  addressCard: { backgroundColor: '#f9f9f9', padding: 15, borderRadius: 5, marginBottom: 20 },
  addressTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  addressText: { fontSize: 14, color: '#555' },
  postCard: { padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginBottom: 10 },
  postTitle: { fontWeight: 'bold' },
});
