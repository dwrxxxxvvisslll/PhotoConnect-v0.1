import type React from "react"
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native"

interface UserBarProps {
  username: string
  avatar: string
  location?: string
  onPress?: () => void
}

const UserBar: React.FC<UserBarProps> = ({ username, avatar, location, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} disabled={!onPress}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.username}>{username}</Text>
        {location && <Text style={styles.location}>{location}</Text>}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontWeight: "bold",
    fontSize: 14,
  },
  location: {
    fontSize: 12,
    color: "#666",
  },
})

export default UserBar

