import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextReveal = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const chars = textRef.current.querySelectorAll(".char");

    gsap.fromTo(
      chars,
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        stagger: 0.8, // 控制每個字元顯示的間隔時間
        ease: "power4.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );
  }, []);

  // 將文字拆分為單個字元並包裝在 span 中
  const text = "APPLE JEEK";
  const splitText = text.split("").map((char, index) => (
    <p key={index} className="char h-[70px] text-[80px]  inline-block ">
      {char}
    </p>
  ));

  return (
    <div className="flex justify-center flex-col items-center">
      <p ref={textRef} className="font-black text-[50px]  text-gray-800">
        {splitText}
      </p>
      {/* <p ref={textRef} className="font-black text-[50px]  text-rose-800">
        {splitText}
      </p> */}
      <h2
        data-aos="fade-up"
        className="text-[60px] uppercase font-normal leading-normal w-1/2"
      >
        Simple controls for easy powering up
      </h2>
      <img
        className="w-[600px] mx-auto"
        src="https://store.bearbrick.audio/cdn/shop/files/edition--smoke-6a615636.png?height=2046&v=1700091447&width=750"
        alt=""
      />
    </div>
  );
};

export default TextReveal;
