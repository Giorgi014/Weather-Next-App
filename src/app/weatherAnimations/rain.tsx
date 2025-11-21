"use client";

import { useEffect, useState } from "react";
import { GiDrop } from "react-icons/gi";

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

const Rain = ({ active }: ActiveProps) => {
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
          duration: Math.random() * 1 + 1,
          opacity: Math.random(),
          size: Math.random() * 5 + 3,
        },
      ]);
    }, 10);
    return () => clearInterval(interval);
  }, [active]);

  useEffect(() => {
    if (!active) return;
    if (!drop.length) return;

    const timeout = setTimeout(() => {
      setDrop((prev) => prev.slice(-400));
    }, 5000);

    return () => clearTimeout(timeout);
  }, [drop, active]);

  if (!active) return null;

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {drop.map((drop) => (
        <GiDrop
          key={drop.id}
          className="rain_drop text-white/70"
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

export default Rain;
