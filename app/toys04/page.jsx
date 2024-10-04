"use client";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "../../components/toys05/Preloader";
import Landing from "../../components/toys05/Landing";
import Projects from "../../components/toys05/Projects";
import Description from "../../components/toys05/Description";
// import Magnetic from "../../../common/Magnetic";
// import Rounded from "../../../common/RoundedButton";
import SlidingImages from "../../components/toys05/SlidingImages";
import Contact from "../../components/toys05/Contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main className={styles.main}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <Projects />
      <SlidingImages />
      <Contact />
    </main>
  );
}
