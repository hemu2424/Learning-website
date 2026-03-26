import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
      Hello world!

      <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
        <h1 className="text-3xl font-bold text-blue-600">
          Tailwind CSS Working 🚀
        </h1>
        <p className="mt-4 text-gray-600">
          If you see styled UI, Tailwind is installed correctly.
        </p>
        <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
          Click Me
        </button>
      </div>
    </div>
    </h1>
    </div>
  )
}

export default Home
