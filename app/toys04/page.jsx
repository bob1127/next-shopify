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
      <section className="section-hero-img px-[15px]">
        <div className="play-card overflow-hidden items-center  relative  mt-[160px] p-[100px] bg-[#ec6759] flex justify-center flex-col  rounded-2xl">
          <div className="left-hold absolute z-[999] left-0 top-0">
            <img
              className="w-[400px]"
              src="/images/switch-hold-left.png"
              alt=""
            />
          </div>
          <div className="right-hold absolute z-[999] right-0 top-0">
            <img
              className="w-[400px]"
              src="/images/switch-hold-right.png"
              alt=""
            />
          </div>
          <h1 className="text-white text-[60px] font-bold">Enjoy the Home</h1>
          <h1 className="text-white text-[60px] font-bold">Console Gamming</h1>
          <h1 className="text-white text-[60px] font-bold">Experience</h1>
          <a
            className="bg-pink-400 mt-[50px] border border-white rounded-[10px] inline-block text-center px-4 py-1 text-white text-[18px] font-bold"
            href=""
          >
            {" "}
            Buy Now
          </a>
        </div>
      </section>
      <Description />
      <Projects />
      <SlidingImages />
      <Contact />
    </main>
  );
}
