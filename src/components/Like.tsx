// import React from 'react'
import { useState } from "react";

import { FaHeart, FaRegHeart } from "react-icons/fa";

interface Props {
  onClick: () => void;
}
const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);
  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  if (status) return <FaHeart size="40" color="#ff6b81" onClick={toggle} />;

  return <FaRegHeart size={40} onClick={toggle} />;
};

export default Like;
