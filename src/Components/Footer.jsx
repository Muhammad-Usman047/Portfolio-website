import { Link } from 'react-router-dom';
import { profile } from '../Data/profile';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__cta">
          <p className="eyebrow">Available for work</p>
          <h2 className="footer__big">
            Let’s build something<br /> worth shipping.
          </h2>
          <div className="footer__cta-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Start a conversation <span className="arr">↗</span>
            </Link>
            <a href={`mailto:${profile.email}`} className="btn btn-ghost btn-lg">
              {profile.email}
            </a>
          </div>
        </div>

        <div className="footer__grid">
          <div className="footer__brand">
            <span className="footer__mark">MU</span>
            <p>{profile.name}</p>
            <span className="footer__loc">{profile.location}</span>
          </div>

          <div className="footer__col">
            <span className="footer__label">Navigate</span>
            <Link className="ulink" to="/">Home</Link>
            <Link className="ulink" to="/work">Work</Link>
            <Link className="ulink" to="/about">About</Link>
            <Link className="ulink" to="/contact">Contact</Link>
          </div>

          <div className="footer__col">
            <span className="footer__label">Elsewhere</span>
            <a className="ulink" href={profile.socials.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="ulink" href={profile.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="ulink" href={profile.socials.twitter} target="_blank" rel="noreferrer">Twitter / X</a>
            <a className="ulink" href={profile.resume} download>Résumé (PDF)</a>
          </div>

          <div className="footer__col">
            <span className="footer__label">Direct</span>
            <a className="ulink" href={`mailto:${profile.email}`}>{profile.email}</a>
            <a className="ulink" href={`tel:${profile.phoneRaw}`}>{profile.phone}</a>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} {profile.name}. Built with React, Vite & Motion.</span>
          <span className="footer__bottom-r">Designed & developed end-to-end.</span>
        </div>
      </div>
    </footer>
  );
}