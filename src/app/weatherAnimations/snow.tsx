"use client";

import { useEffect, useState } from "react";
import { FaRegSnowflake } from "react-icons/fa6";

type Drop = {
  id: number;
  left: number;
  duration: number;
  opacity: number;
  size: number;
};

type ActiveProps = {
  active: boolean;
};

const Snow = ({ active }: ActiveProps) => {
  const [drop, setDrop] = useState<Drop[]>([]);

  useEffect(() => {
    if (!active) return;

    let id = 0;
    const interval = setInterval(() => {
      setDrop((prev) => [
        ...prev,
        {
          id: id++,
          left: Math.random() * 100,
          duration: Math.random() * 5 + 4,
          opacity: Math.random(),
          size: Math.random() * 5 + 3,
        },
      ]);
    }, 50);
    return () => clearInterval(interval);
  }, [active]);

  useEffect(() => {
    if (!active) return;
    if (!drop.length) return;

    const timeout = setTimeout(() => {
      setDrop((prev) => prev.slice(-400));
    }, 10000);

    return () => clearTimeout(timeout);
  }, [drop, active]);

  if (!active) return null;

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {drop.map((drop) => (
        <FaRegSnowflake
          key={drop.id}
          className="snow_drop text-white"
          style={{
            left: `${drop.left}vw`,
            animationDuration: `${drop.duration}s`,
            opacity: drop.opacity,
            fontSize: `${drop.size}px`,
          }}
        />
      ))}
    </div>
  );
};

export default Snow;
