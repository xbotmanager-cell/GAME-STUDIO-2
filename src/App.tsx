import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import './i18n';

import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import GamePage from './pages/Game';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import EmailSubscribers from './pages/EmailSubscribers';
import Profile from './pages/Profile';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Special from './pages/Special';
import Leaderboard from './pages/Leaderboard';
import Collections from './pages/Collections';
import Collection from './pages/Collection';
import { Link } from 'react-router-dom';

export default function App() {
  const [currentCategory, setCurrentCategory] = useState('All');

  return (
    // @ts-ignore
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-100 dark:bg-black text-black dark:text-white transition-colors duration-300">
          <Sidebar onFilterChange={setCurrentCategory} currentCategory={currentCategory} />
          
          <main className="md:ml-64 min-h-screen relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
              <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px]" />
              <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[120px]" />
            </div>

            <Routes>
              <Route path="/" element={<Home currentCategory={currentCategory} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/game/:slug" element={<GamePage />} />
              <Route path="/u/:username" element={<Profile />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/email-subscribers" element={<EmailSubscribers />} />
              <Route path="/special" element={<Special />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/c/:slug" element={<Collection />} />
            </Routes>
          </main>
          
          <div className="fixed bottom-6 right-6 z-50">
            <Link to="/special" className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white font-bold transition-all shadow-[0_0_15px_rgba(0,255,255,0.3)] glow-hover border border-cyan-400/50 backdrop-blur-xl">
              <span>☕ Support Us</span>
            </Link>
          </div>
        </div>
        <Toaster theme="system" position="bottom-right" />
      </BrowserRouter>
    </ThemeProvider>
  );
}
