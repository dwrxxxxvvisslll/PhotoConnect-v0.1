import type React from "react"
import { View, StyleSheet, Image, ScrollView } from "react-native"
import Text from "../atoms/Text"
import Button from "../atoms/Button"
import type { User, Post } from "../../types"

interface ProfileInfoProps {
  user: User
  posts: Post[]
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ user, posts }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text variant="heading">{posts.length}</Text>
            <Text variant="caption">Posts</Text>
          </View>
          <View style={styles.statItem}>
            <Text variant="heading">{user.followers}</Text>
            <Text variant="caption">Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text variant="heading">{user.following}</Text>
            <Text variant="caption">Following</Text>
          </View>
        </View>
      </View>

      <View style={styles.bio}>
        <Text variant="subheading">{user.username}</Text>
        <Text variant="body">{user.bio}</Text>
      </View>

      <Button title="Edit Profile" variant="outline" onPress={() => {}} style={styles.editButton} />

      <View style={styles.gallery}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {posts.map((post) => (
            <Image key={post.id} source={{ uri: post.image }} style={styles.galleryImage} />
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  stats: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statItem: {
    alignItems: "center",
  },
  bio: {
    marginBottom: 15,
  },
  editButton: {
    marginBottom: 20,
  },
  gallery: {
    marginTop: 10,
  },
  galleryImage: {
    width: 150,
    height: 150,
    marginRight: 10,
    borderRadius: 8,
  },
})

export default ProfileInfo

