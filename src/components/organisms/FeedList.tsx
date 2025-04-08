import type React from "react"
import { FlatList, StyleSheet, RefreshControl } from "react-native"
import PostCard from "../molecules/PostCard"
import type { Post } from "../../types"

interface FeedListProps {
  posts: Post[]
  onRefresh?: () => void
  refreshing?: boolean
  onUserPress?: (userId: string) => void
}

const FeedList: React.FC<FeedListProps> = ({ posts, onRefresh, refreshing = false, onUserPress }) => {
  return (
    <FlatList
      data={posts}
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
      refreshControl={onRefresh ? <RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> : undefined}
      style={styles.list}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
})

export default FeedList

