function AboutUs() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 text-center">
       <h1 className="text-4xl font-bold text-pink-500 mb-4">
        Welcome to eCom World 🚀
      </h1>
       <p className="text-gray-600 mb-8 leading-relaxed">
        Our eCom is a fictional online store built as a practice project for
        learning modern web development.
      </p>

      <div className="space-y-4 text-left">
        <div className="bg-gradient-to-r from-pink-400 to-yellow-300 p-4 rounded-lg text-white shadow-md">
          Product Sorting
        </div>
        <div className="bg-gradient-to-r from-red-400 to-pink-500 p-4 rounded-lg text-white shadow-md">
          Wishlist Feature
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-4 rounded-lg text-white shadow-md">
          User Authentication
        </div>
        <div className="bg-gradient-to-r from-green-400 to-teal-400 p-4 rounded-lg text-white shadow-md">
          Fully Responsive Design
        </div>
      </div>
      <p className="mt-10 text-sm text-gray-400">
        Crafted with using React, TypeScript, Redux Toolkit, and Tailwind CSS.
      </p>
    </div>
  );
}

export default AboutUs;
