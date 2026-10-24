import styles from "./SectionTitle.module.css";

type Props = { index?: string; children: string; className?: string; id?: string };

export function SectionTitle({ index, children, className, id }: Props) {
  return (
    <h2 id={id} className={`${styles.title} ${className ?? ""}`}>
      {index && <span className={styles.index}>{index}</span>}
      <span>{children}</span>
    </h2>
  );
}
