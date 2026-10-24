import { CursorBadge } from "@/components/CursorBadge";
import { Divider } from "@/components/Divider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { RecentWork } from "@/components/RecentWork";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div id="top" className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Divider />
        <RecentWork />
        <Marquee />
      </main>
      <Footer />
      <CursorBadge />
    </div>
  );
}
