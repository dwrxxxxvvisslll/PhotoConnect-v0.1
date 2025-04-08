"use client"

import type React from "react"
import { useState } from "react"
import { View, StyleSheet, SafeAreaView, Text, FlatList, Image, TouchableOpacity, TextInput } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import PostCard from "../molecules/PostCard"
import type { Post } from "../../types"

interface FeedScreenProps {
  posts: Post[]
  onRefresh?: () => void
  refreshing?: boolean
  onUserPress?: (userId: string) => void
}

const FeedScreen: React.FC<FeedScreenProps> = ({ posts, onRefresh, refreshing = false, onUserPress }) => {
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts)

  const handleSearch = (text: string) => {
    setSearchQuery(text)
    if (text) {
      const filtered = posts.filter(
        (post) =>
          post.caption.toLowerCase().includes(text.toLowerCase()) ||
          post.location.toLowerCase().includes(text.toLowerCase()) ||
          post.user.username.toLowerCase().includes(text.toLowerCase()),
      )
      setFilteredPosts(filtered)
    } else {
      setFilteredPosts(posts)
    }
  }

  const toggleSearch = () => {
    if (showSearch) {
      setSearchQuery("")
      setFilteredPosts(posts)
    }
    setShowSearch(!showSearch)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {!showSearch ? (
          <>
            <View style={styles.userInfo}>
              <Image source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }} style={styles.avatar} />
              <Text style={styles.username}>dwraputra</Text>
            </View>
            <TouchableOpacity onPress={toggleSearch}>
              <Ionicons name="search" size={24} color="#333" />
            </TouchableOpacity>
          </>
        ) : (
          <View style={styles.searchContainer}>
            <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search posts, locations, users..."
              value={searchQuery}
              onChangeText={handleSearch}
              autoFocus
            />
            <TouchableOpacity onPress={toggleSearch}>
              <Ionicons name="close" size={24} color="#333" />
            </TouchableOpacity>
          </View>
        )}
      </View>

      <FlatList
        data={filteredPosts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PostCard
            id={item.id}
            username={item.user.username}
            avatar={item.user.avatar}
            location={item.location}
            image={item.image}
            caption={item.caption}
            likes={item.likes}
            onUserPress={() => onUserPress && onUserPress(item.user.id)}
            onLikePress={() => {}}
            onCommentPress={() => {}}
          />
        )}
        refreshing={refreshing}
        onRefresh={onRefresh}
        style={styles.list}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No posts found</Text>
          </View>
        }
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: "600",
  },
  list: {
    flex: 1,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 40,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginTop: 50,
  },
  emptyText: {
    fontSize: 16,
    color: "#999",
  },
})

export default FeedScreen

