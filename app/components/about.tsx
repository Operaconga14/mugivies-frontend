export default function About({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/60 to-pink-900/60"
    >
      <h2 className="text-center text-5xl font-bold text-gray-100 mb-10">
        About Us
      </h2>
      <p className="text-center text-gray-100 text-md">
        Mugivies: Your All-In-One Music Hub Ever wondered where musicians and
        music lovers truly connect? Mugivies is that place. It’s a vibrant
        community where you can find your next gig, meet talented bandmates, or
        share your original music with people who get it. Explore upcoming
        shows, stay updated on the local music scene, and connect with
        like-minded artists who share your passion. Whether you’re a seasoned
        performer or just starting your musical journey, Mugivies puts
        everything music-related right at your fingertips. Step in, get
        inspired, and let your music story unfold with Mugivies.
      </p>
    </section>
  );
}
