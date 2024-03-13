import React from "react";
import styles from "./Button.module.css";
import { IoIosArrowDropupCircle } from "react-icons/io";
interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
  
}
const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <>
      <button
        className={[styles.btn, styles["btn-" + color]].join("  ")}
        onClick={onClick}
      >
        {children}
        <IoIosArrowDropupCircle className="mx-2 " size="30" />
      </button>
      <button
        className={[styles.btn, styles["btn-" + color]].join("  ")}
       onClick={()=> console.log("clicked")}>
        my button
      </button>
    </>
  );
};

export default Button;
