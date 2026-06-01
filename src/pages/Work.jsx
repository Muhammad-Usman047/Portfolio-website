import { Link } from 'react-router-dom';
import PageWrap from '../Components/PageWrap';
import Reveal from '../Components/Reveal';
import { projects, moreProjects } from '../Data/projects';

export default function Work() {
  return (
    <PageWrap>
      <section className="section wrap">
        <Reveal className="work__head">
          <p className="eyebrow">Case studies</p>
          <h1 className="work__title">Selected work</h1>
          <p className="work__intro">
            A closer look at the products I’ve built — the problem each one solved, what I owned,
            and what shipped. Click through for the full story.
          </p>
        </Reveal>

        <div className="work__list">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link
                to={`/work/${p.slug}`}
                className="work__card"
                style={{ '--proj-accent': p.accent }}
              >
                <div className="work__card-media">
                  <img src={p.cover} alt={`${p.title} preview`} loading="lazy" />
                  <span className="work__card-open">View case study →</span>
                </div>
                <div className="work__card-body">
                  <div className="work__card-top">
                    <span className="work__card-num">0{i + 1}</span>
                    <span className="work__card-year">{p.year}</span>
                  </div>
                  <h2 className="work__card-name">{p.title}</h2>
                  <p className="work__card-kicker">{p.kicker}</p>
                  <p className="work__card-blurb">{p.blurb}</p>
                  <div className="work__card-tags">
                    {p.tags.map((t) => <span className="chip" key={t}>{t}</span>)}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section wrap work__more-sec">
        <Reveal className="section-head">
          <p className="eyebrow">Also in the lab</p>
          <h2>More projects</h2>
          <p>Academic, personal and in-progress builds that sharpened the fundamentals.</p>
        </Reveal>

        <div className="more">
          {moreProjects.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.06}>
              <a className="more__card" href={m.url} target="_blank" rel="noreferrer">
                <span className="more__type">{m.type}</span>
                <h3 className="more__title">{m.title}</h3>
                <p className="more__desc">{m.description}</p>
                <div className="more__tech">
                  {m.tech.map((t) => <span className="chip" key={t}>{t}</span>)}
                </div>
                <span className="more__link">View on GitHub <span className="arr">↗</span></span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </PageWrap>
  );
}