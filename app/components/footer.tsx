export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🎵</span>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Mugivies
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Your all-in-one music hub for connecting, creating, and
              collaborating.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="#features"
                  className="hover:text-purple-400 transition"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#community"
                  className="hover:text-purple-400 transition"
                >
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Find Gigs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Find Musicians
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Mugivies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
