import { events } from "@/app/variables/activities";
export default function Events() {
  return (
    <div className="flex flex-col justify-center mt-3 px-5">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl">Events</h1>
        <p>Check out all upcoming events</p>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-200 to-gray-900 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition transform hover:-translate-y-2 hover:shadow-2xl text-gray-600 hover:shadow-purple-500/20 hover:bg-gradient-to-br from-pink-200 to-purple-200 hover:text-white"
            >
              <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
              <p className="text-gray-600 leading-relaxed hover:text-white">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
