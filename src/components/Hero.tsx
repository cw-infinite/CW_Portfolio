import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      setMouse({ x: (e.clientX / window.innerWidth - 0.5) * 20, y: (e.clientY / window.innerHeight - 0.5) * 20 });
    };
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  return (
    <div ref={ref} className="relative min-h-[94vh] flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-lines opacity-[0.6]" />
      <motion.div style={{ x: mouse.x, y: mouse.y }} className="absolute inset-0">
        <div className="absolute top-[20%] left-[15%] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#e8dcc6]/60 to-[#d6e2e8]/60 blur-[70px]" />
        <div className="absolute top-[40%] right-[10%] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-[#e0d6f0]/50 to-[#f2d6d6]/50 blur-[80px]" />
      </motion.div>

      <motion.div style={{ y: springY, opacity, scale }} className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-10 w-full pt-24">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-end">
          <div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8, ease: [0.16,1,0.3,1] }} className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase border border-line rounded-full px-3 py-1.5 bg-white/60 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for new projects · Merrifield, VA
            </motion.div>

            <div className="mt-8 overflow-hidden">
              <motion.h1 className="font-display font-[700] leading-[0.9] tracking-[-0.04em] text-[13vw] md:text-[88px] lg:text-[112px]">
                {['Portfolio','built for','air & motion'].map((line, i) => (
                  <motion.span key={line} initial={{ y: '110%' }} animate={{ y: '0%' }} transition={{ delay: 0.2 + i*0.12, duration: 1, ease: [0.16,1,0.3,1] }} className="block">
                    <span className={i===2 ? 'text-neutral-400 font-[600]' : ''}>{line}</span>
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }} className="mt-8 max-w-[560px] text-[18px] md:text-[20px] leading-[1.4] text-neutral-600 text-balance">
              Airy, clean, and modern — with a heavy dose of motion. Astro + React + Framer Motion. A living index of writing, projects, and experiments.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="mt-10 flex flex-wrap gap-3">
              <a href="/topics" className="group relative inline-flex items-center gap-3 bg-black text-white px-7 h-[48px] rounded-full text-[14px] font-medium overflow-hidden">
                <span className="relative z-10">Enter archive — 36 topics</span>
                <span className="relative z-10 group-hover:translate-x-1 transition-transform">↗</span>
                <motion.div className="absolute inset-0 bg-neutral-800" initial={{ x: '-100%' }} whileHover={{ x: 0 }} transition={{ ease: [0.16,1,0.3,1], duration: 0.5 }} />
              </a>
              <a href="/about" className="inline-flex items-center h-[48px] px-7 rounded-full border border-line bg-white text-[14px] hover:bg-neutral-50 transition">How I work</a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="mt-14 grid grid-cols-3 max-w-[560px] border-t border-line pt-8 gap-6 text-[13px]">
              {[
                { k: 'Built with', v: 'Astro 5 + React 19' },
                { k: 'Motion', v: 'Framer Motion 12' },
                { k: 'Style', v: 'Tailwind · Airy · Tidy' },
              ].map(item => (
                <div key={item.k}>
                  <div className="text-neutral-400 uppercase tracking-widest text-[10px]">{item.k}</div>
                  <div className="mt-1 font-medium">{item.v}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right stack — floating cards */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 1, ease: [0.16,1,0.3,1] }} className="relative hidden md:block">
            <div className="relative aspect-[4/5] w-full">
              {[
                { top: '0%', left: '10%', rot: -6, title: 'Designing for Air', meta: 'Writing · 6 min' },
                { top: '22%', left: '32%', rot: 4, title: 'Astro Islands', meta: 'Notes · 8 min', dark: true },
                { top: '52%', left: '5%', rot: -3, title: 'Motion Study', meta: 'Experiment · Lab' },
              ].map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ y: 40, rotate: c.rot }}
                  animate={{ y: 0, rotate: c.rot }}
                  transition={{ delay: 0.7 + i*0.15, duration: 0.9, ease: [0.16,1,0.3,1] }}
                  whileHover={{ y: -6, rotate: 0, scale: 1.02 }}
                  style={{ top: c.top, left: c.left }}
                  className={`absolute w-[68%] rounded-[20px] p-5 shadow-card border backdrop-blur-xl ${c.dark ? 'bg-black text-white border-black' : 'bg-white/80 border-white'}`}
                >
                  <div className="h-[92px] rounded-[12px] bg-gradient-to-br from-neutral-100 to-neutral-50 border border-line grid-lines" />
                  <div className="mt-4">
                    <div className="text-[11px] uppercase tracking-widest opacity-60">{c.meta}</div>
                    <div className="mt-1 font-medium leading-tight">{c.title}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Marquee */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-24 md:mt-32 border-y border-line overflow-hidden">
          <div className="flex gap-10 py-4 animate-[marquee_30s_linear_infinite] whitespace-nowrap text-[13px] tracking-wide">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="flex items-center gap-10 text-neutral-500">
                <span>— Astro + React + TypeScript — Framer Motion — Clean, Airy, Tidy — View Transitions — Zero JS by Default —</span>
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
