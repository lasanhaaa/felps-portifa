import { projects } from "@/lib/content";
import { ArrowIcon } from "./ArrowIcon";
import { HorizontalScroll } from "./HorizontalScroll";
import { ProjectImage } from "./ProjectImage";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import styles from "./RecentWork.module.css";

export function RecentWork() {
  return (
    <section className={styles.section} aria-labelledby="recent-work">
      <Reveal className={styles.titleWrap}>
        <SectionTitle id="recent-work" index="01">
          Recent work
        </SectionTitle>
      </Reveal>

      {/* ≥ 1200px: horizontal, scroll-driven gallery */}
      <Reveal className={styles.desktop}>
        <HorizontalScroll>
          {projects.map((project) => (
            <a
              key={project.name}
              className={styles.card}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="view"
            >
              <span className={styles.media}>
                <ProjectImage
                  project={project}
                  variant="desktop"
                  className={styles.image}
                  sizes="(min-width: 1920px) 1200px, 1000px"
                />
              </span>
              <span className={styles.name}>{project.name}</span>
            </a>
          ))}
        </HorizontalScroll>
      </Reveal>

      {/* < 1200px: stacked list */}
      <ul className={styles.list}>
        {projects.map((project) => (
          <li key={project.name} className={styles.item}>
            <a className={styles.itemLink} href={project.href} target="_blank" rel="noopener noreferrer">
              <span className={styles.itemMedia}>
                <ProjectImage project={project} variant="mobile" className={styles.image} sizes="100vw" />
              </span>
              <span className={styles.itemFooter}>
                <span className={styles.itemName}>{project.name}</span>
                <span className={styles.itemCta}>See project</span>
                <ArrowIcon className={styles.itemArrow} />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
