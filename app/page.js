"use client";

import SplineBackground from "./components/spline";
import { useState } from "react";
import classes from "./page.module.css";
import TrueFocus from "./components/TrueFocus";
import Link from "next/link";
import Iphone from "./components/iphone";
import Stepper, { Step } from "./components/stepper";

export default function Home() {
  const [name, setName] = useState("");

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
              alt="image"
              src="Ai.png"
              style={{
                height: "100px",
                width: "100%",
                objectFit: "cover",
                objectPosition: "center -70px",
                borderRadius: "15px",
                marginTop: "1em",
              }}
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
          <h1>Smarter Solutions with AI</h1>
          <p>
            
            Harness the power of artificial intelligence to automate workflows,
            enhance decision-making, and unlock new possibilities for your
            business. Whether building smarter products or streamlining
            operations, AI helps you solve complex problems faster and more
            efficiently than ever before.
          </p>
        </div>
      </div>
    </>
  );
}
