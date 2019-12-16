import React from "react";
import { Link } from "react-router-dom";

export const MenuLink = ({ url, title }) => {
  return (
    <li>
      <Link to={url}>{title}</Link>
    </li>
  );
};
