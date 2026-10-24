import { about, site, socials } from "@/lib/content";
import { ArrowIcon } from "./ArrowIcon";
import { FooterIcons } from "./FooterIcons";
import { LocalTime } from "./LocalTime";
import { Reveal } from "./Reveal";
import { Wordmark } from "./Wordmark";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.about} aria-labelledby="about-me">
        <h2 id="about-me" className={styles.aboutLabel}>
          <span className={styles.aboutIndex}>02</span>
          <span>About me</span>
        </h2>
        <p className={styles.aboutText}>{about}</p>
      </section>

      <section id="contact" className={styles.contact} aria-labelledby="reach-out">
        <h2 id="reach-out" className={styles.reachOut}>
          Reach
          <br />
          out
        </h2>

        <div className={styles.main}>
          <FooterIcons className={styles.icons} />

          <div className={styles.details}>
            <div className={styles.status}>
              <span>Currently available</span>
              <span className={styles.remote}>
                Working remotely from brazil
                <LocalTime timeZone={site.timeZone} className={styles.time} />
              </span>
            </div>

            <div className={styles.cta}>
              <p className={styles.pitch}>
                For any collaborative projects or <br className={styles.pitchBreak} />
                inquiries feel free to reach out to me.
              </p>
              <a className={styles.email} href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>
          </div>
        </div>

        <ul className={styles.socials}>
          {socials.map((social) => (
            <li key={social.label}>
              <a className={styles.social} href={social.href} target="_blank" rel="noopener noreferrer">
                {social.label}
                <ArrowIcon className={styles.socialArrow} />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <div className={styles.rule} aria-hidden="true" />

      <div className={styles.bottom}>
        <span>{site.copyright}</span>
        <span className={styles.madeIn}>{site.madeIn}</span>
      </div>

      <Reveal className={styles.wordmarkWrap} from="translateY(70px) scale(0.9)">
        <Wordmark className={styles.wordmark} />
      </Reveal>
    </footer>
  );
}
