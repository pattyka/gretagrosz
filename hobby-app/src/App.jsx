import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Layout from './components/Layout'
import { Modal } from './components/ui'
import Feed from './pages/Feed'
import PostPage from './pages/PostPage'
import NewPost from './pages/NewPost'
import Projects from './pages/Projects'
import ProjectPage from './pages/ProjectPage'
import Chat from './pages/Chat'
import Profile from './pages/Profile'
import Board from './pages/Board'
import Onboarding from './pages/Onboarding'
import BuddyPage from './pages/BuddyPage'
import ChallengePage, { ChallengesList } from './pages/Challenges'
import { useStore } from './store'

function PostModal() {
  const navigate = useNavigate()
  return (
    <Modal onClose={() => navigate(-1)} className="max-w-5xl">
      <PostPage modal />
    </Modal>
  )
}

export default function App() {
  const location = useLocation()
  const { data } = useStore()
  // When a post is opened from a list, the list stays underneath and the post shows as a popup
  const background = location.state?.background

  return (
    <>
      <Routes location={background || location}>
        <Route element={<Layout />}>
          <Route path="/" element={<Feed />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/new" element={<NewPost />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/chat/:id" element={<Chat />} />
          <Route path="/u/:handle" element={<Profile />} />
          <Route path="/board/:id" element={<Board />} />
          <Route path="/buddy" element={<BuddyPage />} />
          <Route path="/challenges" element={<ChallengesList />} />
          <Route path="/challenge/:id" element={<ChallengePage />} />
          <Route path="*" element={<p className="py-20 text-center text-ink/50">Page not found.</p>} />
        </Route>
      </Routes>
      {!data.onboarded && <Onboarding />}
      {background && (
        <Routes>
          <Route path="/post/:id" element={<PostModal />} />
        </Routes>
      )}
    </>
  )
}
