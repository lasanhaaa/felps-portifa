import Image from "next/image";
import { services, site, socials } from "@/lib/content";
import { ArrowIcon } from "./ArrowIcon";
import { LocalTime } from "./LocalTime";
import { LottieIcon } from "./LottieIcon";
import { NowPlaying } from "./NowPlaying";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.wrapper} aria-label="Intro">
      <div className={styles.hero}>
        <div className={styles.text}>
          <h1 className={`${styles.headline} ${styles.enterLeft}`}>
            Hi, I&apos;m <span className={styles.serif}>Felps</span>,<br />
            a Web
            <LottieIcon src="/lottie/dawn.lottie" className={`${styles.icon} ${styles.iconDawn}`} /> &amp; Branding
            <br className={styles.desktopBreak} /> designer.
            <LottieIcon src="/lottie/explosion.lottie" className={`${styles.icon} ${styles.iconExplosion}`} />
          </h1>

          <div className={`${styles.meta} ${styles.enterUp}`}>
            <div className={styles.details}>
              <div className={styles.group}>
                <span className={styles.label}>Social:</span>
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
              </div>

              <div className={`${styles.group} ${styles.location}`}>
                <span className={`${styles.label} ${styles.labelLoose}`}>Location:</span>
                <div className={styles.stack}>
                  <span className={styles.value}>{site.location}</span>
                  <LocalTime timeZone={site.timeZone} className={styles.clock} />
                </div>
              </div>
            </div>

            <ul className={styles.services} aria-label="Services">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`${styles.portrait} ${styles.enterRight}`}>
          <Image
            src="/images/portrait.jpg"
            alt="Portrait of Felipe Terra"
            fill
            priority
            sizes="(min-width: 1920px) 533px, (min-width: 1200px) 36vw, 100vw"
            className={styles.photo}
          />
          <NowPlaying className={styles.nowPlaying} />
        </div>
      </div>
    </section>
  );
}
