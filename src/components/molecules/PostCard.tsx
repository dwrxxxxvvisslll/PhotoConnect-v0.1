import type React from "react"
import { View, StyleSheet, Image, TouchableOpacity, Text, Dimensions } from "react-native"
import { Ionicons } from "@expo/vector-icons"

interface PostCardProps {
  id: string
  username: string
  avatar: string
  location: string
  image: string
  caption: string
  likes: number
  onUserPress?: () => void
  onLikePress?: () => void
  onCommentPress?: () => void
}

const { width } = Dimensions.get("window")

const PostCard: React.FC<PostCardProps> = ({
  username,
  avatar,
  location,
  image,
  caption,
  onUserPress,
  onLikePress,
  onCommentPress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.userHeader} onPress={onUserPress}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        <View>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.location}>{location}</Text>
        </View>
      </TouchableOpacity>

      <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />

      <Text style={styles.caption}>{caption}</Text>

      <View style={styles.actions}>
        <TouchableOpacity onPress={onCommentPress} style={styles.actionButton}>
          <Ionicons name="chatbubble-outline" size={22} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onLikePress} style={styles.actionButton}>
          <Ionicons name="heart-outline" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="bookmark-outline" size={22} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginBottom: 15,
  },
  userHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  username: {
    fontWeight: "600",
    fontSize: 14,
  },
  location: {
    fontSize: 12,
    color: "#666",
  },
  image: {
    width: width,
    height: width * 0.75,
  },
  caption: {
    padding: 12,
    fontSize: 14,
  },
  actions: {
    flexDirection: "row",
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  actionButton: {
    marginRight: 20,
  },
})

export default PostCard

