import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-700/20 via-transparent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-gray-200 via-pink-300 to-gray-200 bg-clip-text text-transparent">
          Your All-In-One
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Music Hub
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-4 font-light">
          Connect. Create. Collaborate.
        </p>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Discover a vibrant community of musicians and music lovers. Find your
          next gig, seek talented bandmates, or share your original music.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/auth/signup"
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition text-white"
          >
            Join the Community
          </Link>
          <Link
            href="/features"
            className="text-white border-2 border-purple-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500/10 transition"
          >
            Explore Shows
          </Link>
        </div>
      </div>
    </section>
  );
}
