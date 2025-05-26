"use client";

import { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

const CursorFollower: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-[1000] h-10 w-10 rounded-full border-2 border-neutral-900 opacity-60 transition-transform duration-150 "
        style={{
          transform: `translate(${position.x - 24}px, ${position.y - 24}px)`,
        }}
      />

      <div
        className="pointer-events-none fixed z-[1000] h-2.5 w-2.5 rounded-full bg-neutral-900 transition-transform duration-100 "
        style={{
          transform: `translate(${position.x - 5}px, ${position.y - 5}px)`,
        }}
      />
    </>
  );
};

export default CursorFollower;
