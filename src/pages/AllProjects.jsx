import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../lib/projects';

export default function AllProjects() {
  const categories = useMemo(() => {
    const set = new Set(['All']);
    projects.forEach(p => p.category && set.add(p.category));
    return Array.from(set);
  }, []);
  const [active, setActive] = useState('All');
  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter(p => p.category === active)),
    [active]
  );

  return (
    <div className="relative min-h-screen w-full pt-16 pb-20">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(76,29,149,0.08),rgba(0,0,0,0.2))]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:120px_120px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"></div>
      </div>

      <div className="relative container mx-auto px-4 md:px-6 z-10">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-white/60 text-xs md:text-sm tracking-widest uppercase mb-3">Projects</p>
          <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">Selected Work</h1>
          <p className="text-gray-400 mt-3">A portfolio of development and design projects.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8 md:mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm border transition-all ${
                active === cat
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white border-transparent'
                  : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((project, idx) => (
            <Link
              key={`${project.slug || project.title}-${idx}`}
              to={`/projects/${project.slug || ''}`}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="relative aspect-[16/11]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent"></div>
                {/* Hover label */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/90 text-xs">
                    See more
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium bg-white/10 text-white border border-white/10 backdrop-blur">
                    {project.category}
                  </span>
                  <span className="h-px w-8 bg-white/20"></span>
                  <span className="text-white/70 text-[11px] tracking-wider uppercase">{project.timeline}</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-gray-300 text-sm mt-1 line-clamp-2">{project.description}</p>
                {/* Tech chips */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {String(project.technologies || '')
                    .split(',')
                    .slice(0, 3)
                    .map((t, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[11px]">
                        {t.trim()}
                      </span>
                    ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}


