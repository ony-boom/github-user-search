import "./styles/banner.scss";
import { useEffect, useState } from "react";

const Banner = () => {
  let root = document.documentElement;
  const [isDark, setTheme] = useState(true);

  const switchTheme = () => {
    setTheme(!isDark);
  };

  useEffect(() => {
    if (!isDark) {
      root.style.setProperty("--default-color", "#0f1220");
      root.style.setProperty("--bg-color", "#f9f9f9");
      root.style.setProperty("--box-color", "#fff");
      document.querySelector("#theme-switcher span").textContent = "Dark";
      document
        .querySelector("#theme-switcher .icon")
        .classList.replace("la-sun", "la-moon");
    } else {
      root.style.setProperty("--default-color", "#fff");
      root.style.setProperty("--bg-color", "#141C2F");
      root.style.setProperty("--box-color", "#1F2A48");
      document.querySelector("#theme-switcher span").textContent = "Light";
      document
        .querySelector("#theme-switcher .icon")
        .classList.replace("la-moon", "la-sun");
    }
  }, [isDark]);

  return (
    <div className="banner">
      <div className="row">
        <h1 className="heading-primary">devfinder</h1>

        <div
          className="theme-switcher-box"
          id="theme-switcher"
          onClick={switchTheme}
        >
          <span>Light</span>
          <i className="las la-sun icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Banner;
