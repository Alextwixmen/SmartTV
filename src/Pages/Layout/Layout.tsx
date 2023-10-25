import { Outlet, useNavigate } from "react-router-dom";
import styles from "./Layout.module.css";
import { Info } from "../../components/Info/Info";
export function Layout() {
  return (
    <div className={styles.container}>
      <Info />
      <Outlet />
    </div>
  );
}
