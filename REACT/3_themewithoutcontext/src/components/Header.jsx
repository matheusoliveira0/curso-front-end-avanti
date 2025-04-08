import React from "react";

const Header = ({ theme, toggleTheme }) => {
  return (
    <header>
      <h1>App Theme: {theme} </h1>
      <button onClick={toggleTheme}>toggle theme</button>
    </header>
  );
};

export default Header;
