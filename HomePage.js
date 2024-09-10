import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      {/* Navbar */}
      <nav className="w-full bg-gray-800 text-white flex justify-between items-center px-6 py-4">
        <div className="text-lg font-bold">
          freeCodeCamp<span className="text-yellow-500">( )</span>
        </div>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search 8,000+ tutorials"
            className="px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white"
          />
          <button className="bg-yellow-500 text-black px-4 py-2 rounded">
            Menu
          </button>
          <Link
            to="/signin"
            className="bg-yellow-500 text-black px-4 py-2 rounded"
          >
            Sign in
          </Link>
        </div>
      </nav>

      {/* Main Section */}
      <div className="flex flex-col items-center justify-center flex-grow py-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Learn to code — for free.</h1>
        <h2 className="text-2xl font-semibold mb-6">Build projects.</h2>
        <h2 className="text-2xl font-semibold mb-6">Earn certifications.</h2>
        <p className="text-lg text-gray-700 mb-8">
          Since 2014, more than 40,000 FreeCodeCamp.org graduates have gotten
          jobs at tech companies including:
        </p>

        {/* Company Logos */}
        <div className="flex space-x-6 mb-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="Apple"
            className="w-12"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google"
            className="w-12"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
            alt="Microsoft"
            className="w-12"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
            alt="Spotify"
            className="w-12"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon"
            className="w-12"
          />
        </div>

        {/* Get Started Button */}
        <Link
          to="/get-started"
          className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold"
        >
          Get started (it's free)
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
