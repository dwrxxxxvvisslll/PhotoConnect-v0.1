export interface User {
    id: string
    username: string
    avatar: string
    bio?: string
    followers: number
    following: number
  }
  
  export interface Post {
    id: string
    user: User
    image: string
    caption: string
    location: string
    likes: number
    comments?: Comment[]
  }
  
  export interface Comment {
    id: string
    user: User
    text: string
    timestamp: string
  }
  
  