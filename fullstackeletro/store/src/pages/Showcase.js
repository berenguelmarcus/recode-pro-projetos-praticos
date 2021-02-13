import AsideBar from "../components/AsideBar";
import Showcase from "../components/Showcase";

import css from "../styles/app.css";

function ShowcasePage() {
  return (
    <div className="container mt-5">
      <AsideBar />
      <Showcase />
    </div>
  );
}

export default ShowcasePage;
