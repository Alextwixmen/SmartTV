import styles from "./Video.module.css";
import volvoVideo from "../../assets/video/VolvoVideo.mp4";
import { type Dispatch, type SetStateAction, useEffect, useRef } from "react";

interface IVideoPros {
  setShown: Dispatch<SetStateAction<boolean>>;
}

export function Video({ setShown }: IVideoPros) {
  const ref = useRef<HTMLVideoElement>(null);

  const checkTheTime = (e) => {
    if (Math.floor(e.target.currentTime) === 5) {
      setShown(true);
      e.target.removeEventListener("timeupdate", checkTheTime);
    }
  };

  useEffect(() => {
    ref.current?.addEventListener("timeupdate", checkTheTime);
  }, []);

  return (
    <video ref={ref} autoPlay loop muted className={styles.video}>
      <source src={volvoVideo} type='video/mp4'></source>
    </video>
  );
}
