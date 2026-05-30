import "./DarkMode.css";
import Sun from "../../assets/Sun.svg?react";
import Moon from "../../assets/Moon.svg?react";

const DarkMode = () => {
  const setDarkTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("THEME", "dark");
  };
  const setLightTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("THEME", "light");
  };

  const selectedTheme = localStorage.getItem("THEME");

  if (selectedTheme === "light") {
    setLightTheme();
  } else {
    setDarkTheme();
  }

  const handleThemeToggle = (e) => {
    if (e.target.checked) {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  };
  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onClick={handleThemeToggle}
        defaultChecked={selectedTheme !== "light"}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
