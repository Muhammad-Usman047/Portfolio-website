import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import PageWrap from '../Components/PageWrap';
import Reveal from '../Components/Reveal';
import { projects } from '../Data/projects';

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <PageWrap>
        <section className="section wrap">
          <Reveal>
            <p className="eyebrow">404</p>
            <h1 style={{ fontSize: 'clamp(2.6rem, 8vw, 5rem)', marginTop: '1rem', letterSpacing: '-0.04em' }}>
              Project not found.
            </h1>
            <p style={{ color: 'var(--text-muted)', marginTop: '1rem', fontSize: '1.05rem' }}>
              That case study doesn't exist — maybe the slug is wrong.
            </p>
            <Link to="/work" className="btn btn-ghost" style={{ marginTop: '2rem', display: 'inline-flex' }}>
              ← Back to Work
            </Link>
          </Reveal>
        </section>
      </PageWrap>
    );
  }

  return (
    <PageWrap>

      {/* ── HERO ── */}
      <section className="section wrap cs-hero">
        <Reveal>
          <p className="eyebrow">Case Study</p>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="cs-hero__meta">
            <span className="cs-hero__year">{project.year}</span>
            <span className="cs-hero__role">{project.role}</span>
          </div>
          <h1 className="cs-hero__title">{project.title}</h1>
          <p className="cs-hero__kicker">{project.kicker}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="cs-hero__footer">
            <div className="cs-hero__tags">
              {project.tags.map((tag) => (
                <span key={tag} className="chip">{tag}</span>
              ))}
            </div>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Visit Live Site <span className="arr">↗</span>
              </a>
            )}
          </div>
        </Reveal>
      </section>

      {/* ── COVER ── */}
      <div className="wrap cs-cover-wrap">
        <Reveal>
          <div className="cs-cover" style={{ '--proj-accent': project.accent }}>
            <img src={project.cover} alt={`${project.title} cover screenshot`} />
          </div>
        </Reveal>
      </div>

      {/* ── OVERVIEW GRID ── */}
      <section className="section wrap cs-overview">
        <div className="cs-grid">
          <Reveal className="cs-grid__cell">
            <span className="cs-grid__label">Problem</span>
            <p className="cs-grid__body">{project.problem}</p>
          </Reveal>
          <Reveal delay={0.08} className="cs-grid__cell">
            <span className="cs-grid__label">My Role</span>
            <p className="cs-grid__body">{project.role}</p>
          </Reveal>
        </div>
      </section>

      {/* ── KEY CONTRIBUTIONS ── */}
      <section className="section wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Contributions</p>
          <h2>What I owned</h2>
        </Reveal>
        <Reveal>
          <ul className="cs-list">
            {project.contribution.map((item, i) => (
              <li key={i} className="cs-list__item">
                <span className="cs-list__num">0{i + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ── GALLERY ── */}
      <section className="section wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Product Walkthrough</p>
          <h2>What shipped</h2>
        </Reveal>
        <div className="cs-gallery">
          {project.gallery.map((image, i) => (
            <Reveal key={i} delay={i * 0.06} className="cs-gallery__item">
              <figure>
                <div className="cs-gallery__img-wrap" style={{ '--proj-accent': project.accent }}>
                  <img src={image.src} alt={image.caption} loading="lazy" />
                </div>
                <figcaption className="cs-gallery__caption">
                  <span className="cs-gallery__caption-n">/{String(i + 1).padStart(2, '0')}</span>
                  {image.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Development</p>
          <h2>How I built it</h2>
        </Reveal>
        <Reveal>
          <p className="cs-body-text">{project.process}</p>
        </Reveal>
      </section>

      {/* ── OUTCOME ── */}
      <section className="section wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Results</p>
          <h2>Outcome</h2>
        </Reveal>
        <Reveal>
          <div className="cs-outcomes">
            {project.outcome.map((result, i) => (
              <div key={i} className="cs-outcome">
                <span className="cs-outcome__n">0{i + 1}</span>
                <p>{result}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── BACK NAV ── */}
      <section className="section wrap cs-nav">
        <Reveal>
          <div className="cs-nav__inner">
            <Link to="/work" className="btn btn-ghost">
              ← Back to Projects
            </Link>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Visit Live Site <span className="arr">↗</span>
              </a>
            )}
          </div>
        </Reveal>
      </section>

    </PageWrap>
  );
}