import Link from "next/link";

export default function CTA({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/50 to-pink-900/50"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-200">
          Ready to Amplify Your Music Journey?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Join Mugivies today and become part of a community that lives and
          breathes music.
        </p>
        <Link
          href="/auth/signup"
          className="text-gray-200 bg-gradient-to-r from-purple-500 to-pink-500 px-12 py-5 rounded-full text-xl font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition shadow-2xl shadow-purple-500/50"
        >
          Get Started Now
        </Link>
      </div>
    </section>
  );
}
