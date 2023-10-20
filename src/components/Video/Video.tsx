import styles from "./Video.module.css";
import volvoVideo from "../../assets/video/VolvoVideo.mp4";
import { useEffect, useRef } from "react";
export function Video() {
  const ref = useRef(null);
  return (
    <video ref={ref} autoPlay loop muted className={styles.video}>
      <source src={volvoVideo} type='video/mp4'></source>
    </video>
  );
}
