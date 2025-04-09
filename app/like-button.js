'use client';

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
    alert(`You liked this page ${likes + 1} times`);
  }

  return <button onClick={handleClick}>Like ({likes})</button>;
}
