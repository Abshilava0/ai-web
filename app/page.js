"use client";

import SplineBackground from "./components/spline";

import classes from "./page.module.css";
import TrueFocus from "./components/TrueFocus";
import Link from "next/link";
import ScrollFloat from "./components/ScrollFloat";

export default function Home() {
  return (
    <>
      <main className={classes.container}>
        <SplineBackground />
        <div className={classes.mainText}>
          <TrueFocus
            sentence={`Shaping Future With AI`}
            manualMode={false}
            blurAmount={5}
            borderColor="black"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />

          <Link href="https://www.linkedin.com/in/davit-abshilava-8b010a371/">
            <button className={classes.btn}>Check Out</button>
          </Link>
        </div>
      </main>
      <div className={classes.test}>
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          reactbits
        </ScrollFloat>
      </div>
      <div>
        <h1>kaifs</h1>
        <h1>kaifs</h1>
        <h1>kaifs</h1>
        <h1>kaifs</h1>
        <h1>kaifs</h1>
        <h1>kaifs</h1>
        <h1>kaifs</h1>
        <h1>kaifs</h1>
        <h1>kaifs</h1>
        <h1>kaifs</h1>
      </div>
    </>
  );
}
