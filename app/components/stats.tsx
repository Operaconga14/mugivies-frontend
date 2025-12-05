export default function Stats() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-5xl font-bold text-gray-500">
          Website Statistics
        </h2>
        <p className="text-center text-gray-500 mb-10 text-md">
          How far we've grown and large our community is
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: "10K+", label: "Active Musicians" },
            { number: "500+", label: "Monthly Gigs" },
            { number: "1K+", label: "Bands Formed" },
            { number: "50+", label: "Cities Covered" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
