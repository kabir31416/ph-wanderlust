
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6">

      {/* 404 */}
      <h1 className="text-7xl md:text-9xl font-extrabold tracking-widest text-white/90">
        404
      </h1>

      {/* Glow line */}
      <div className="w-24 h-1 bg-white rounded my-6 opacity-70"></div>

      {/* Message */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-center">
        Oops! Page not found
      </h2>

      <p className="text-gray-400 text-center max-w-md mb-6">
        The page you’re looking for doesn’t exist or has been moved.
        Let’s get you back to exploring Wonderlust.
      </p>

      {/* Button */}
      <Link href="/">
        <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-gray-200 transition duration-300">
          ⬅ Back to Home
        </button>
      </Link>

      {/* Extra small hint */}
      <p className="text-xs text-gray-500 mt-6">
        Error code: 404 | Wonderlust
      </p>
    </div>
  );
};

export default NotFound;