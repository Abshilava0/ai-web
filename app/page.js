"use client";

import SplineBackground from "./components/spline";

import classes from "./page.module.css";
import TrueFocus from "./components/TrueFocus";
import Link from "next/link";
import Iphone from "./components/iphone";

export default function Home() {


  return (
    <>
      <main className={classes.container}>
        <SplineBackground />
      </main>
      <div className={classes.mainText}>
        <TrueFocus
          sentence={`Shaping Future With AI`}
          manualMode={false}
          blurAmount={5}
          borderColor="black"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />

        <p>
          At the intersection of artificial intelligence and robotics lies a
          transformative future—where machines can learn, adapt, and interact
          with the world in ways that once seemed like science fiction. From
          autonomous drones to intelligent manufacturing systems and just making
          life easier.
        </p>

        <Link href="https://www.linkedin.com/in/davit-abshilava-8b010a371/">
          <button className={classes.btn}>Check Out</button>
        </Link>
      </div>
      <Iphone />
      
    </>
  );
}
