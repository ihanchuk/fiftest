import React from "react";
import { MenuLink } from "./link";

export const TopMenu = () => {
  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <MenuLink url="/" title="Home" />
          <MenuLink url="/teams" title="Teams" />
          <MenuLink url="/games/add" title="New Game" />
        </ul>
      </div>
    </nav>
  );
};
