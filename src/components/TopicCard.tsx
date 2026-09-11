import { motion } from 'framer-motion';
import type { Topic } from '../data/topics';

export function TopicCard({ topic, index }: { topic: Topic; index: number }) {
  return (
    <motion.a
      href={`/topics/${topic.slug}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.6, ease: [0.16,1,0.3,1] }}
      whileHover={{ y: -2 }}
      className="group relative block rounded-[20px] border border-line bg-white p-6 shadow-soft hover:shadow-card transition-all"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-[10px] tracking-widest uppercase px-2 py-1 rounded-full bg-neutral-900 text-white">{topic.category}</span>
          <span className="text-[11px] text-neutral-400">{topic.year} · {topic.readingTime}</span>
        </div>
        <span className="text-neutral-300 group-hover:text-black group-hover:translate-x-0.5 transition-all">↗</span>
      </div>
      <h3 className="mt-4 text-[18px] font-medium leading-[1.2] tracking-tight group-hover:tracking-[-0.01em] transition-all">{topic.title}</h3>
      <p className="mt-2 text-[14px] leading-[1.5] text-neutral-600 line-clamp-2">{topic.summary}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {topic.tags.map(t => <span key={t} className="text-[11px] px-2 py-1 rounded-full border border-line bg-[#fcfcfa]">{t}</span>)}
      </div>
    </motion.a>
  );
}
