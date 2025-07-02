import classes from './iphone.module.css'
import Spline from '@splinetool/react-spline';

export default function Iphone() {
  return (
    <Spline className={classes.background} scene="/iphone.spline" />
  );
}