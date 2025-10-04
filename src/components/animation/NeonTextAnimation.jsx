import { useState, useEffect } from "react";

const NeonCircleAnimation = () => {
  const [activeCircle, setActiveCircle] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCircle((prev) => (prev === 3 ? 0 : prev + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="relative flex justify-center">
        <div>
          {/* Circle 1 */}
          <div
            className={`w-10 h-10 rounded-full transition-all duration-500 my-3 ${
              activeCircle === 0 ? "neon-blue" : "opacity-20"
            }`}
          ></div>
          {/* Circle 2 */}
          <div
            className={`w-10 h-10 rounded-full transition-all duration-500 my-3 ${
              activeCircle === 1 ? "neon-purple" : "opacity-20"
            }`}
          ></div>
        </div>

        <div>
          {/* Circle 3 */}
          <div
            className={`w-10 h-10 rounded-full transition-all duration-500 my-3 ${
              activeCircle === 2 ? "neon-orange" : "opacity-20"
            }`}
          ></div>
          {/* Circle 4 */}
          <div
            className={`w-10 h-10 rounded-full transition-all duration-500 my-3 ${
              activeCircle === 3 ? "neon-pink" : "opacity-20"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default NeonCircleAnimation;
