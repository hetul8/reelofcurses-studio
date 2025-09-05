import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold mb-6 tracking-wide text-center">
        Reel of Curses Studio
      </h1>
      <p className="text-xl mb-8 text-center max-w-xl">
        Dark cinematic animation, AI-powered creativity, and elite storytelling.
      </p>
      <div className="flex gap-4">
        <a
          href="#"
          className="px-6 py-3 bg-red-700 hover:bg-red-600 rounded-lg font-semibold transition"
        >
          Explore Projects
        </a>
        <a
          href="#"
          className="px-6 py-3 border border-white hover:bg-white hover:text-black rounded-lg font-semibold transition"
        >
          Contact Us
        </a>
      </div>
      <footer className="mt-16 text-gray-400 text-sm">
        © 2025 Reel of Curses Studio. All rights reserved.
      </footer>
    </div>
  );
}
