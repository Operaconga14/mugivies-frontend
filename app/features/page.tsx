export default function Features() {
  const features = [
    {
      icon: "🎸",
      title: "Find Your Next Gig",
      desc: "Browse upcoming shows, auditions, and performance opportunities in your area.",
    },
    {
      icon: "🤝",
      title: "Connect with Bandmates",
      desc: "Discover talented musicians looking to collaborate and form the perfect band.",
    },
    {
      icon: "🎤",
      title: "Share Your Music",
      desc: "Upload and showcase your original compositions to a passionate audience.",
    },
    {
      icon: "📅",
      title: "Explore Local Scene",
      desc: "Stay updated on concerts, jam sessions, and music events happening near you.",
    },
    {
      icon: "🎹",
      title: "Network with Artists",
      desc: "Build meaningful connections with like-minded musicians and music lovers.",
    },
    {
      icon: "⭐",
      title: "Grow Your Career",
      desc: "Whether you're a seasoned pro or just starting out, we've got you covered.",
    },
    {
      icon: "🤖",
      title: "AI Composer",
      desc: "Generate original music, lyric, time-sigature, key and progresion using AI technology.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-gray-500 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            What Makes{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-purple-900 font-bolder">
              Mugivies
            </span>{" "}
            Special
          </h2>
          <p className="text-2xl font-semibold">What Mugivies offers you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-200 to-gray-900 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition transform hover:-translate-y-2 hover:shadow-2xl text-gray-600 hover:shadow-purple-500/20 hover:bg-gradient-to-br from-pink-200 to-purple-200 hover:text-white"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed hover:text-white">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
