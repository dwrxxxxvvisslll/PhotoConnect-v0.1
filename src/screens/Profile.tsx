import ProfileScreen from "../components/templates/ProfileScreen"
import { dummyUser, dummyPosts } from "../data/dummyData"

const Profile = () => {
  // Filter posts to only show this user's posts
  const userPosts = dummyPosts.filter((post) => post.user.id === dummyUser.id)

  console.log("Rendering Profile with user:", dummyUser.username)
  console.log("User posts:", userPosts.length)

  return <ProfileScreen user={dummyUser} posts={userPosts} />
}

export default Profile

