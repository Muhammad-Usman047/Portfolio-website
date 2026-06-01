import PageWrap from '../Components/PageWrap';
import Reveal from '../Components/Reveal';
import { profile } from '../Data/profile';

export default function Contact() {
  return (
    <PageWrap>
      <section className="section wrap">
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>

          <Reveal>
            <p className="eyebrow">Contact</p>
            <h1 className="contact__title">Let's talk.</h1>
            <p className="contact__lede">
              Hiring, freelance, or just want to compare notes on a build? I read every message and
              reply quickly. {profile.availability}.
            </p>

            <div className="contact__channels">
              <a className="contact__channel" href={`mailto:${profile.email}`}>
                <span className="contact__channel-l">Email</span>
                <span className="contact__channel-v">{profile.email}</span>
              </a>
              <a className="contact__channel" href={`tel:${profile.phoneRaw}`}>
                <span className="contact__channel-l">Phone</span>
                <span className="contact__channel-v">{profile.phone}</span>
              </a>
              <div className="contact__channel contact__channel--static">
                <span className="contact__channel-l">Based in</span>
                <span className="contact__channel-v">{profile.location}</span>
              </div>
            </div>

            <div className="contact__socials">
              <a className="btn btn-ghost" href={profile.socials.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a className="btn btn-ghost" href={profile.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a className="btn btn-ghost" href={profile.resume} download>Résumé ↓</a>
            </div>
          </Reveal>

        </div>
      </section>
    </PageWrap>
  );
}