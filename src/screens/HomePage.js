// src/screens/HomePage.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { fetchPosts, fetchUsers } from '../services/api';

export default function HomePage({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const data = await fetchPosts();
      setPosts(shuffleArray(data)); // Shuffle posts here
      setLoading(false);
    };
    const loadUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    loadPosts();
    loadUsers();
  }, []);

  const handleSearch = async (query) => {
    setSearchQuery(query);
    if (query.length > 0) {
      const matches = users.filter(user =>
        user.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredUsers(matches);
    } else {
      setFilteredUsers([]);
    }
  };

  const renderPost = ({ item }) => {
    const author = users.find(user => user.id === item.userId);
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{item.title}</Text>
        <Text numberOfLines={2} style={styles.body}>{item.body}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('UserProfile', { userId: item.userId })}>
          <Text style={styles.link}> @{author?.username}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  // Function to shuffle an array
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }
    return shuffled;
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for a user by name..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      {filteredUsers.length > 0 && (
        <FlatList
          data={filteredUsers}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('UserProfile', { userId: item.id })}>
              <Text style={styles.userSuggestion}>{item.name} (@{item.username})</Text>
            </TouchableOpacity>
          )}
        />
      )}
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderPost}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  searchBar: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 8, marginBottom: 10 },
  card: { backgroundColor: '#fff', padding: 15, marginBottom: 10, borderRadius: 5, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5 },
  title: { fontSize: 16, fontWeight: 'bold' },
  body: { fontSize: 14, color: '#555' },
  link: { color: '#007bff', marginTop: 5 },
  userSuggestion: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
});
