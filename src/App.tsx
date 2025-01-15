import { Header } from "./components/Header"
import { Post, PostProps } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css"

import "./global.css"

interface Posts extends PostProps {
  id: number
}

const posts: Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://i0.wp.com/i.forbesimg.com/media/lists/people/cristiano-ronaldo_416x416.jpg",
      name: "Cristiano Ronaldo",
      role: "Al Nassr Player",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "rod.design/doctorcare" },
    ],
    publishedAt: new Date("2025-01-05 12:47:29"),
  },

  {
    id: 2,
    author: {
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5e6g5670AQpZI4kbZaJ_IiSVzsxhVDkz8pA&s",
      name: "Lionel Messi",
      role: "Inter Miami Player",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "rod.design/doctorcare" },
    ],
    publishedAt: new Date("2025-01-14 11:31:51"),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
