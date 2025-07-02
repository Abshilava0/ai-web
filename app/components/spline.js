
import Spline from "@splinetool/react-spline";
import classes from "./spline.module.css";

export default function SplineBackground() {
  return <Spline className={classes.background} scene="/hero-scene.splinecode" />;
}
