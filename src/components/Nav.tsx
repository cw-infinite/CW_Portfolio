import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Link = { label: string; href: string; html?: string; badge?: string };

export default function Nav({ navLinks, externalLinks }: { navLinks: Link[]; externalLinks: Link[] }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-300 ${scrolled ? 'bg-[#fcfcfa]/80 backdrop-blur-xl border-line' : 'bg-transparent border-transparent'}`}
      >
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 h-[64px] flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <span className="text-[14px] font-medium tracking-tight">CW Infinite</span>
            <span className="hidden md:inline-block h-px w-8 bg-line mx-2" />
            {/* <span className="hidden md:inline text-[13px] text-neutral-500">Portfolio OS v1</span> */}
          </a>

          <nav className="hidden md:flex items-center gap-8 text-[13px]">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="group relative">
                <span className="text-neutral-600 group-hover:text-black transition">{l.label}</span>
                {l.badge && <span className="ml-2 text-[10px] bg-black text-white px-1.5 py-0.5 rounded-full">{l.badge}</span>}
                <span className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full bg-black transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="/topics" className="hidden md:inline-flex text-[13px] bg-black text-white px-4 py-2 rounded-full hover:bg-neutral-800 transition">Explore topics</a>
            <button onClick={() => setOpen(!open)} className="md:hidden h-9 w-9 grid place-items-center rounded-full border border-line">
              <div className="space-y-1">
                <div className={`h-px w-4 bg-black transition ${open ? 'rotate-45 translate-y-[2.5px]' : ''}`} />
                <div className={`h-px w-4 bg-black transition ${open ? '-rotate-45 -translate-y-[2.5px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#fcfcfa] pt-[64px] md:hidden"
          >
            <div className="px-6 py-10 space-y-2">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="block py-4 border-b border-line"
                  onClick={() => setOpen(false)}
                >
                  <div className="flex justify-between items-baseline">
                    <span className="text-[28px] font-display tracking-tight">{l.label}</span>
                    {l.badge && <span className="text-xs bg-black text-white px-2 py-1 rounded-full">{l.badge}</span>}
                  </div>
                  {l.html && <div className="text-[13px] text-neutral-500 mt-1" dangerouslySetInnerHTML={{ __html: l.html }} />}
                </motion.a>
              ))}
              <div className="pt-8 flex gap-6 text-[13px] text-neutral-500">
                {externalLinks.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
