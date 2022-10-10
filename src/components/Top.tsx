import React from "react";
import { useState, useEffect } from "react";

const Top: React.FC = () => {
  const [toggle, toggleSet] = useState({ theme: "default" });
  useEffect(() => {
    // Setting the settings for the theme usage using
    // localStorage
    const toggleSwitch = () => {
      const currentTheme = window.localStorage.getItem("switch");
      if (!currentTheme) {
        window.localStorage.setItem(
          "theme",
          JSON.stringify({ theme: "default" })
        );
      }
    };
    toggleSwitch();
  });
  return (
    <div className="top">
      <span className="top_name">calc</span>
      <div className="toggle">
        <div className="toggle_numbers">
          <span
            onClick={() => {
              toggleSet({ theme: "default" });
            }}
          >
            1
          </span>
          <span
            onClick={() => {
              toggleSet({ theme: "light" });
            }}
          >
            2
          </span>
          <span
            onClick={() => {
              toggleSet({ theme: "dark" });
            }}
          >
            3
          </span>
        </div>
        <div className="toggle_switch">
          {toggle.theme === "default" && <span className="switch_one"></span>}
          {toggle.theme === "light" && <span className="switch_two"></span>}
          {toggle.theme === "dark" && <span className="switch_three"></span>}
        </div>
      </div>
    </div>
  );
};
export default Top;
