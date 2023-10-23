import { Outlet, useNavigate } from "react-router-dom";
import styles from "./Layout.module.css";

export function Layout() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <button
        onClick={() => navigate("/video")}
        style={{ position: "absolute", top: "100px" }}
      >
        VIDEO
      </button>
      <Outlet />
    </div>
  );
}
