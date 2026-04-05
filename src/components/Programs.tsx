import React from "react";

export default function Programs() {
  const programs = [
    {
      image: "/programs_imgs/digital_marketing.jpg",
      title: "Digital Marketing Bootcamp",
      enrolled: "34k Enrolled",
      date: "26 Mar 26",
    },
    {
      image: "/programs_imgs/prompt_enginring.jpg",
      title: "Prompt Engineering Bootcamp",
      enrolled: "19.7k Enrolled",
      date: "28 Mar 26",
    },
    {
      image: "/programs_imgs/java.png",
      title: "Java Bootcamp",
      enrolled: "19.7k Enrolled",
      date: "30 Mar 26",
    },
    {
      image: "/programs_imgs/git.jpg",
      title: "Git @Github Bootcamp",
      enrolled: "10k Enrolled",
      date: "26 Mar 26",
    },
    {
      image: "/programs_imgs/c++.jpg",
      title: "C++ Bootcamp",
      enrolled: "19.7k Enrolled",
      date: "28 Mar 26",
    },
    {
      image: "/programs_imgs/js.jpg",
      title: "Javascript Bootcamp",
      enrolled: "19.7k Enrolled",
      date: "30 Mar 26",
    },
    {
      image: "/programs_imgs/python.jpg",
      title: "Python Bootcamp",
      enrolled: "34k Enrolled",
      date: "26 Mar 26",
    },
    {
      image: "/programs_imgs/dsa.jpg",
      title: "DSA with C++ Bootcamp",
      enrolled: "19.7k Enrolled",
      date: "28 Mar 26",
    },

  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <h2 className="text-2xl font-semibold mb-4">All Programs</h2>

      {/* Search + Filter */}
      <div className="flex items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search all programs"
          className="flex-1 px-4 py-2 border rounded-full focus:outline-none"
        />
        <button className="px-4 py-2 border rounded-full">
          Filter(s)
        </button>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-3 mb-6">
        <button className="px-4 py-1 rounded-full bg-black text-white">
          All
        </button>
        <button className="px-4 py-1 rounded-full border">Newest</button>
        <button className="px-4 py-1 rounded-full border">A-Z</button>
        <button className="px-4 py-1 rounded-full border">Trending</button>
        <button className="px-4 py-1 rounded-full border">
          Most Popular
        </button>
      </div>

      {/* Program Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {programs.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-4"
          >
            {/* Image Placeholder */}
            <div className="bg-gray-100 h-32 rounded-lg flex items-center justify-center mb-3">
              <img
    src={item.image}
    alt={item.title}
    className="w-full h-full object-cover"
  />
            </div>

            {/* Enrolled */}
            <p className="text-sm text-gray-500 mb-1">
              {item.enrolled}
            </p>

            {/* Title */}
            <h3 className="font-semibold text-lg mb-2">
              {item.title}
            </h3>

            {/* Bottom */}
            <div className="flex justify-between items-center">
              <p className="text-gray-400 text-sm">{item.date}</p>
              <button className="bg-black text-white px-4 py-1 rounded-full text-sm">
                Enroll
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}