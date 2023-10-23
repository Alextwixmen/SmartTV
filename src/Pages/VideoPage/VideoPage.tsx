import styles from "./VideoPage.module.css";
import { Video } from "../../components/Video/Video";
import { Banner } from "../../components/Banner/Banner";
import { useState } from "react";

export function VideoPage() {
  const [isBannerShown, setShown] = useState<boolean>(false);
  return (
    <div className={styles.videoPageWrapper}>
      <Video setShown={setShown} />
      <Banner isBannerShown={isBannerShown} />
    </div>
  );
}
