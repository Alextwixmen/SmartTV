import styles from "./VideoPage.module.css";
import { Video } from "../../components/Video/Video";
import { Banner } from "../../components/Banner/Banner";
export function VideoPage() {
  return (
    <div className={styles.videoPageWrapper}>
      <Video />
      <Banner />
    </div>
  );
}
