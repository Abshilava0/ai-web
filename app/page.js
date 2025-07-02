"use client";

import dynamic from "next/dynamic";
import SplineBackground from "./components/spline";

import classes from "./page.module.css";

import Link from "next/link";
const Iphone = dynamic(() => import("./components/iphone"), { ssr: false });
import Stepper, { Step } from "./components/stepper";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");

  return (
    <>
      <main className={classes.container}>
        <SplineBackground />
      </main>
      <div className={classes.mainText}>
        <h1>Shaping Future With AI</h1>

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

      <div className={classes.stepperCont}>
        <Stepper
          initialStep={1}
          onStepChange={(step) => {
            console.log(step);
          }}
          onFinalStepCompleted={() => console.log("All steps completed!")}
          backButtonText="Previous"
          nextButtonText="Next"
        >
          <Step>
            <h2>Welcome to the React Bits stepper!</h2>
            <p>Check out the next step!</p>
          </Step>
          <Step>
            <h2>Step 2</h2>
            <img
              style={{
                height: "100px",
                width: "100%",
                objectFit: "cover",
                objectPosition: "center -70px",
                borderRadius: "15px",
                marginTop: "1em",
              }}
              src="/Ai.png"
            />
            <p>Custom step content!</p>
          </Step>
          <Step>
            <h2>How about an input?</h2>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name?"
            />
          </Step>
          <Step>
            <h2>Final Step</h2>
            <p>You made it!</p>
          </Step>
        </Stepper>
        <div className={classes.stepperInfo}>
          <h1>Empowering the Future</h1>
          <p>
            Explore the cutting edge of AI technology — from machine learning
            and robotics to real-time automation and intelligent systems. Unlock
            what is possible with human-inspired intelligence at your
            fingertips.
          </p>
        </div>
      </div>
    </>
  );
}
