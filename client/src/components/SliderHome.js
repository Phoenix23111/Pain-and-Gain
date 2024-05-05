import { useState, useEffect, useCallback } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const SliderHome = ({ slides }) => {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = useCallback(() => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  }, [current, slides.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [nextSlide]);
  return (
    <div className="overflow-hidden relative h-screen rounded-b-2xl">
      <div
        className="flex transition-transform duration-500 fade-in"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, index) => (
          <img key={index} src={s} alt="" className="w-full" />
        ))}
      </div>

      <div className="absolute top-0 h-full w-full flex items-center justify-between text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => (
          <div
            onClick={() => setCurrent(i)}
            key={"circle" + i}
            className={`rounded-full w-3 h-3 cursor-pointer ${
              i === current ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SliderHome;
