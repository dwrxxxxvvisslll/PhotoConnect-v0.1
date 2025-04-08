import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import FeedScreen from "../components/templates/FeedScreen"
import { dummyPosts } from "../data/dummyData"

const Feed = () => {
  const [refreshing, setRefreshing] = useState(false)
  const navigation = useNavigation()

  const handleRefresh = () => {
    setRefreshing(true)
    // Simulate a network request
    setTimeout(() => {
      setRefreshing(false)
    }, 1500)
  }

  const handleUserPress = (userId: string) => {
    navigation.navigate("Profile" as never)
  }

  return (
    <FeedScreen posts={dummyPosts} onRefresh={handleRefresh} refreshing={refreshing} onUserPress={handleUserPress} />
  )
}

export default Feed

