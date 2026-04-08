
import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";
import mern from "../assets/Explore_Programs/nodejs.jpg"
import ai from "../assets/Explore_Programs/document.jpg"

export default function Programs() {
  const navigate = useNavigate();
  const programs = [
    {
      image: mern,
      title: "MERN Bootcamp",
      sessions: 4,
      progress: 35,
      status: "In Progress",
       tag: "fullstack", 
    },
    {
      image: ai,
      title: "AI Bootcamp",
      sessions: 4,
      progress: 0,
      status: "Not Started",
      tag: "ai", 
    },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center">
        My Programs
      </h2>

      {/* GRID FIXED */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto justify-items-center">
        {programs.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all w-full max-w-[300px]"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full aspect-[4/3] object-cover"
              />

              {/* Badge */}
             <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-md">
  {item.tag === "fullstack" ? "Full Stack" : "Machine Learning"}
</span>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              {/* Sessions + Status */}
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>{item.sessions} sessions</span>
                <span className="text-blue-600 font-medium">
                  {item.status}
                </span>
              </div>

              {/* Progress */}
              <div className="mb-3">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Progress</span>
                  <span>{item.progress}%</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-between items-center mt-3">
                <button className="text-sm text-gray-600 hover:underline">
                  Details
                </button>

              <button
   onClick={() => navigate(`/course/${item.tag}`)}
  className="bg-black text-white px-4 py-1.5 rounded-lg text-sm hover:bg-gray-800"
>
  {item.progress > 0 ? "Continue" : "Start"}
</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}