"use client";
import { useState, useEffect } from "react";

export default function Slider() {
  const [current, setCurrent] = useState(0);

  const nextSlider = () => {
    setCurrent(current === 4 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? 4 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === 4 ? 0 : current + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);
  return (
    <main>
      {current === 0 ? (
        <div>Lorem</div>
      ) : current === 1 ? (
        <div>Ipsum</div>
      ) : current === 2 ? (
        <div>Dolor</div>
      ) : current === 3 ? (
        <div>Sit</div>
      ) : current === 4 ? (
        <div>Amet</div>
      ) : null}

      <div className="flex gap-2">
        <button onClick={prevSlide}>Prev</button>
        <button onClick={nextSlider}>Next</button>
      </div>
    </main>
  );
}
