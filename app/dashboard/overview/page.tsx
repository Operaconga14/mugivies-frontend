import { upcomingEvents, recentGigs, stats } from "@/app/variables/nav";
export default function Overview() {
  return (
    <div className=" text-white">
      {/* Main Content */}
      <div className="">
        {/* Top Header */}

        {/* Dashboard Content */}
        <main className="p-4 sm:p-6 lg:p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-xl border border-gray-700 rounded-xl p-6 hover:border-purple-500 transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">{stat.label}</span>
                  <div
                    className={`w-2 h-2 rounded-full bg-${stat.color}-500`}
                  ></div>
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.change}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Recent Gig Applications */}
            <div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-xl border border-gray-700 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Recent Gig Applications</h2>
                <button className="text-purple-400 text-sm hover:text-purple-300">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {recentGigs.map((gig, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-purple-500 transition"
                  >
                    <div className="flex-1 mb-3 sm:mb-0">
                      <h3 className="font-semibold mb-1">{gig.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                        <span className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {gig.location}
                        </span>
                        <span className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          {gig.date}
                        </span>
                        <span className="text-green-400 font-semibold">
                          {gig.pay}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        gig.status === "accepted"
                          ? "bg-green-500/20 text-green-400"
                          : gig.status === "pending"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-blue-500/20 text-blue-400"
                      }`}
                    >
                      {gig.status.charAt(0).toUpperCase() + gig.status.slice(1)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-6">Upcoming Events</h2>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-purple-500 transition"
                  >
                    <h3 className="font-semibold mb-2">{event.name}</h3>
                    <div className="space-y-1 text-sm text-gray-400">
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {event.date} at {event.time}
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                        </svg>
                        {event.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-2 border border-purple-500 rounded-lg text-purple-400 hover:bg-purple-500/10 transition">
                View All Events
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-xl hover:from-purple-600 hover:to-pink-600 transition text-left">
              <div className="text-3xl mb-2">🎤</div>
              <div className="font-semibold">Find New Gigs</div>
              <div className="text-sm text-purple-100 mt-1">
                Browse opportunities
              </div>
            </button>
            <button className="bg-gray-800/50 border border-gray-700 p-6 rounded-xl hover:border-purple-500 transition text-left">
              <div className="text-3xl mb-2">🤝</div>
              <div className="font-semibold">Connect</div>
              <div className="text-sm text-gray-400 mt-1">Find musicians</div>
            </button>
            <button className="bg-gray-800/50 border border-gray-700 p-6 rounded-xl hover:border-purple-500 transition text-left">
              <div className="text-3xl mb-2">🎵</div>
              <div className="font-semibold">Upload Music</div>
              <div className="text-sm text-gray-400 mt-1">
                Share your tracks
              </div>
            </button>
            <button className="bg-gray-800/50 border border-gray-700 p-6 rounded-xl hover:border-purple-500 transition text-left">
              <div className="text-3xl mb-2">👤</div>
              <div className="font-semibold">Edit Profile</div>
              <div className="text-sm text-gray-400 mt-1">Update your info</div>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
