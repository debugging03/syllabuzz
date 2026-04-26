/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Fuse from 'fuse.js';
import { 
  BookOpen, 
  Search as SearchIcon, 
  CheckCircle2,
  X,
  ArrowUp,
  ChevronDown,
  ChevronRight,
  Settings2,
  LayoutGrid,
  ListOrdered,
  Map as MapIcon,
  Trophy,
  ArrowRight,
  Sun,
  Moon,
  Palette,
  ExternalLink,
  Youtube,
  LogIn,
  LogOut,
  User as UserIcon
} from 'lucide-react';
import { syllabusData, Subject, Topic, Unit } from './syllabusData';
import { getNoteForTopic, NoteStyle } from './notesData';
import { signInWithGoogle, logout, onAuthStateChanged, User, auth, signInAnonymous } from './lib/firebase';

interface SearchResult {
  subject: Subject;
  unit: Unit;
  topic: Topic;
  topicId: string;
}

export default function App() {
  const [activeSubject, setActiveSubject] = useState<Subject>(syllabusData[0]);
  const [progress, setProgress] = useState<Record<string, boolean>>({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedNote, setSelectedNote] = useState<{ topic: string; content: string | string[] } | null>(null);
  const [noteStyle, setNoteStyle] = useState<NoteStyle>('detailed');
  const [showSettings, setShowSettings] = useState(false);
  const [layoutMode, setLayoutMode] = useState<'grid' | 'list' | 'roadmap'>('grid');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [filter, setFilter] = useState<'none' | 'reading' | 'grayscale'>('none');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSemesterOpen, setIsSemesterOpen] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState('IV');
  const [user, setUser] = useState<User | null>(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [showSyncMessage, setShowSyncMessage] = useState(false);
  
  // Search state
  const [searchQuery, setSearchQuery] = useState('');

  // Flattened searchable data
  const searchableData = useMemo(() => {
    const flattened: SearchResult[] = [];
    syllabusData.forEach(s => {
      s.units.forEach(u => {
        u.topics.forEach(t => {
          flattened.push({
            subject: s,
            unit: u,
            topic: t,
            topicId: `${s.id}-${u.id}-${t.title}`
          });
        });
      });
    });
    return flattened;
  }, []);

  // Fuse instance handles fuzzy search logic (predictive results even with typos)
  const fuse = useMemo(() => new Fuse(searchableData, {
    keys: [
      { name: 'topic.title', weight: 0.7 },
      { name: 'topic.subtopics', weight: 0.3 },
      { name: 'unit.title', weight: 0.2 },
      { name: 'subject.title', weight: 0.1 }
    ],
    threshold: 0.35, 
    distance: 100,
    includeMatches: true,
    minMatchCharLength: 2
  }), [searchableData]);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return fuse.search(searchQuery).map(result => result.item);
  }, [searchQuery, fuse]);

  useEffect(() => {
    const saved = localStorage.getItem('sem4-progress');
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch (e) {
        console.warn("Failed to parse progress", e);
      }
    }

    const savedStyle = localStorage.getItem('sem4-note-style') as NoteStyle;
    if (savedStyle) setNoteStyle(savedStyle);

    const savedLayout = localStorage.getItem('sem4-layout-mode') as 'grid' | 'list';
    if (savedLayout) setLayoutMode(savedLayout);

    const savedTheme = localStorage.getItem('sem4-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme as 'light' | 'dark');
    }

    const savedFilter = localStorage.getItem('sem4-filter') as 'none' | 'reading' | 'grayscale';
    if (savedFilter) setFilter(savedFilter);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);

    let unsubscribe = () => {};
    let isInitialLoad = true;

    // Safety timeout to ensure loading screen disappears
    const loadingTimeout = setTimeout(() => {
      setIsAuthLoading(false);
    }, 10000); // 10s max loading

    if (auth) {
      unsubscribe = onAuthStateChanged(auth, async (newUser) => {
        try {
          if (!newUser) {
            // Only try guest sign-in once
            if (isInitialLoad) {
              const anonUser = await signInAnonymous();
              if (anonUser) setUser(anonUser);
            }
          } else {
            setUser(newUser);
            // Show sync message only if it's not the initial load for an anonymous user
            if (!isInitialLoad || !newUser.isAnonymous) {
              setShowSyncMessage(true);
              setTimeout(() => setShowSyncMessage(false), 3000);
            }
          }
        } catch (error) {
          console.error("Auth state processing error:", error);
        } finally {
          isInitialLoad = false;
          setIsAuthLoading(false);
          clearTimeout(loadingTimeout);
        }
      });
    } else {
      setIsAuthLoading(false);
      clearTimeout(loadingTimeout);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (selectedNote) {
      const newContent = getNoteForTopic(selectedNote.topic, noteStyle);
      setSelectedNote(prev => prev ? { ...prev, content: newContent } : null);
    }
    localStorage.setItem('sem4-note-style', noteStyle);
  }, [noteStyle]);

  useEffect(() => {
    localStorage.setItem('sem4-layout-mode', layoutMode);
  }, [layoutMode]);

  useEffect(() => {
    localStorage.setItem('sem4-theme', theme);
    const html = document.documentElement;
    const body = document.body;
    if (theme === 'dark') {
      html.classList.add('dark');
      html.style.colorScheme = 'dark';
      body.classList.add('dark');
    } else {
      html.classList.remove('dark');
      html.style.colorScheme = 'light';
      body.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('sem4-filter', filter);
  }, [filter]);

  const getFilterClass = () => {
    if (filter === 'reading') return 'sepia-[0.4] brightness-[0.96] contrast-[0.95]';
    if (filter === 'grayscale') return 'grayscale contrast-[1.1]';
    return '';
  };

  const toggleProgress = (topicId: string) => {
    const newProgress = { ...progress, [topicId]: !progress[topicId] };
    setProgress(newProgress);
    localStorage.setItem('sem4-progress', JSON.stringify(newProgress));
  };

  const getTopicId = (s: Subject, u: Unit, t: Topic) => `${s.id}-${u.id}-${t.title}`;

  const calculateTotalProgress = () => {
    let total = 0;
    let done = 0;
    syllabusData.forEach(s => {
      s.units.forEach(u => {
        u.topics.forEach(t => {
          total++;
          if (progress[getTopicId(s, u, t)]) done++;
        });
      });
    });
    if (total === 0) return 0;
    return Math.round((done / total) * 100);
  };

  const handleExplain = (topic: string) => {
    try {
      const noteContent = getNoteForTopic(topic, noteStyle);
      setSelectedNote({ topic, content: noteContent });
    } catch (e) {
      console.error("Error explaining topic:", e);
    }
  };

  const handleYouTube = (topic: string, subjectCode?: string) => {
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(topic + " BCA " + (subjectCode || activeSubject.code))}`, '_blank');
  };

  const handleChatGPT = (topic: string, subjectTitle?: string) => {
    const stylePrompt = noteStyle === 'bulletin' 
      ? 'in detailed bullet points' 
      : noteStyle === 'short' 
        ? 'in a concise summary' 
        : 'in a comprehensive detailed explanation';
    
    const prompt = `Explain the topic "${topic}" from the BCA Semester 4 syllabus of "${subjectTitle || activeSubject.title}" ${stylePrompt} in Hinglish. Make it easy to understand for exams.`;
    window.open(`https://chatgpt.com/?q=${encodeURIComponent(prompt)}`, '_blank');
  };

  if (!activeSubject) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-dark-bg flex items-center justify-center p-6">
        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Error loading syllabus data...</p>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-bg dark:bg-dark-bg text-slate-800 dark:text-slate-200 font-sans transition-colors duration-300 ${getFilterClass()}`}>
      {/* Loading Overlay */}
      <AnimatePresence>
        {isAuthLoading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white dark:bg-dark-bg flex flex-col items-center justify-center"
          >
            <div className="relative">
              <motion.div 
                animate={{ 
                  rotate: 360,
                  borderRadius: ["20%", "50%", "20%"]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-16 h-16 bg-primary/20 border-4 border-primary rounded-2xl"
              />
              <BookOpen className="w-8 h-8 text-primary absolute inset-0 m-auto animate-pulse" />
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-xs font-black uppercase tracking-[0.4em] text-slate-400 dark:text-slate-600 animate-pulse"
            >
              Preparing Syllabuzz...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-dark-surface/80 backdrop-blur-md border-b border-border dark:border-dark-border transition-colors">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-5 shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20 shrink-0">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="hidden lg:inline font-black text-slate-900 dark:text-white text-xl tracking-tighter">Syllabuzz</span>
            </div>

            <div className="relative">
              <button 
                onClick={() => setIsSemesterOpen(!isSemesterOpen)}
                className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 bg-slate-100/50 dark:bg-dark-bg hover:bg-slate-200/50 dark:hover:bg-slate-800 rounded-lg text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 transition-all border border-slate-200/50 dark:border-dark-border"
              >
                <span className="hidden xs:inline">Sem</span> {selectedSemester}
                <ChevronDown className={`w-3 h-3 transition-transform ${isSemesterOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isSemesterOpen && (
                  <>
                    <div className="fixed inset-0 z-40 bg-black/5 dark:bg-black/20 backdrop-blur-[1px] sm:bg-transparent" onClick={() => setIsSemesterOpen(false)} />
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="fixed sm:absolute left-4 right-4 sm:left-0 sm:right-auto sm:w-32 top-24 sm:top-10 bg-white dark:bg-dark-surface border border-border dark:border-dark-border rounded-2xl shadow-2xl sm:shadow-xl z-50 p-2 overflow-hidden"
                      >
                      {['I', 'II', 'III', 'IV', 'V', 'VI'].map(sem => (
                        <button
                          key={sem}
                          onClick={() => {
                            if (sem === 'IV') setSelectedSemester(sem);
                            setIsSemesterOpen(false);
                          }}
                          className={`w-full px-3 py-2 text-left text-[10px] font-bold uppercase tracking-wider rounded-lg transition-colors ${
                            selectedSemester === sem 
                            ? 'bg-primary/10 text-primary' 
                            : sem === 'IV' 
                              ? 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800' 
                              : 'text-slate-300 dark:text-slate-700 cursor-not-allowed'
                          }`}
                        >
                          Semester {sem}
                          {sem !== 'IV' && <span className="ml-1 text-[8px] opacity-50">(Soon)</span>}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
            
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 bg-slate-100/50 dark:bg-dark-bg hover:bg-slate-200/50 dark:hover:bg-slate-800 rounded-lg sm:rounded-xl text-[9px] sm:text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 transition-all border border-slate-200 dark:border-dark-border"
              >
                <span className="hidden xs:inline">Subject</span>
                <span className="xs:hidden">{activeSubject.code}</span>
                <ChevronDown className={`w-2.5 h-2.5 sm:w-3 sm:h-3 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40 bg-black/5 dark:bg-black/20 backdrop-blur-[1px]" 
                      onClick={() => setIsDropdownOpen(false)}
                    />
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="fixed sm:absolute left-4 right-4 sm:left-0 sm:right-auto sm:w-72 top-24 sm:top-10 bg-white dark:bg-dark-surface border border-border dark:border-dark-border rounded-2xl shadow-2xl z-50 overflow-hidden"
                    >
                      {(syllabusData || []).map(s => (
                        <button
                          key={s.id}
                          onClick={() => {
                            setActiveSubject(s);
                            setIsDropdownOpen(false);
                            setSearchQuery('');
                          }}
                          className={`w-full px-5 py-4 sm:py-3.5 text-left text-[11px] font-bold uppercase tracking-wider transition-colors border-b border-slate-50 dark:border-slate-800 last:border-none ${
                            activeSubject?.id === s.id 
                            ? 'bg-primary text-white' 
                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
                          }`}
                        >
                          <span className="opacity-60 mr-2">{s.code}</span> {s.title}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Predictive Search Bar */}
          <div className="flex-1 max-w-md relative group mx-2">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <SearchIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-100/50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border rounded-full py-1.5 sm:py-2 pl-8 sm:pl-9 pr-8 sm:pr-10 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-2 sm:pr-3 flex items-center text-slate-400 hover:text-slate-600 outline-none"
              >
                <X className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </button>
            )}
          </div>

          <div className="hidden lg:flex items-center gap-4 text-[10px] font-black text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-dark-bg px-4 py-2 rounded-full border border-slate-100 dark:border-dark-border uppercase tracking-[0.1em]">
            <span>Progress</span>
            <div className="w-16 h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary" 
                animate={{ width: `${calculateTotalProgress()}%` }}
              />
            </div>
            <span className="text-primary">{calculateTotalProgress()}%</span>
          </div>

          {/* User Auth Section */}
          <div className="relative">
            {user ? (
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="w-10 h-10 rounded-xl overflow-hidden border-2 border-primary/20 hover:border-primary transition-all shadow-sm relative group"
                >
                  {user.photoURL ? (
                    <img referrerPolicy="no-referrer" src={user.photoURL} alt={user.displayName || 'User'} className="w-full h-full object-cover" />
                  ) : (
                    <div className={`w-full h-full ${user.isAnonymous ? 'bg-slate-100 dark:bg-slate-800 text-slate-400' : 'bg-primary/10 text-primary'} flex items-center justify-center font-bold`}>
                      {user.displayName ? user.displayName[0] : (user.isAnonymous ? <UserIcon className="w-5 h-5" /> : 'U')}
                    </div>
                  )}
                  {user.isAnonymous && <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-yellow-400 border-2 border-white dark:border-dark-bg rounded-full" title="Guest Account" />}
                </button>

                <AnimatePresence>
                  {isUserMenuOpen && (
                    <>
                      <div className="fixed inset-0 z-40 bg-black/5 dark:bg-black/20 backdrop-blur-[2px] sm:backdrop-blur-none" onClick={() => setIsUserMenuOpen(false)} />
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="fixed sm:absolute left-4 right-4 sm:left-auto sm:right-0 top-20 sm:top-12 w-auto sm:w-64 bg-white dark:bg-dark-surface border border-border dark:border-dark-border rounded-2xl shadow-2xl z-50 p-3 overflow-hidden transition-colors"
                      >
                        <div className="px-4 py-4 border-b border-slate-50 dark:border-dark-border mb-2 bg-slate-50/50 dark:bg-dark-bg/30 rounded-xl">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-black uppercase">
                              {user.displayName ? user.displayName[0] : (user.isAnonymous ? <UserIcon className="w-5 h-5 text-slate-400" /> : 'U')}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[11px] font-black text-slate-900 dark:text-white truncate uppercase tracking-wider">
                                {user.displayName || (user.isAnonymous ? 'Guest Explorer' : 'Explorer')}
                              </p>
                              <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 truncate tracking-tight">
                                {user.isAnonymous ? 'Guest Account' : (user.email || 'No email')}
                              </p>
                            </div>
                          </div>
                          
                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-widest text-slate-400">
                              <span>Syllabus Progress</span>
                              <span className="text-primary font-bold">{calculateTotalProgress()}%</span>
                            </div>
                            <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                              <motion.div 
                                className="h-full bg-primary" 
                                initial={{ width: 0 }}
                                animate={{ width: `${calculateTotalProgress()}%` }}
                              />
                            </div>
                          </div>
                        </div>

                        {user.isAnonymous && (
                          <div className="px-1 pb-2">
                            <button
                              onClick={() => {
                                signInWithGoogle();
                                setIsUserMenuOpen(false);
                              }}
                              className="w-full flex items-center justify-between gap-2.5 px-4 py-3 text-left text-[11px] font-black uppercase tracking-widest bg-primary text-white rounded-xl transition-all shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95"
                            >
                              <div className="flex items-center gap-2">
                                <LogIn className="w-4 h-4" />
                                Save Data
                              </div>
                              <ChevronRight className="w-3 h-3 text-white/50" />
                            </button>
                            <p className="mt-2 text-center text-[8px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Connect Google to sync progress</p>
                          </div>
                        )}

                        <div className="mt-1 border-t border-slate-50 dark:border-dark-border pt-1">
                          <button
                            onClick={() => {
                              logout();
                              setIsUserMenuOpen(false);
                            }}
                            className="w-full flex items-center gap-2.5 px-4 py-2.5 text-left text-[11px] font-bold text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-lg transition-all"
                          >
                            <LogOut className="w-4 h-4" />
                            {user.isAnonymous ? 'Reset Account' : 'Sign Out'}
                          </button>
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button 
                onClick={signInWithGoogle}
                className="flex items-center gap-2.5 px-6 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all shadow-lg shadow-primary/20 active:scale-95"
              >
                <LogIn className="w-4 h-4" />
                <span className="hidden sm:inline">Sign In</span>
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <AnimatePresence mode="wait">
          {searchQuery ? (
            <motion.div
              key="search-results"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="flex items-center justify-between mb-10 border-b border-slate-100 dark:border-dark-border pb-4">
                <div className="flex items-center gap-3">
                  <SearchIcon className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    Search Results for "{searchQuery}"
                  </h2>
                </div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-100/50 dark:bg-dark-bg px-4 py-1.5 rounded-full border border-slate-200 dark:border-dark-border">
                  {searchResults.length} {searchResults.length === 1 ? 'Result' : 'Results'}
                </span>
              </div>

              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {searchResults.slice(0, 12).map((result, idx) => {
                    const isDone = progress[result.topicId];
                    return (
                      <motion.div 
                        key={result.topicId}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className={`group p-6 bg-white dark:bg-dark-surface border rounded-2xl card-shadow card-hover transition-all ${
                          isDone ? 'bg-slate-50/50 dark:bg-dark-bg/50 border-slate-100 dark:border-slate-800' : 'border-slate-200 dark:border-dark-border'
                        }`}
                      >
                        <div className="flex justify-between items-start gap-4 mb-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded bg-primary text-white shadow-sm">
                                {result.subject.code}
                              </span>
                              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                                Unit {result.unit?.id?.toString().split('-').pop() || '?'}
                              </span>
                            </div>
                            <h3 className={`text-[16px] font-bold leading-snug ${isDone ? 'text-slate-400 dark:text-slate-600 line-through' : 'text-slate-800 dark:text-slate-200'}`}>
                              {result.topic.title}
                            </h3>
                          </div>
                          <button 
                            onClick={() => toggleProgress(result.topicId)}
                            className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                              isDone ? 'bg-green-500 text-white shadow-lg shadow-green-500/20 rotate-0 scale-100' : 'bg-slate-50 dark:bg-dark-bg text-slate-300 dark:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 group-hover:text-slate-400 dark:group-hover:text-slate-500 rotate-12 scale-90'
                            }`}
                          >
                            <CheckCircle2 className="w-5 h-5" />
                          </button>
                        </div>

                        {result.topic.subtopics && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {result.topic.subtopics.map(sub => (
                              <span key={sub} className="text-[9px] font-black px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-dark-bg text-slate-500 dark:text-slate-400 tracking-tight">
                                {sub}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="flex gap-4 pt-4 border-t border-slate-50 dark:border-slate-800">
                          <button 
                            onClick={() => handleExplain(result.topic.title)}
                            className="text-[10px] font-black uppercase tracking-widest text-primary hover:text-blue-700 flex items-center gap-1.5 transition-colors group/note"
                          >
                            <BookOpen className="w-3.5 h-3.5" /> Notes
                          </button>
                          <button 
                            onClick={() => handleYouTube(result.topic.title, result.subject.code)}
                            className="text-[10px] font-black uppercase tracking-widest text-red-600 hover:text-red-700 flex items-center gap-1.5 transition-colors group/yt"
                          >
                            <Youtube className="w-3.5 h-3.5" /> YouTube
                          </button>
                          <button 
                            onClick={() => handleChatGPT(result.topic.title, result.subject.title)}
                            className="text-[10px] font-black uppercase tracking-widest text-emerald-600 hover:text-emerald-700 flex items-center gap-1.5 transition-colors group/gpt"
                          >
                            <ExternalLink className="w-3.5 h-3.5" /> Tutor
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-20 h-20 bg-slate-100 dark:bg-dark-surface rounded-[2rem] flex items-center justify-center mb-6 border border-slate-200 dark:border-dark-border">
                    <SearchIcon className="w-8 h-8 text-slate-300" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-400">No matching topics found</h3>
                  <p className="text-slate-500 text-sm mt-2 max-w-sm">We couldn't find anything related to "{searchQuery}". Try more specific keywords or check spelling.</p>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="main-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="mb-12 sm:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6 sm:gap-8">
                <motion.div 
                  key={activeSubject.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-xl"
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter leading-tight">
                    {activeSubject.title}
                  </h1>
                  <div className="mt-4 flex items-center gap-3 sm:gap-4">
                    <span className="text-[10px] sm:text-xs font-black bg-primary text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg tracking-widest shadow-lg shadow-primary/20">
                      {activeSubject.code}
                    </span>
                    <div className="h-0.5 w-6 sm:w-8 bg-slate-200 dark:bg-slate-700" />
                    <p className="text-slate-400 dark:text-slate-500 font-bold uppercase text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em]">Module Guidance Portal</p>
                  </div>
                </motion.div>

                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <div className="relative">
                    <button 
                      onClick={() => setIsThemeOpen(!isThemeOpen)}
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white dark:bg-dark-surface hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl text-[10px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 transition-all border border-slate-200 dark:border-dark-border shadow-sm"
                    >
                      {theme === 'light' ? <Sun className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> : <Moon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
                      <span className="hidden xs:inline">Theme</span>
                    </button>
                    
                    <AnimatePresence>
                      {isThemeOpen && (
                        <>
                          <div className="fixed inset-0 z-40 bg-black/5 dark:bg-black/20 backdrop-blur-[1px] sm:bg-transparent" onClick={() => setIsThemeOpen(false)} />
                          <motion.div 
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="fixed sm:absolute left-4 right-4 sm:left-auto sm:right-0 sm:w-36 top-1/2 sm:top-auto sm:mt-2 -translate-y-1/2 sm:translate-y-0 bg-white dark:bg-dark-surface border border-border dark:border-dark-border rounded-2xl sm:rounded-xl shadow-2xl z-50 p-2 overflow-hidden"
                          >
                            <button
                              onClick={() => { setTheme('light'); setIsThemeOpen(false); }}
                              className={`w-full px-3 py-2 text-left text-[11px] font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2 ${theme === 'light' ? 'bg-primary/10 text-primary' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                            >
                              <Sun className="w-3.5 h-3.5" /> Light
                            </button>
                            <button
                              onClick={() => { setTheme('dark'); setIsThemeOpen(false); }}
                              className={`w-full px-3 py-2 text-left text-[11px] font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2 ${theme === 'dark' ? 'bg-primary/10 text-primary' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                            >
                              <Moon className="w-3.5 h-3.5" /> Dark
                            </button>
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="relative">
                    <button 
                      onClick={() => setIsFilterOpen(!isFilterOpen)}
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white dark:bg-dark-surface hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl text-[10px] sm:text-xs font-bold text-slate-700 dark:text-slate-300 transition-all border border-slate-200 dark:border-dark-border shadow-sm"
                    >
                      <Palette className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span className="hidden xs:inline">Filter</span>
                    </button>
                    
                    <AnimatePresence>
                      {showSyncMessage && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="fixed bottom-10 right-10 z-[100] bg-primary text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border-2 border-white/20 backdrop-blur-md"
                        >
                          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
                            <CheckCircle2 className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-xs font-black uppercase tracking-widest leading-none mb-1">Welcome Back!</p>
                            <p className="text-[10px] font-bold opacity-80 leading-none">Syncing your progress... ✨</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    <AnimatePresence>
                      {isFilterOpen && (
                        <>
                          <div className="fixed inset-0 z-40 bg-black/5 dark:bg-black/20 backdrop-blur-[1px] sm:bg-transparent" onClick={() => setIsFilterOpen(false)} />
                          <motion.div 
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="fixed sm:absolute left-4 right-4 sm:left-auto sm:right-0 sm:w-44 top-1/2 sm:top-auto sm:mt-2 -translate-y-1/2 sm:translate-y-0 bg-white dark:bg-dark-surface border border-border dark:border-dark-border rounded-2xl sm:rounded-xl shadow-2xl z-50 p-2 overflow-hidden"
                          >
                            <button
                              onClick={() => { setFilter('none'); setIsFilterOpen(false); }}
                              className={`w-full px-3 py-2 text-left text-[11px] font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2 ${filter === 'none' ? 'bg-primary/10 text-primary' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                            >
                              Standard
                            </button>
                            <button
                              onClick={() => { setFilter('reading'); setIsFilterOpen(false); }}
                              className={`w-full px-3 py-2 text-left text-[11px] font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2 ${filter === 'reading' ? 'bg-primary/10 text-primary' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                            >
                              Reading Mode
                            </button>
                            <button
                              onClick={() => { setFilter('grayscale'); setIsFilterOpen(false); }}
                              className={`w-full px-3 py-2 text-left text-[11px] font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2 ${filter === 'grayscale' ? 'bg-primary/10 text-primary' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                            >
                              Grayscale
                            </button>
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="flex bg-slate-100 dark:bg-dark-surface p-1 rounded-xl border border-slate-200 dark:border-dark-border">
                    <button 
                      onClick={() => setLayoutMode('grid')}
                      className={`flex items-center gap-1 xs:gap-2 px-2 sm:px-4 py-2 rounded-lg text-[10px] sm:text-xs font-bold transition-all ${layoutMode === 'grid' ? 'bg-white dark:bg-slate-800 text-primary shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                      <LayoutGrid className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> <span className="hidden xs:inline">Grid</span>
                    </button>
                    <button 
                      onClick={() => setLayoutMode('list')}
                      className={`flex items-center gap-1 xs:gap-2 px-2 sm:px-4 py-2 rounded-lg text-[10px] sm:text-xs font-bold transition-all ${layoutMode === 'list' ? 'bg-white dark:bg-slate-800 text-primary shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                      <ListOrdered className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> <span className="hidden xs:inline">List</span>
                    </button>
                    <button 
                      onClick={() => setLayoutMode('roadmap')}
                      className={`flex items-center gap-1 xs:gap-2 px-2 sm:px-4 py-2 rounded-lg text-[10px] sm:text-xs font-bold transition-all ${layoutMode === 'roadmap' ? 'bg-white dark:bg-slate-800 text-primary shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                      <MapIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> <span className="hidden xs:inline">Map</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-20 sm:space-y-32">
                {layoutMode === 'roadmap' ? (
                  <div className="relative pb-24">
                    {/* Visual Roadmap Path */}
                    <div className="absolute left-6 sm:left-1/2 top-10 bottom-24 w-1 sm:-ml-0.5 bg-gradient-to-b from-primary via-blue-400/50 to-primary/5 rounded-full hidden sm:block" />
                    
                    {activeSubject.units.map((unit, uIdx) => (
                      <motion.div 
                        key={unit.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`relative mb-24 flex flex-col sm:flex-row items-start sm:items-center gap-12 sm:gap-24 ${uIdx % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                      >
                        {/* Circular Progress Node */}
                        <div className="absolute left-6 sm:left-1/2 top-4 sm:top-auto w-10 h-10 bg-white dark:bg-dark-surface border-4 border-primary rounded-2xl z-10 sm:-ml-5 flex items-center justify-center shadow-xl rotate-45 group">
                          <span className="text-[11px] font-black -rotate-45 text-primary">0{uIdx + 1}</span>
                        </div>

                        {/* Roadmap Info Card */}
                        <div className={`flex-1 w-full pl-16 sm:pl-0 ${uIdx % 2 === 0 ? 'sm:text-right' : 'sm:text-left'}`}>
                          <div className={`p-8 bg-white dark:bg-dark-surface border border-slate-100 dark:border-dark-border rounded-[2.5rem] shadow-2xl shadow-slate-200/50 dark:shadow-none transition-all hover:scale-[1.02] active:scale-[0.98]`}>
                            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-primary mb-3 block">Module 0{uIdx + 1}</span>
                            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tighter leading-none mb-6">
                              {unit.title}
                            </h3>
                            
                            <div className={`flex flex-wrap gap-2 mb-8 ${uIdx % 2 === 0 ? 'sm:justify-end' : 'sm:justify-start'}`}>
                              {unit.topics.slice(0, 4).map(t => (
                                <span key={t.id} className="text-[9px] font-bold px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-lg uppercase tracking-wider">
                                  {t.title}
                                </span>
                              ))}
                              {unit.topics.length > 4 && (
                                <span className="text-[9px] font-black px-3 py-1.5 bg-primary/10 text-primary rounded-lg uppercase">
                                  +{unit.topics.length - 4} Mastery Topics
                                </span>
                              )}
                            </div>

                            <button 
                              onClick={() => {
                                setLayoutMode('grid');
                                setTimeout(() => {
                                  const el = document.getElementById(unit.id);
                                  if (el) window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
                                }, 100);
                              }}
                              className={`flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-all ${uIdx % 2 === 0 ? 'sm:flex-row-reverse sm:ml-auto' : ''}`}
                            >
                              Explore syllabus <ArrowRight className={`w-4 h-4 ${uIdx % 2 === 0 ? 'rotate-180' : ''}`} />
                            </button>
                          </div>
                        </div>

                        {/* Mirror Spacer */}
                        <div className="flex-1 hidden sm:block" />
                      </motion.div>
                    ))}

                    {/* Roadmap Completion Trophy */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      className="absolute bottom-0 left-6 sm:left-1/2 sm:-ml-12 flex flex-col items-center"
                    >
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-[2.5rem] flex items-center justify-center shadow-2xl ring-8 ring-amber-500/10 rotate-12 hover:rotate-0 transition-transform">
                        <Trophy className="w-10 h-10 sm:w-12 sm:h-12 text-white drop-shadow-lg" />
                      </div>
                      <p className="mt-6 text-[10px] font-black uppercase tracking-[0.5em] text-amber-600 whitespace-nowrap animate-pulse">Subject Complete</p>
                    </motion.div>
                  </div>
                ) : (
                  activeSubject.units.map((unit, uIdx) => (
                    <section key={unit.id} id={unit.id} className="relative scroll-mt-20">
                      <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-10 border-b border-slate-100 dark:border-dark-border pb-4">
                        <span className="text-xs sm:text-sm font-black text-white bg-slate-900 dark:bg-slate-700 px-2 sm:px-3 py-1 rounded">0{uIdx + 1}</span>
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">{unit.title}</h2>
                      </div>

                      {layoutMode === 'grid' ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {unit.topics.map(topic => {
                          const topicId = getTopicId(activeSubject, unit, topic);
                          const isDone = progress[topicId];
                          return (
                            <motion.div 
                              key={topicId}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              className={`group p-6 bg-white dark:bg-dark-surface border rounded-2xl card-shadow card-hover transition-all ${
                                isDone ? 'bg-slate-50/50 dark:bg-dark-bg/50 border-slate-100 dark:border-slate-800' : 'border-slate-200 dark:border-dark-border'
                              }`}
                            >
                              <div className="flex justify-between items-start gap-4 mb-4">
                                <h3 className={`text-[15px] font-bold leading-snug ${isDone ? 'text-slate-400 dark:text-slate-600 line-through' : 'text-slate-800 dark:text-slate-200'}`}>
                                  {topic.title}
                                </h3>
                                <button 
                                  onClick={() => toggleProgress(topicId)}
                                  className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                                    isDone ? 'bg-green-500 text-white shadow-lg shadow-green-500/20' : 'bg-slate-50 dark:bg-dark-bg text-slate-300 dark:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 group-hover:text-slate-400 dark:group-hover:text-slate-500'
                                  }`}
                                >
                                  <CheckCircle2 className="w-5 h-5" />
                                </button>
                              </div>

                              {topic.subtopics && (
                                <div className="flex flex-wrap gap-2 mb-6">
                                  {topic.subtopics.map(sub => (
                                    <span key={sub} className="text-[10px] font-bold px-2 py-1 rounded-md bg-slate-100 dark:bg-dark-bg text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                      {sub}
                                    </span>
                                  ))}
                                </div>
                              )}

                              <div className="flex flex-wrap gap-4 xs:gap-6 pt-4 border-t border-slate-50 dark:border-slate-800">
                                <a 
                                  href={`https://www.google.com/search?q=${encodeURIComponent(topic.title + " BCA Notes")}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 hover:text-primary flex items-center gap-1.5 sm:gap-2 transition-colors"
                                >
                                  <SearchIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Source
                                </a>
                                <button 
                                  onClick={() => handleExplain(topic.title)}
                                  className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-primary hover:text-blue-700 flex items-center gap-1.5 sm:gap-2 transition-colors group/ai text-left"
                                >
                                  <BookOpen className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover/ai:scale-110 transition-transform shrink-0" /> Hinglish Notes
                                </button>
                                <button 
                                  onClick={() => handleYouTube(topic.title)}
                                  className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-red-600 hover:text-red-700 flex items-center gap-1.5 sm:gap-2 transition-colors group/yt"
                                >
                                  <Youtube className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" /> YouTube
                                </button>
                                <button 
                                  onClick={() => handleChatGPT(topic.title)}
                                  className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-emerald-600 hover:text-emerald-700 flex items-center gap-1.5 sm:gap-2 transition-colors group/gpt"
                                >
                                  <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 rotate-45 group-hover/gpt:translate-x-0.5 group-hover/gpt:-translate-y-0.5 transition-transform shrink-0" /> Tutor
                                </button>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border rounded-3xl overflow-hidden card-shadow">
                        {unit.topics.map((topic, tIdx) => {
                          const topicId = getTopicId(activeSubject, unit, topic);
                          const isDone = progress[topicId];
                          return (
                            <motion.div 
                              key={topicId}
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              className={`flex flex-col md:flex-row md:items-center justify-between p-6 border-b border-slate-50 dark:border-slate-800 last:border-none transition-colors ${isDone ? 'bg-slate-50/30 dark:bg-dark-bg/10' : 'hover:bg-slate-50/50 dark:hover:bg-slate-800/50'}`}
                            >
                              <div className="flex items-center gap-6 flex-1 mb-4 md:mb-0">
                                <span className="text-xs font-black text-slate-300 dark:text-slate-600 w-6">{uIdx + 1}.{tIdx + 1}</span>
                                <div className="flex-1">
                                  <h3 className={`text-[15px] font-bold ${isDone ? 'text-slate-400 dark:text-slate-600 line-through' : 'text-slate-800 dark:text-slate-200'}`}>
                                    {topic.title}
                                  </h3>
                                  {topic.subtopics && (
                                    <div className="flex flex-wrap gap-2 mt-2">
                                      {topic.subtopics.map(sub => (
                                        <span key={sub} className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                                          {sub}
                                        </span>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-6 self-end md:self-auto">
                                <div className="flex items-center gap-4">
                                  <button 
                                    onClick={() => handleExplain(topic.title)}
                                    className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-all"
                                    title="Hinglish Notes"
                                  >
                                    <BookOpen className="w-4 h-4" />
                                  </button>
                                  <button 
                                    onClick={() => handleYouTube(topic.title)}
                                    className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all"
                                    title="YouTube"
                                  >
                                    <Youtube className="w-4 h-4" />
                                  </button>
                                  <button 
                                    onClick={() => handleChatGPT(topic.title)}
                                    className="p-2 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg transition-all"
                                    title="ChatGPT"
                                  >
                                    <ExternalLink className="w-4 h-4" />
                                  </button>
                                </div>
                                
                                <button 
                                  onClick={() => toggleProgress(topicId)}
                                  className={`w-10 h-10 rounded-xl flex items-center justify-center border-2 transition-all ${
                                    isDone ? 'bg-green-500 border-green-500 text-white' : 'border-slate-100 dark:border-slate-800 text-slate-200 dark:text-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:text-slate-400 dark:hover:text-slate-500'
                                  }`}
                                >
                                  <CheckCircle2 className="w-5 h-5" />
                                </button>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    )}
                  </section>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>

      <footer className="border-t border-slate-100 dark:border-dark-border py-20 bg-white dark:bg-dark-surface transition-colors">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center gap-6">
          <div className="w-12 h-1 bg-slate-200 dark:bg-slate-700 rounded-full mb-2" />
          <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">© 2024 Syllabuzz Academics</p>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 dark:text-slate-600">
            <span>Official Syllabus</span>
            <span>Reliable Content</span>
            <span>BCA Companion</span>
          </div>
        </div>
      </footer>

      {/* Notes Modal */}
      <AnimatePresence>
        {selectedNote && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNote(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white dark:bg-dark-surface rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="px-6 sm:px-8 py-4 sm:py-6 border-b border-slate-100 dark:border-dark-border flex justify-between items-center bg-slate-50/50 dark:bg-dark-bg/50 shrink-0">
                <div className="flex-1 min-w-0 mr-4">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex items-center gap-1.5 bg-primary/10 px-1.5 sm:px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-primary">
                      <BookOpen className="w-2.5 h-2.5 fill-primary/20" />
                      Academic Standard
                    </div>
                    <span className="hidden xs:inline text-[8px] sm:text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">• Updated 2024</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-tight truncate">{selectedNote.topic}</h3>
                </div>
                
                <div className="flex items-center gap-2 shrink-0">
                  <div className="relative">
                    <button 
                      onClick={() => setShowSettings(!showSettings)}
                      className={`p-1.5 sm:p-2 rounded-full transition-all ${showSettings ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-slate-100 dark:bg-dark-bg text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'}`}
                    >
                      <Settings2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                    
                    <AnimatePresence>
                      {showSettings && (
                        <motion.div 
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          className="absolute right-0 top-12 mt-2 w-48 bg-white dark:bg-dark-surface border border-border dark:border-dark-border rounded-xl shadow-xl z-50 p-2 overflow-hidden"
                        >
                          <div className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest px-3 mb-2">Note Style</div>
                          {(['short', 'detailed', 'bulletin'] as NoteStyle[]).map(style => (
                            <button
                              key={style}
                              onClick={() => {
                                setNoteStyle(style);
                              }}
                              className={`w-full px-3 py-2 text-left text-[11px] font-bold uppercase tracking-wider rounded-lg transition-colors mb-1 last:mb-0 ${
                                noteStyle === style 
                                ? 'bg-primary/10 text-primary' 
                                : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                              }`}
                            >
                              {style}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <button onClick={() => setSelectedNote(null)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                    <X className="w-6 h-6 text-slate-400 dark:text-slate-500" />
                  </button>
                </div>
              </div>
              
              <div className="p-6 sm:p-10 overflow-y-auto grow">
                <div className="prose prose-slate dark:prose-invert prose-sm max-w-none">
                  {noteStyle === 'bulletin' && Array.isArray(selectedNote.content) ? (
                    <ul className="space-y-4 sm:space-y-6">
                      {selectedNote.content.map((bullet, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-3 sm:gap-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base font-medium leading-relaxed"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{bullet}</span>
                        </motion.li>
                      ))}
                    </ul>
                  ) : (
                    <motion.div 
                      key={noteStyle}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-4 sm:space-y-6"
                    >
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed sm:leading-loose whitespace-pre-wrap text-[15px] sm:text-[17px] font-medium tracking-tight">
                        {selectedNote.content}
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
              
              <div className="px-6 sm:px-8 py-4 sm:py-6 bg-slate-50 dark:bg-dark-bg border-t border-slate-100 dark:border-dark-border flex justify-end shrink-0">
                <button 
                  onClick={() => setSelectedNote(null)} 
                  className="w-full sm:w-auto bg-slate-900 dark:bg-primary text-white text-[11px] sm:text-xs font-black uppercase tracking-widest rounded-xl px-8 sm:px-10 py-3 hover:bg-slate-800 dark:hover:bg-blue-700 transition-all shadow-lg active:scale-95"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-10 right-10 w-14 h-14 bg-slate-900 dark:bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all z-[60] shadow-slate-900/40 dark:shadow-primary/40"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
