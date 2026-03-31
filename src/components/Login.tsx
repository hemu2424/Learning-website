import React, { useState } from "react";

export default function Login() {
  const [showInput, setShowInput] = useState(false);
  const [mobile, setMobile] = useState("");

  const handleSubmit = () => {
    console.log("Submit button click");
    setShowInput(true);
  };
   const isValid = mobile.length === 10; 

  return (
    <div className="flex h-screen">
      
      {/* LEFT SIDE */}
      <div className="w-1/2 flex flex-col justify-center items-center px-10">
        <div className="max-w-md w-full text-center">
          
          <h2 className="text-3xl font-bold mb-4">
            Get started with LetsUpgrade
          </h2>

          <p className="text-gray-600 mb-6">
            Learn. Build. Share. Grow
          </p>

          {/* Button */}
          {!showInput && (
            <button
              onClick={handleSubmit}
              className="w-full bg-black text-white py-3 rounded-full font-semibold"
            >
              Get Started
            </button>
          )}

          {/* Mobile Input */}
          {showInput && (
            <div className="space-y-4">
              <input
                type="tel"
                placeholder="Enter mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full border p-3 rounded-lg outline-none"
              />

              <button
                               disabled={!isValid}
                className={`w-full py-3 rounded-full text-white font-semibold ${
                  isValid ? "bg-black" : "bg-gray-400 cursor-not-allowed"
                }`}
                onClick={() => console.log("Mobile:", mobile)}

              >
                Continue
              </button>
            </div>
          )}

          {/* 👇 This should be INSIDE same div */}
          <p className="text-sm text-gray-500 mt-4">
            By continuing, you agree to our Terms of service & Privacy policy
          </p>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 relative rounded-2xl overflow-hidden">
        <img
          src="/login_img.png"
          alt="banner"
          className="h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-10">
          <h3 className="text-white text-sm mb-2">
            B.Tech Cohort 24 Launch • LetsUpgrade x ITM
          </h3>

          <h1 className="text-yellow-400 text-4xl font-bold leading-tight">
            Program built for Ambitious 🔥 <br />
            future Founders, Tech, Product & <br />
            Business leaders
          </h1>
        </div>
      </div>

    </div>
  );
}