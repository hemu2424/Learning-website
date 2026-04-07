import React from "react";
import { useParams } from "react-router-dom";

export default function CourseDetails() {
  const { category } = useParams<{ category: string }>();

  const coursesData = {
    fullstack: [
      { title: "Starter Pack", duration: "30 Days", price: "₹5,000" },
      { title: "Growth Pack", duration: "45 Days", price: "₹10,000", popular: true },
      { title: "Premium Pack", duration: "60 Days", price: "₹20,000" },
      { title: "Elite Pack", duration: "75 Days", price: "₹25,000" },
    ],
    ai: [
      { title: "Starter Pack", duration: "6–7 Weeks", price: "₹2,500" },
      { title: "Growth Pack", duration: "7–8 Weeks", price: "₹5,000", popular: true },
      { title: "Premium Pack", duration: "10–12 Weeks", price: "₹10,000" },
      { title: "Elite Pack", duration: "6–7 Weeks", price: "₹2,500" },
    ],
  };

  const selectedCourses =
    coursesData[category as keyof typeof coursesData] || [];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-8 text-center capitalize">
        {category} Bootcamp Packages
      </h2>

      {/* GRID (2 cards per row) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {selectedCourses.map((item, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all p-6 flex flex-col justify-between ${
              item.popular ? "border-2 border-blue-500 scale-105" : ""
            }`}
          >
            {/* Popular Badge */}
            {item.popular && (
              <span className="absolute -top-3 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 text-center">
              {item.title}
            </h3>

            {/* Duration */}
            <p className="text-gray-500 text-center mb-3">
              {item.duration}
            </p>

            {/* Price */}
            <p className="text-3xl font-bold text-center mb-5 text-blue-600">
              {item.price}
            </p>

            {/* Features */}
            <ul className="text-sm text-gray-600 mb-6 space-y-2">
              <li>✔ Live Classes</li>
              <li>✔ Projects + Assignments</li>
              <li>✔ Certificate</li>
              <li>✔ Placement Support</li>
            </ul>

            {/* Button */}
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg hover:opacity-90 transition">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}