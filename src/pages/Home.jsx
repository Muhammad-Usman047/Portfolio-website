import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import PageWrap from '../components/PageWrap';
import Reveal from '../components/Reveal';
import { profile, skillGroups } from '../data/profile';
import { projects } from '../data/projects';
import profileImg from '../assets/profile.jpeg';

const featured = projects.filter((p) => p.featured);

const heroLine = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};
const heroWord = {
  hidden: { y: '110%' },
  show: { y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
};

const proofItems = [
  { b: 'OroTracker', t: 'live precious-metals platform' },
  { b: 'SkyLink', t: 'call-center operations suite' },
  { b: 'Capregsoft', t: 'company marketing site' },
  { b: 'Jira Automation', t: 'AI-driven ticket pipeline' },
];

export default function Home() {
  return (
    <PageWrap>
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__grid" />
          <div className="hero__glow hero__glow--1" />
          <div className="hero__glow hero__glow--2" />
        </div>

        <div className="wrap hero__inner">
          <div className="hero__left">
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {profile.role}
            </motion.p>

            <motion.h1 className="hero__title" variants={heroLine} initial="hidden" animate="show">
              <span className="hero__line"><motion.span variants={heroWord}>I am</motion.span></span>
              <span className="hero__line"><motion.span variants={heroWord} className="hero__accent">Muhammad</motion.span></span>
              <span className="hero__line"><motion.span variants={heroWord}>Usman.</motion.span></span>
            </motion.h1>

            <motion.p
              className="hero__lede"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7 }}
            >
              <Link to="/work" className="btn btn-primary btn-lg">
                View my work <span className="arr">↗</span>
              </Link>
              <a href={profile.resume} download className="btn btn-ghost btn-lg">
                Download Résumé ↓
              </a>
            </motion.div>

            <motion.ul
              className="hero__stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.95, duration: 0.8 }}
            >
              {profile.stats.map((s) => (
                <li key={s.label}>
                  <span className="hero__stat-v">{s.value}</span>
                  <span className="hero__stat-l">{s.label}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            className="hero__right"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero__photo">
              <img src={profileImg} alt="Portrait of Muhammad Usman" />
              <div className="hero__photo-ring" aria-hidden="true" />
              <div className="hero__badge">
                <span className="hero__badge-dot" />
                {profile.availability}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="hero__scroll" aria-hidden="true">
          <span>Scroll</span>
          <motion.span
            className="hero__scroll-line"
            animate={{ scaleY: [0, 1, 0], originY: [0, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </section>

      {/* ============ PROOF MARQUEE ============ */}
      <div className="marquee" aria-label="Products shipped to production">
        <div className="marquee__track">
          {[...proofItems, ...proofItems].map((p, i) => (
            <span className="marquee__item" key={i}>
              <span className="marquee__star">✦</span>
              <b>{p.b}</b> {p.t}
            </span>
          ))}
        </div>
      </div>

      {/* ============ FEATURED WORK ============ */}
      <section className="section wrap" id="work">
        <Reveal className="section-head">
          <p className="eyebrow">Selected work</p>
          <h2>Things I’ve shipped — and how.</h2>
          <p>Four products taken from problem to production. Each one is a real codebase with real users; tap any of them for the full case study.</p>
        </Reveal>

        <div className="fproj">
          {featured.map((p, i) => (
            <Reveal key={p.slug} className="fproj__row" style={{ '--proj-accent': p.accent }}>
              <div className="fproj__media" style={{ '--proj-accent': p.accent }}>
                <Link to={`/work/${p.slug}`} aria-label={`Open ${p.title} case study`}>
                  <img src={p.cover} alt={`${p.title} screenshot`} loading="lazy" />
                </Link>
              </div>
              <div className="fproj__body" style={{ '--proj-accent': p.accent }}>
                <span className="fproj__num">0{i + 1} — {p.year}</span>
                <h3 className="fproj__title">{p.title}</h3>
                <span className="fproj__kicker">{p.kicker}</span>
                <p className="fproj__blurb">{p.blurb}</p>
                <div className="fproj__tags">
                  {p.tags.map((t) => <span className="chip" key={t}>{t}</span>)}
                </div>
                <Link to={`/work/${p.slug}`} className="fproj__cta">
                  Read case study <span className="arr">→</span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ SKILLS ============ */}
      <section className="section wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Toolkit</p>
          <h2>A stack chosen for shipping.</h2>
          <p>Grouped by what it does, not by how long the list is — the tools I actually reach for to build and deploy real products.</p>
        </Reveal>

        <Reveal>
          <div className="skills">
            {skillGroups.map((g) => (
              <div className="skills__cell" key={g.title}>
                <span className="skills__cat">{g.title}</span>
                <div className="skills__tags">
                  {g.items.map((it) => <span className="chip" key={it}>{it}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </PageWrap>
  );
}