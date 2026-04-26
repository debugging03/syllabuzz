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
  Settings2,
  LayoutGrid,
  ListOrdered,
  Sun,
  Moon,
  Palette,
  ExternalLink,
  Youtube
} from 'lucide-react';
import { syllabusData, Subject, Topic, Unit } from './syllabusData';
import { getNoteForTopic, NoteStyle } from './notesData';

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
  const [layoutMode, setLayoutMode] = useState<'grid' | 'list'>('grid');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [filter, setFilter] = useState<'none' | 'reading' | 'grayscale'>('none');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSemesterOpen, setIsSemesterOpen] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState('IV');
  
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
    if (saved) setProgress(JSON.parse(saved));

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
    return () => window.removeEventListener('scroll', handleScroll);
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
    const noteContent = getNoteForTopic(topic, noteStyle);
    setSelectedNote({ topic, content: noteContent });
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

  return (
    <div className={`min-h-screen bg-bg dark:bg-dark-bg text-slate-800 dark:text-slate-200 font-sans transition-colors duration-300 ${getFilterClass()}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-dark-surface/80 backdrop-blur-md border-b border-border dark:border-dark-border transition-colors">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-5 shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="hidden sm:inline font-black text-slate-900 dark:text-white text-xl tracking-tighter">Syllabuzz</span>
            </div>

            <div className="relative">
              <button 
                onClick={() => setIsSemesterOpen(!isSemesterOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100/50 dark:bg-dark-bg hover:bg-slate-200/50 dark:hover:bg-slate-800 rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 transition-all border border-slate-200/50 dark:border-dark-border"
              >
                Sem {selectedSemester}
                <ChevronDown className={`w-3 h-3 transition-transform ${isSemesterOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isSemesterOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsSemesterOpen(false)} />
                    <motion.div 
                      initial={{ opacity: 0, y: 5, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.95 }}
                      className="absolute left-0 mt-2 w-32 bg-white dark:bg-dark-surface border border-border dark:border-dark-border rounded-xl shadow-xl z-50 p-1.5 overflow-hidden"
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
            
            <div className="relative hidden md:block">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-slate-100/50 dark:bg-dark-bg hover:bg-slate-200/50 dark:hover:bg-slate-800 rounded-xl text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 transition-all border border-slate-200 dark:border-dark-border"
              >
                Subject
                <ChevronDown className={`w-3 h-3 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setIsDropdownOpen(false)}
                    />
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute left-0 mt-2 w-72 bg-white dark:bg-dark-surface border border-border dark:border-dark-border rounded-xl shadow-xl z-50 overflow-hidden"
                    >
                      {syllabusData.map(s => (
                        <button
                          key={s.id}
                          onClick={() => {
                            setActiveSubject(s);
                            setIsDropdownOpen(false);
                            setSearchQuery('');
                          }}
                          className={`w-full px-5 py-3.5 text-left text-[11px] font-bold uppercase tracking-wider transition-colors border-b border-slate-50 dark:border-slate-800 last:border-none ${
                            activeSubject.id === s.id 
                            ? 'bg-primary text-white' 
                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
                          }`}
                        >
                          {s.code}: {s.title}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Predictive Search Bar */}
          <div className="flex-1 max-w-md relative group">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <SearchIcon className="w-3.5 h-3.5" />
            </div>
            <input 
              type="text" 
              placeholder="Fuzzy search topics (predictive)..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-100/50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border rounded-full py-2 pl-9 pr-10 text-[11px] font-bold uppercase tracking-wider focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
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
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16">
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
                                Unit {result.unit.id.split('-').pop()}
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
              <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                <motion.div 
                  key={activeSubject.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h1 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter leading-tight">
                    {activeSubject.title}
                  </h1>
                  <div className="mt-4 flex items-center gap-4">
                    <span className="text-xs font-black bg-primary text-white px-3 py-1.5 rounded-lg tracking-widest shadow-lg shadow-primary/20">
                      {activeSubject.code}
                    </span>
                    <div className="h-0.5 w-8 bg-slate-200 dark:bg-slate-700" />
                    <p className="text-slate-400 dark:text-slate-500 font-bold uppercase text-[10px] tracking-[0.3em]">Module Guidance Portal</p>
                  </div>
                </motion.div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="relative">
                    <button 
                      onClick={() => setIsThemeOpen(!isThemeOpen)}
                      className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-dark-surface hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 transition-all border border-slate-200 dark:border-dark-border card-shadow"
                    >
                      {theme === 'light' ? <Sun className="w-3.5 -mt-0.5 h-3.5" /> : <Moon className="w-3.5 -mt-0.5 h-3.5" />}
                      Theme
                    </button>
                    
                    <AnimatePresence>
                      {isThemeOpen && (
                        <>
                          <div className="fixed inset-0 z-40" onClick={() => setIsThemeOpen(false)} />
                          <motion.div 
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute right-0 mt-2 w-36 bg-white dark:bg-dark-surface border border-border dark:border-dark-border rounded-xl shadow-xl z-50 p-1.5 overflow-hidden"
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
                      className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-dark-surface hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 transition-all border border-slate-200 dark:border-dark-border card-shadow"
                    >
                      <Palette className="w-3.5 -mt-0.5 h-3.5" /> Filter
                    </button>
                    
                    <AnimatePresence>
                      {isFilterOpen && (
                        <>
                          <div className="fixed inset-0 z-40" onClick={() => setIsFilterOpen(false)} />
                          <motion.div 
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute right-0 mt-2 w-44 bg-white dark:bg-dark-surface border border-border dark:border-dark-border rounded-xl shadow-xl z-50 p-1.5 overflow-hidden"
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
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${layoutMode === 'grid' ? 'bg-white dark:bg-slate-800 text-primary shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                      <LayoutGrid className="w-3 h-3" /> Grid
                    </button>
                    <button 
                      onClick={() => setLayoutMode('list')}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${layoutMode === 'list' ? 'bg-white dark:bg-slate-800 text-primary shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                      <ListOrdered className="w-3 h-3" /> List
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-32">
                {activeSubject.units.map((unit, uIdx) => (
                  <section key={unit.id} className="relative">
                    <div className="flex items-center gap-4 mb-10 border-b border-slate-100 dark:border-dark-border pb-4">
                      <span className="text-sm font-black text-white bg-slate-900 dark:bg-slate-700 px-3 py-1 rounded">0{uIdx + 1}</span>
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">{unit.title}</h2>
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

                              <div className="flex gap-6 pt-4 border-t border-slate-50 dark:border-slate-800">
                                <a 
                                  href={`https://www.google.com/search?q=${encodeURIComponent(topic.title + " BCA Notes")}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[11px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 hover:text-primary flex items-center gap-2 transition-colors"
                                >
                                  <SearchIcon className="w-3.5 h-3.5" /> Source
                                </a>
                                <button 
                                  onClick={() => handleExplain(topic.title)}
                                  className="text-[11px] font-bold uppercase tracking-widest text-primary hover:text-blue-700 flex items-center gap-2 transition-colors group/ai"
                                >
                                  <BookOpen className="w-3.5 h-3.5 group-hover/ai:scale-110 transition-transform" /> Hinglish Notes
                                </button>
                                <button 
                                  onClick={() => handleYouTube(topic.title)}
                                  className="text-[11px] font-bold uppercase tracking-widest text-red-600 hover:text-red-700 flex items-center gap-2 transition-colors group/yt"
                                >
                                  <Youtube className="w-3.5 h-3.5" /> YouTube
                                </button>
                                <button 
                                  onClick={() => handleChatGPT(topic.title)}
                                  className="text-[11px] font-bold uppercase tracking-widest text-emerald-600 hover:text-emerald-700 flex items-center gap-2 transition-colors group/gpt"
                                >
                                  <ExternalLink className="w-3.5 h-3.5 rotate-45 group-hover/gpt:translate-x-0.5 group-hover/gpt:-translate-y-0.5 transition-transform" /> Tutor
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
                ))}
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
              className="relative w-full max-w-2xl bg-white dark:bg-dark-surface rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="px-8 py-6 border-b border-slate-100 dark:border-dark-border flex justify-between items-center bg-slate-50/50 dark:bg-dark-bg/50">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex items-center gap-1.5 bg-primary/10 px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest text-primary">
                      <BookOpen className="w-2.5 h-2.5 fill-primary/20" />
                      Academic Standard
                    </div>
                    <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">• Updated April 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">{selectedNote.topic}</h3>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <button 
                      onClick={() => setShowSettings(!showSettings)}
                      className={`p-2 rounded-full transition-all ${showSettings ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-slate-100 dark:bg-dark-bg text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'}`}
                    >
                      <Settings2 className="w-5 h-5" />
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
              
              <div className="p-10 max-h-[60vh] overflow-y-auto">
                <div className="prose prose-slate dark:prose-invert prose-sm max-w-none">
                  {noteStyle === 'bulletin' && Array.isArray(selectedNote.content) ? (
                    <ul className="space-y-6">
                      {selectedNote.content.map((bullet, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-4 text-slate-700 dark:text-slate-300 text-base font-medium leading-relaxed"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
                          <span>{bullet}</span>
                        </motion.li>
                      ))}
                    </ul>
                  ) : (
                    <motion.div 
                      key={noteStyle}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-6"
                    >
                      <p className="text-slate-700 dark:text-slate-300 leading-loose whitespace-pre-wrap text-[17px] font-medium tracking-tight">
                        {selectedNote.content}
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
              
              <div className="px-8 py-6 bg-slate-50 dark:bg-dark-bg border-t border-slate-100 dark:border-dark-border flex justify-end">
                <button 
                  onClick={() => setSelectedNote(null)} 
                  className="bg-slate-900 dark:bg-primary text-white text-xs font-bold rounded-xl px-10 py-3 hover:bg-slate-800 dark:hover:bg-blue-700 transition-all shadow-lg active:scale-95"
                >
                  Close Notes
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
