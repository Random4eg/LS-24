import React from "react";
import { Home } from "../../../pages/home/Home";

export const Button = ({ className, variant, label, children, link, ...props }) => {
  const renderClass = () => {
    switch (variant) {
      case "primary":
        return `btn btn--primary ${className || ''}`;
      case "secondary":
        return `btn btn--secondary ${className || ''}`;
      default:
        break;
    }
  };

  return link ? (
    <Link to={<Home/>} className={renderClass()} {...props}>
      {label || children}
    </Link>
  ) : (
    <button className={renderClass()} {...props}>
      {label || children}
    </button>
  );
};
