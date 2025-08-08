import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../lib/projects';

export default function ProjectDetails() {
  const { slug } = useParams();
  const index = useMemo(() => projects.findIndex(p => p.slug === slug), [slug]);
  const project = index >= 0 ? projects[index] : null;

  if (!project) {
    return (
      <div className="relative min-h-screen w-full py-24">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(76,29,149,0.08),rgba(0,0,0,0.2))]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:120px_120px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"></div>
        </div>
        <div className="relative container mx-auto px-4 md:px-6 z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-semibold text-white">Project not found</h1>
          <Link to="/projects" className="mt-6 inline-block px-6 py-3 rounded-xl bg-white/5 text-white border border-white/10 hover:bg-white/10">Back to projects</Link>
        </div>
      </div>
    );
  }

  const number = String(index + 1).padStart(3, '0');

  return (
    <div className="relative min-h-screen w-full">
      {/* Top hero */}
      <div className="relative w-full">
        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 md:px-6 pt-20 pb-8 md:pt-24 md:pb-12">
            <div className="text-white/25 text-4xl md:text-6xl font-semibold mb-2">{number}</div>
            <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">{project.title}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/10 backdrop-blur">{project.category}</span>
              <span className="h-px w-8 bg-white/20"></span>
              <span className="text-white/80 text-xs tracking-wider uppercase">{project.timeline}</span>
              {project.client && (
                <>
                  <span className="h-px w-8 bg-white/20"></span>
                  <span className="text-white/80 text-xs tracking-wider uppercase">{project.client}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="relative">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(76,29,149,0.08),rgba(0,0,0,0.2))]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:120px_120px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]"></div>
        </div>

        <div className="relative container mx-auto px-4 md:px-6 z-10 py-12 md:py-16">
          {/* Meta grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-14">
            {[{ label: 'Client', value: project.client }, { label: 'Role', value: project.role }, { label: 'Duration', value: project.timeline }, { label: 'Stack', value: project.technologies }]
              .filter(m => m.value)
              .map((m, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-4">
                  <div className="text-xs text-white/60 uppercase tracking-wider mb-1">{m.label}</div>
                  <div className="text-white/90 text-sm">{m.value}</div>
                </div>
              ))}
          </div>

          {/* Narrative */}
          {project.overview && (
            <section className="mb-10 md:mb-14 max-w-3xl">
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">Overview</h2>
              <p className="text-gray-300 leading-relaxed">{project.overview}</p>
            </section>
          )}
          {project.process && (
            <section className="mb-10 md:mb-14 max-w-3xl">
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">Process & Challenges</h2>
              <p className="text-gray-300 leading-relaxed">{project.process}</p>
            </section>
          )}

          {/* Gallery */}
          {project.gallery?.length ? (
            <section className="mb-10 md:mb-14">
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {project.gallery.map((img, i) => (
                  <div key={i} className="overflow-hidden rounded-2xl border border-white/10">
                    <img src={img} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all">View Live</a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-xl bg-white/5 text-white text-sm font-medium border border-white/10 hover:bg-white/10 transition-all">Source Code</a>
            )}
            <Link to="/projects" className="px-5 py-2.5 rounded-xl text-white/80 text-sm hover:text-white transition-colors">Back to projects</Link>
          </div>
        </div>
      </div>
    </div>
  );
}


