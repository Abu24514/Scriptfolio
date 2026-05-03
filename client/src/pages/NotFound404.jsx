import { useEffect, useState } from 'react';

const generateStars = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    top: `${Math.random() * 50}%`,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 3 + 4,
    delay: Math.random() * 4,
    direction: Math.random() > 0.5 ? "topLeft" : "topRight",
  }));
};

const NotFound404 = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setStars(generateStars(30));
    const interval = setInterval(() => {
      setStars((prev) => [...prev.slice(-20), ...generateStars(10)]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black text-white flex items-center justify-center overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes tilt {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        .animate-tilt {
          animation: tilt 6s ease-in-out infinite;
        }
        @keyframes fallTopLeft {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(-100px, 100vh); opacity: 0; }
        }
        @keyframes fallTopRight {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translate(100px, 100vh); opacity: 0; }
        }
        .animate-fall-topLeft {
          animation: fallTopLeft 5s linear infinite;
        }
        .animate-fall-topRight {
          animation: fallTopRight 5s linear infinite;
        }
        .bg-space {
          background: url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9770934.jpg-Wl31ERQfbntJABIblVId5PIBjqP5Gx.jpeg") no-repeat center center/cover;
        }
        .ufo {
          position: absolute;
          top: 33%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>

      {/* Background Image */}
      <div className="absolute inset-0 bg-space"></div>

      {/* Falling Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className={`absolute ${
              star.direction === "topLeft" 
                ? "animate-fall-topLeft" 
                : "animate-fall-topRight"
            }`}
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
            }}
          >
            <div className="h-full w-full rounded-full bg-white opacity-80" />
          </div>
        ))}
      </div>

      {/* UFO */}
      <div className="ufo animate-float animate-tilt">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9770934.jpg-Wl31ERQfbntJABIblVId5PIBjqP5Gx.jpeg"
          alt="UFO"
          className="w-64 h-auto md:w-80"
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center z-10">
        <h1 className="mb-2 text-6xl md:text-7xl font-bold text-white drop-shadow-lg">
          404
        </h1>
        <p className="mb-8 text-lg md:text-xl text-gray-300 drop-shadow-md">
          Oops! Looks like this page got lost in space
        </p>
      </div>
    </div>
  );
};

export default NotFound404;