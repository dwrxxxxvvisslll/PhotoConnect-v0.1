import type { User, Post } from "../types"

export const dummyUser: User = {
  id: "user1",
  username: "dwraputra",
  avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  bio: "Travel photographer | Adventure seeker | World explorer",
  followers: 54,
  following: 110,
}

export const dummyPosts: Post[] = [
  {
    id: "post1",
    user: {
      id: "user1",
      username: "dwraputra",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      followers: 54,
      following: 110,
    },
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    caption: "Day 15: Our roadtrip continues across England",
    location: "Snowdon - Snowdonia, Wales",
    likes: 342,
  },
  {
    id: "post2",
    user: {
      id: "user2",
      username: "itakephotos",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      followers: 876,
      following: 345,
    },
    image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99",
    caption: "Summit day! Finally reached the top after 3 days of hiking. The view was worth every step!",
    location: "Snowdon - Snowdonia, Wales",
    likes: 289,
  },
  {
    id: "post3",
    user: {
      id: "user3",
      username: "worldtraveller",
      avatar: "https://randomuser.me/api/portraits/men/44.jpg",
      followers: 2345,
      following: 1234,
    },
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
    caption: "London calling! Amazing view from the Shard.",
    location: "Snowdon - Snowdonia, Wales",
    likes: 567,
  },
  {
    id: "post4",
    user: {
      id: "user1",
      username: "dwraputra",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      followers: 54,
      following: 110,
    },
    image: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220",
    caption: "Coastal views never get old",
    location: "Bali, Indonesia",
    likes: 423,
  },
  {
    id: "post5",
    user: {
      id: "user1",
      username: "dwraputra",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      followers: 54,
      following: 110,
    },
    image: "https://images.unsplash.com/photo-1445217143695-467124038776",
    caption: "Waterfall hunting in Bali",
    location: "Bali, Indonesia",
    likes: 198,
  },
]

