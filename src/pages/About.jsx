import PageWrap from '../Components/PageWrap';
import Reveal from '../Components/Reveal';
import { Link } from 'react-router-dom';
import { profile, experience, education, skillGroups } from '../data/profile';
import profileImg from '../assets/profile.jpeg';

const principles = [
  { t: 'Ship to production', d: 'Code that lives behind a marketing demo doesn’t count. I optimise for things that actually go live and stay up.' },
  { t: 'Readable by default', d: 'Self-documenting names and clear structure, so the next developer (often future-me) isn’t reverse-engineering intent.' },
  { t: 'Responsive, always', d: 'Mobile isn’t an afterthought. Every interface is validated against real breakpoints before it’s called done.' },
  { t: 'Automate the boring', d: 'If a task repeats, it’s a candidate for automation — that instinct is how the Jira pipeline happened.' },
];

export default function About() {
  return (
    <PageWrap>
      <section className="section wrap">
        <div className="about__top">
          <Reveal className="about__intro">
            <p className="eyebrow">About</p>
            <h1 className="about__title">
              Frontend depth,<br /> full-stack reach.
            </h1>
            <p className="about__lede">
              I’m {profile.name}, a {profile.role.toLowerCase()} based in {profile.location}.
              For nearly a year I’ve worked inside a software house turning briefs into live products —
              mostly on the frontend with React, Next.js, Tailwind and TypeScript, reaching into NestJS,
              FastAPI and automation when a project needs it.
            </p>
            <p className="about__body">
              My foundation is solid CS fundamentals — data structures, OOP in Java, and Python for
              data analysis — but what I enjoy most is the last mile: making an interface feel fast,
              clear and trustworthy, and wiring it to a backend that holds up. Outside the editor I’m a
              committed cricket enthusiast, which is where I picked up the patience and teamwork I bring
              to a codebase.
            </p>
            <div className="about__actions">
              <a href={profile.resume} download className="btn btn-primary">Download Résumé ↓</a>
              <Link to="/contact" className="btn btn-ghost">Get in touch</Link>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="about__photo">
            <img src={profileImg} alt={`Portrait of ${profile.name}`} />
            <div className="about__photo-tag">
              <span>{profile.firstName}</span>
              <span className="about__photo-role">{profile.role}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="section wrap about__principles-sec">
        <Reveal className="section-head">
          <p className="eyebrow">How I work</p>
          <h2>A few things I hold to.</h2>
        </Reveal>
        <div className="about__principles">
          {principles.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.06} className="about__principle">
              <span className="about__principle-n">0{i + 1}</span>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experience + education */}
      <section className="section wrap">
        <div className="about__cols">
          <div>
            <Reveal className="section-head about__col-head">
              <p className="eyebrow">Experience</p>
              <h2>Where I’ve worked</h2>
            </Reveal>
            {experience.map((e) => (
              <Reveal key={e.company} className="about__entry">
                <div className="about__entry-top">
                  <h3>{e.role}</h3>
                  <span className="about__entry-period">{e.period}</span>
                </div>
                <span className="about__entry-org">{e.company}</span>
                <p>{e.summary}</p>
              </Reveal>
            ))}
          </div>

          <div>
            <Reveal className="section-head about__col-head">
              <p className="eyebrow">Education</p>
              <h2>Background</h2>
            </Reveal>
            {education.map((e) => (
              <Reveal key={e.title} className="about__entry">
                <div className="about__entry-top">
                  <h3>{e.title}</h3>
                  <span className="about__entry-period">{e.period}</span>
                </div>
                <span className="about__entry-org">{e.org}</span>
                <p>{e.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Compact skills recap */}
      <section className="section wrap about__skills-sec">
        <Reveal className="section-head">
          <p className="eyebrow">Toolkit</p>
          <h2>What I build with</h2>
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