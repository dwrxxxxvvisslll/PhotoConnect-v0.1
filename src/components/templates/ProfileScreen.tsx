import type React from "react"
import { View, StyleSheet, SafeAreaView, Text, Image, TouchableOpacity, FlatList, Dimensions } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import type { User, Post } from "../../types"

interface ProfileScreenProps {
  user: User
  posts: Post[]
}

const { width } = Dimensions.get("window")
const imageSize = width / 3 - 2

const ProfileScreen: React.FC<ProfileScreenProps> = ({ user, posts }) => {
  const renderPostItem = ({ item }: { item: Post }) => <Image source={{ uri: item.image }} style={styles.postImage} />

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="person-add-outline" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.profileInfo}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.name}>{user.username}</Text>
          <Text style={styles.bio}>Travel photographer</Text>
          <Text style={styles.website}>dwraputra.dev</Text>
        </View>
      </View>

      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{posts.length}</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{user.following}</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{user.followers}</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
      </View>

      <View style={styles.mediaButtons}>
        <TouchableOpacity style={styles.mediaButton}>
          <Ionicons name="camera-outline" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.mediaButton}>
          <Ionicons name="videocam-outline" size={24} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.mediaButton}>
          <Ionicons name="grid-outline" size={24} color="#999" />
        </TouchableOpacity>
      </View>

      <Text style={styles.bioText}>Can't wait to book my next trip!</Text>

      <View style={styles.postHeader}>
        <Image source={{ uri: user.avatar }} style={styles.smallAvatar} />
        <View>
          <Text style={styles.postUsername}>{user.username}</Text>
          <Text style={styles.postLocation}>Bali, Indonesia</Text>
        </View>
        <View style={styles.flex} />
        <TouchableOpacity>
          <Ionicons name="chatbubble-outline" size={20} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionIcon}>
          <Ionicons name="heart-outline" size={20} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="bookmark-outline" size={20} color="#333" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderPostItem}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        style={styles.postsList}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  profileInfo: {
    paddingHorizontal: 16,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  bio: {
    fontSize: 14,
    color: "#333",
    marginTop: 2,
  },
  website: {
    fontSize: 14,
    color: "#6200ee",
    marginTop: 2,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    marginHorizontal: 16,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  mediaButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  mediaButton: {
    alignItems: "center",
  },
  bioText: {
    padding: 16,
    fontSize: 14,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  smallAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  postUsername: {
    fontWeight: "600",
    fontSize: 14,
  },
  postLocation: {
    fontSize: 12,
    color: "#666",
  },
  flex: {
    flex: 1,
  },
  actionIcon: {
    marginHorizontal: 15,
  },
  postsList: {
    flex: 1,
  },
  postImage: {
    width: width,
    height: width * 0.75,
    marginBottom: 2,
  },
})

export default ProfileScreen

