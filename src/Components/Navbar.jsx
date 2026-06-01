import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'motion/react';
import { themeChange } from '../redux/Themes/themeSlice';
import { profile } from '../data/profile';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const theme = useSelector((s) => s.theme.value);
  const dispatch = useDispatch();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner wrap">
        <Link to="/" className="nav__brand" aria-label="Muhammad Usman — home">
          <span className="nav__mark">MU</span>
          <span className="nav__name">
            Muhammad Usman<span className="nav__dot">.</span>
          </span>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            className="nav__theme"
            onClick={() => dispatch(themeChange())}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            title="Toggle theme"
          >
            <span className="nav__theme-track">
              <motion.span
                className="nav__theme-thumb"
                animate={{ x: theme === 'light' ? 0 : 22 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              >
                {theme === 'light' ? '☀' : '☾'}
              </motion.span>
            </span>
          </button>

          <Link to="/contact" className="btn btn-primary nav__cta">
            Let’s talk <span className="arr">↗</span>
          </Link>

          <button
            className={`nav__burger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="nav__mobile"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {LINKS.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i + 0.05 }}
              >
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) => `nav__mobile-link ${isActive ? 'is-active' : ''}`}
                >
                  <span className="nav__mobile-idx">0{i + 1}</span>
                  {l.label}
                </NavLink>
              </motion.div>
            ))}
            <a className="btn btn-primary btn-lg nav__mobile-cta" href={profile.resume} download>
              Download Résumé ↓
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}