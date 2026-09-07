import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import LandingPage from './pages/LandingPage';
import WorkPage from './pages/WorkPage';
import GoblinsCaseStudyPage from './pages/GoblinsCaseStudyPage';
import BiasAuditPage from './pages/BiasAuditPage';
import JobSearchToolPage from './pages/JobSearchToolPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Lazy-loaded: ships in its own chunk, fetched only when a visitor opens it
const MeridianPage = lazy(() => import('./pages/MeridianPage'));

export default function App() {
  return (
    <>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/goblins" element={<GoblinsCaseStudyPage />} />
        <Route path="/work/bias-audit" element={<BiasAuditPage />} />
        <Route path="/work/job-search-tool" element={<JobSearchToolPage />} />
        <Route
          path="/work/meridian"
          element={
            <Suspense fallback={<div className="min-h-screen bg-[#050403]" />}>
              <MeridianPage />
            </Suspense>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}
