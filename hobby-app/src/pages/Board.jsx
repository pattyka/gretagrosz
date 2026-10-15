import { useNavigate, useParams } from 'react-router-dom'
import { useStore } from '../store'
import { Icon, Masonry } from '../components/ui'

export default function Board() {
  const { id } = useParams()
  const { data, actions } = useStore()
  const navigate = useNavigate()
  const board = data.boards.find((b) => b.id === id)
  if (!board) return <p className="py-20 text-center text-ink/50">This board doesn’t exist.</p>

  const posts = board.postIds.map((pid) => data.posts.find((p) => p.id === pid)).filter(Boolean)

  return (
    <div className="pt-4">
      <div className="mb-8 flex items-start justify-between gap-4">
        <button onClick={() => navigate(-1)} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full hover:bg-mist" aria-label="Back">
          <Icon name="back" />
        </button>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">{board.name}</h1>
          <p className="mt-1 text-sm text-ink/55">{posts.length} {posts.length === 1 ? 'post' : 'posts'} · only you can see this board</p>
        </div>
        <button
          onClick={() => {
            if (confirm(`Delete the board “${board.name}”? The posts themselves stay on the feed.`)) {
              actions.deleteBoard(board.id)
              navigate('/u/you')
            }
          }}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-ink/60 hover:bg-mist hover:text-red-600"
          aria-label="Delete board"
        >
          <Icon name="trash" />
        </button>
      </div>
      <Masonry posts={posts} empty="Nothing saved here yet. Tap Save on any post you love." />
    </div>
  )
}
