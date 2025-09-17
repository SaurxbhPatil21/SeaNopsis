import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import DataExplorer from './pages/DataExplorer';
import MapPage from './pages/Map';
import Taxonomy from './pages/Taxonomy';
import Otolith from './pages/Otolith';
import EDNA from './pages/EDNA';
import Upload from './pages/Upload';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Reset from './pages/Reset';

const PageTransition = ({ children }) => (
  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
    {children}
  </motion.div>
);

const Layout = ({ children }) => {
  const loc = useLocation();
  const isHome = loc.pathname === '/';
  return (
    <div className="min-h-screen bg-[#041e3a] text-white">
      <Navbar />
      <div className={isHome ? '' : 'pt-16'}>{children}</div>
    </div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Layout>
              <PageTransition>
                <HomePage />
              </PageTransition>
            </Layout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <PageTransition>
                <Dashboard />
              </PageTransition>
            </Layout>
          }
        />
        <Route
          path="/explorer"
          element={
            <Layout>
              <PageTransition>
                <DataExplorer />
              </PageTransition>
            </Layout>
          }
        />
        <Route
          path="/map"
          element={
            <Layout>
              <PageTransition>
                <MapPage />
              </PageTransition>
            </Layout>
          }
        />
        <Route
          path="/taxonomy"
          element={
            <Layout>
              <PageTransition>
                <Taxonomy />
              </PageTransition>
            </Layout>
          }
        />
        <Route
          path="/otolith"
          element={
            <Layout>
              <PageTransition>
                <Otolith />
              </PageTransition>
            </Layout>
          }
        />
        <Route
          path="/edna"
          element={
            <Layout>
              <PageTransition>
                <EDNA />
              </PageTransition>
            </Layout>
          }
        />
        <Route
          path="/upload"
          element={
            <Layout>
              <PageTransition>
                <Upload />
              </PageTransition>
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <PageTransition>
                <About />
              </PageTransition>
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <PageTransition>
                <Login />
              </PageTransition>
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <PageTransition>
                <Signup />
              </PageTransition>
            </Layout>
          }
        />
        <Route
          path="/reset"
          element={
            <Layout>
              <PageTransition>
                <Reset />
              </PageTransition>
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default App;


