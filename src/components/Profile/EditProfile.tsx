import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BadgeCheck, 
  Camera,
  Lock,
 
  Bold,
  Italic,
  Underline,
  Type,
  List,
  Link as LinkIcon,
  Plus
} from 'lucide-react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const EditProfile = () => {
  const navigate = useNavigate();

  // Optional: Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your save logic/API calls here
    console.log("Profile saved!");
    navigate('/profile'); 
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-8">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative cursor-pointer group">
            <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
               {/* Replace with actual image if available */}
               <div className="w-10 h-10 bg-purple-900 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                  <Camera size={20} className="text-white" />
               </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-xl font-bold text-gray-900">Himanshu Poriya</h1>
              <BadgeCheck className="w-5 h-5 text-white fill-green-500" />
            </div>
            <p className="text-sm text-gray-500">@hporiya07898</p>
          </div>
          <div className="ml-auto cursor-pointer p-2 hover:bg-gray-50 rounded-full transition-colors">
              <Camera size={24} className="text-gray-400" />
          </div>
        </div>

        <h2 className="text-lg font-bold text-gray-800 mb-4">Personal Details</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input type="text" defaultValue="Himanshu" className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-gray-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input type="text" defaultValue="Poriya" className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-gray-500" />
            </div>
          </div>

          {/* Username & Gender */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input type="text" defaultValue="hporiya07898" className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-gray-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
              <select defaultValue="Male" className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-gray-500 bg-white">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* About your role (Rich Text Editor Mock) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">About your role</label>
            <div className="border border-gray-300 rounded-lg overflow-hidden focus-within:border-gray-500 transition-colors">
              <div className="flex flex-wrap items-center gap-2 p-2 border-b border-gray-200 bg-gray-50 text-gray-500">
                <button type="button" className="p-1 hover:bg-gray-200 rounded"><Type size={16} /></button>
                <div className="w-px h-4 bg-gray-300"></div>
                <button type="button" className="p-1 hover:bg-gray-200 rounded"><Bold size={16} /></button>
                <button type="button" className="p-1 hover:bg-gray-200 rounded"><Italic size={16} /></button>
                <div className="w-px h-4 bg-gray-300"></div>
                <button type="button" className="p-1 hover:bg-gray-200 rounded"><Underline size={16} /></button>
                <div className="w-px h-4 bg-gray-300"></div>
                <button type="button" className="p-1 hover:bg-gray-200 rounded"><List size={16} /></button>
                <div className="w-px h-4 bg-gray-300"></div>
                <button type="button" className="p-1 hover:bg-gray-200 rounded"><LinkIcon size={16} /></button>
                <button type="button" className="p-1 hover:bg-gray-200 rounded"><Plus size={16} /></button>
              </div>
              <textarea 
                rows={4} 
                placeholder="Write a few sentences about yourself."
                className="w-full p-3 outline-none resize-none"
              ></textarea>
            </div>
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Date</label>
                <select defaultValue="1" className="w-full border border-gray-300 rounded-lg p-2.5 outline-none bg-white focus:border-gray-500">
                  <option value="1">1</option>
                  {/* Add more dates 1-31 */}
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Month</label>
                <select defaultValue="January" className="w-full border border-gray-300 rounded-lg p-2.5 outline-none bg-white focus:border-gray-500">
                  <option value="January">January</option>
                  {/* Add all months */}
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Year</label>
                <select defaultValue="1970" className="w-full border border-gray-300 rounded-lg p-2.5 outline-none bg-white focus:border-gray-500">
                  <option value="1970">1970</option>
                  {/* Add range of years */}
                </select>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2 flex items-center gap-1">When can we wish you 🎂?</p>
          </div>

          {/* Email & Phone */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex justify-between">
                Email <Lock size={14} className="text-gray-400" />
              </label>
              <input type="email" readOnly defaultValue="hporiya06@gmail.com" className="w-full border border-gray-200 bg-gray-50 text-gray-500 rounded-lg p-2.5 outline-none cursor-not-allowed" title="Email cannot be changed" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex justify-between">
                Phone <Lock size={14} className="text-gray-400" />
              </label>
              <div className="flex border border-gray-300 rounded-lg overflow-hidden focus-within:border-gray-500 transition-colors bg-gray-50">
                <select className="bg-transparent px-3 border-r border-gray-300 outline-none text-gray-600">
                  <option>+91</option>
                </select>
                <input type="text" readOnly defaultValue="9426719070" className="w-full p-2.5 outline-none bg-transparent text-gray-500 cursor-not-allowed" />
              </div>
            </div>
          </div>

          {/* Add Skills */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Add skills</label>
            <p className="text-xs text-gray-500 mb-2">Note: These skills will be added in with and in-addition to the skills acquired in work and in certifications</p>
            <input type="text" placeholder="ReactJS, Team Building, etc. (upto 10)" className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-gray-500" />
          </div>

          {/* Your Socials */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Your Socials</label>
            <div className="space-y-3">
              <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:border-gray-500 transition-colors">
                <FaLinkedinIn size={18} className="text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-gray-500 text-sm whitespace-nowrap">linkedin.com/in/</span>
                <input type="text" placeholder="johndoe" className="w-full py-2.5 outline-none min-w-0" />
              </div>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:border-gray-500 transition-colors">
                <FaGithub size={18} className="text-gray-800 mr-2 flex-shrink-0" />
                <span className="text-gray-500 text-sm whitespace-nowrap">github.com/</span>
                <input type="text" placeholder="johndoe" className="w-full py-2.5 outline-none min-w-0" />
              </div>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:border-gray-500 transition-colors">
                <FaTwitter size={18} className="text-gray-800 mr-2 flex-shrink-0" />
                <span className="text-gray-500 text-sm whitespace-nowrap">x.com/</span>
                <input type="text" placeholder="johndoe" className="w-full py-2.5 outline-none min-w-0" />
              </div>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:border-gray-500 transition-colors">
                <FaInstagram size={18} className="text-pink-600 mr-2 flex-shrink-0" />
                <span className="text-gray-500 text-sm whitespace-nowrap">instagram.com/</span>
                <input type="text" placeholder="johndoe" className="w-full py-2.5 outline-none min-w-0" />
              </div>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 focus-within:border-gray-500 transition-colors">
                <FaFacebook size={18} className="text-blue-500 mr-2 flex-shrink-0" />
                <span className="text-gray-500 text-sm whitespace-nowrap">facebook.com/</span>
                <input type="text" placeholder="johndoe" className="w-full py-2.5 outline-none min-w-0" />
              </div>
            </div>
          </div>

          {/* Address Details */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">Address Details</label>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Address Line 1</label>
                <input type="text" defaultValue="B-404 shree vishnudhara homes" className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-gray-500" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Address Line 2</label>
                <input type="text" defaultValue="gota" className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-gray-500" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Landmark</label>
                <input type="text" defaultValue="in front of setu vertica" className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-gray-500" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Enter your city</label>
                <input type="text" defaultValue="Vadodara, Gujarat, IN" className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-gray-500" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Pincode</label>
                <input type="text" defaultValue="382481" className="w-full border border-gray-300 rounded-lg p-2.5 outline-none focus:border-gray-500" />
              </div>
            </div>
          </div>
          
          {/* Action Buttons (Fixed Bottom) */}
          <div className=" fixed bottom-0 left-0 right-0 bg-white  p-4 px-6 flex gap-4 justify-center md:justify-center md:max-w-1xl md:mx-auto shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-10">
              <button 
                type="button" 
                onClick={() => navigate('/profile')} 
                className="px-8 py-2.5 text-gray-600 font-medium rounded-full hover:bg-gray-100 transition-colors w-full md:w-auto"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="px-10 py-2.5 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors w-full md:w-auto shadow-md"
              >
                Submit
              </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;