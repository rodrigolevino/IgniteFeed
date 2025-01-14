import styles from "./Comment.module.css"

import { ThumbsUp, Trash } from "@phosphor-icons/react"
import { Avatar } from "./Avatar"

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-X2sLwvRd-LBjUibmTjV2yR0VI2Ni4UJ2IA&s"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Neymar Júnior</strong>
              <time
                title="6 de Janeiro às 23:13h"
                dateTime="2025-01-06 23:14:51"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button
              onClick={handleDeleteComment}
              onMouseDown={handleDeleteComment}
              title="Deletar comentário"
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
