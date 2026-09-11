import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Topic, TopicCategory } from '../data/topics';
import { TopicCard } from './TopicCard';

type View = 'grid' | 'table';

export default function TopicsGrid({ topics }: { topics: Topic[] }) {
  const [view, setView] = useState<View>('grid');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<TopicCategory | 'all'>('all');

  const filtered = useMemo(() => {
    return topics.filter(t => {
      const matchesQ = !query || (t.title + t.summary + t.tags.join(' ')).toLowerCase().includes(query.toLowerCase());
      const matchesCat = category === 'all' || t.category === category;
      return matchesQ && matchesCat;
    });
  }, [topics, query, category]);

  return (
    <div className="w-full">
      {/* Controls */}
      <div className="sticky top-[64px] z-20 backdrop-blur-xl bg-[#fcfcfa]/80 border-y border-line -mx-6 md:-mx-10 px-6 md:px-10 py-4 flex flex-col md:flex-row gap-4 justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search topics, tags, words…" className="h-9 w-[280px] rounded-full border border-line bg-white px-4 pr-9 text-[13px] outline-none focus:ring-2 focus:ring-black/10" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 text-[12px]">⌘K</span>
          </div>
          <div className="hidden md:flex items-center gap-1 ml-2 p-1 rounded-full bg-neutral-100 border border-line">
            {(['all','writing','projects','experiments','notes','talks'] as const).map(c => (
              <button key={c} onClick={()=>setCategory(c as any)} className={`px-3 h-7 rounded-full text-[12px] capitalize transition ${category===c ? 'bg-black text-white' : 'text-neutral-600 hover:text-black'}`}>{c}</button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[12px] text-neutral-500">{filtered.length} items</span>
          <div className="flex p-1 rounded-full border border-line bg-white">
            <button onClick={()=>setView('grid')} className={`px-3 h-7 rounded-full text-[12px] ${view==='grid' ? 'bg-black text-white' : 'text-neutral-600'}`}>Cards</button>
            <button onClick={()=>setView('table')} className={`px-3 h-7 rounded-full text-[12px] ${view==='table' ? 'bg-black text-white' : 'text-neutral-600'}`}>Table</button>
          </div>
        </div>
      </div>

      <div className="md:hidden flex gap-1 overflow-auto py-3">
        {(['all','writing','projects','experiments','notes','talks'] as const).map(c => (
          <button key={c} onClick={()=>setCategory(c as any)} className={`whitespace-nowrap px-3 h-8 rounded-full text-[12px] capitalize border ${category===c ? 'bg-black text-white border-black' : 'bg-white border-line text-neutral-600'}`}>{c}</button>
        ))}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        {view === 'grid' ? (
          <motion.div key="grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((t,i)=> <TopicCard key={t.slug} topic={t} index={i} />)}
          </motion.div>
        ) : (
          <motion.div key="table" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-8 overflow-x-auto rounded-[16px] border border-line bg-white">
            <table className="w-full text-left text-[13px]">
              <thead className="bg-[#fcfcfa] border-b border-line text-[11px] uppercase tracking-widest text-neutral-500">
                <tr>
                  <th className="px-5 py-3 font-medium">Title</th>
                  <th className="px-5 py-3 font-medium">Category</th>
                  <th className="px-5 py-3 font-medium">Year</th>
                  <th className="px-5 py-3 font-medium">Tags</th>
                  <th className="px-5 py-3 font-medium">Time</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(t=> (
                  <tr key={t.slug} className="border-b border-line last:border-0 hover:bg-neutral-50/70 group">
                    <td className="px-5 py-4">
                      <a href={`/topics/${t.slug}`} className="font-medium group-hover:underline decoration-2 underline-offset-4">
                        {t.title}
                        <span className="block text-[12px] text-neutral-500 font-normal mt-0.5 line-clamp-1">{t.summary}</span>
                      </a>
                    </td>
                    <td className="px-5 py-4"><span className="px-2 py-1 rounded-full bg-black text-white text-[10px] uppercase tracking-widest">{t.category}</span></td>
                    <td className="px-5 py-4 text-neutral-600">{t.year}</td>
                    <td className="px-5 py-4"><span className="text-neutral-600">{t.tags.join(', ')}</span></td>
                    <td className="px-5 py-4 text-neutral-500">{t.readingTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
