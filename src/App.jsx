import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Quiz from './pages/Quiz.jsx'
import LernInhalt from './pages/LernInhalt.jsx'
import TabBar from './components/TabBar.jsx'
import Einstellungen, { JahrgangWahl, SprachWahl } from './pages/Einstellungen.jsx'
import LevelUpToast from './components/LevelUpToast.jsx'
import { KartenDeck } from './pages/Karten.jsx'
import Testmodus from './pages/Testmodus.jsx'
import Onboarding from './pages/Onboarding.jsx'
import { useProgress } from './progress.jsx'
import { ThemaSeite, ThemenJahrgang, ThemenKapitel, ThemenStart, ToThemen } from './pages/Themen.jsx'

export default function App() {
  const { onboarded } = useProgress()

  // Beim allerersten Öffnen: kurze Einrichtung (Jahrgang, Sprache, Farbe)
  if (!onboarded) return <Onboarding />

  return (
    <>
      <LevelUpToast />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Themen: Jahrgang → Kapitel → Thema */}
        <Route path="/themen" element={<ThemenStart />} />
        <Route path="/themen/:jahrgangId" element={<ThemenJahrgang />} />
        <Route path="/themen/:jahrgangId/:kapitelId" element={<ThemenKapitel />} />
        <Route path="/themen/:jahrgangId/:kapitelId/:topicId" element={<ThemaSeite />} />

        {/* Die drei Arten zu lernen (topicId "gesamt" = ganzes Kapitel) */}
        <Route path="/lernen/:jahrgangId/:kapitelId/:topicId" element={<LernInhaltMitReset />} />
        <Route path="/ueben/:jahrgangId/:kapitelId/:topicId" element={<Quiz />} />
        <Route path="/karten/:jahrgangId/:kapitelId/:topicId" element={<KartenDeck />} />

        {/* Alte Listen-Adressen weiterleiten */}
        {['/lernen', '/ueben', '/karten'].map((base) => [
          <Route key={base} path={base} element={<Navigate to="/themen" replace />} />,
          <Route key={`${base}-j`} path={`${base}/:jahrgangId`} element={<ToThemen />} />,
          <Route key={`${base}-k`} path={`${base}/:jahrgangId/:kapitelId`} element={<ToThemen />} />,
        ])}

        <Route path="/fehler" element={<Quiz mode="fehler" />} />
        <Route path="/testmodus" element={<Testmodus />} />
        {/* frühere Adressen von Probe-Schularbeit und Terminen */}
        <Route path="/pruefung" element={<Navigate to="/testmodus" replace />} />
        <Route path="/termine" element={<Navigate to="/testmodus" replace />} />
        <Route path="/shop" element={<Navigate to="/" replace />} />
        <Route path="/einstellungen" element={<Einstellungen />} />
        <Route path="/einstellungen/jahrgang" element={<JahrgangWahl />} />
        <Route path="/einstellungen/sprache" element={<SprachWahl />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <TabBar />
    </>
  )
}

// Neuer Schlüssel pro Thema → Lernseite startet bei jedem Themenwechsel neu.
function LernInhaltMitReset() {
  const { topicId } = useParams()
  return <LernInhalt key={topicId} />
}
