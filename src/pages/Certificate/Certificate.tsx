import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, X, Award, BookOpen } from 'lucide-react';

// Define the shape of our form data
interface AddressFormData {
  addressLine1: string;
  addressLine2: string;
  landmark: string;
  city: string;
  pincode: string;
}

interface DashboardStats {
  programsEnrolled: number;
  certificatesEarned: number;
}

const Certificate = () => {

  const [stats, setStats] = useState<DashboardStats>({
    programsEnrolled: 4,
    certificatesEarned: 0
  });

  const navigate = useNavigate();
  const [showAddressModal, setShowAddressModal] = useState(true);

  // 1. Initialize form state
  const [formData, setFormData] = useState<AddressFormData>({
    addressLine1: '',
    addressLine2: '',
    landmark: '',
    city: 'Vadodara, Gujarat, IN', // Pre-filled based on your UI
    pincode: '362265'              // Pre-filled based on your UI
  });

  const handleBackClick = () => {
    navigate('/dashboard');
  };

  const closeAddressModal = () => {
    setShowAddressModal(false);
  };

  // 2. Universal change handler for all text inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // 3. Handle the form submission
  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // You now have all the form data in the formData object!
    console.log('Submitting Address Data:', formData);
    
    // TODO: Add your API call here to save the data
    
    // Close the modal after successful submission
    setShowAddressModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative font-sans">
      <header className="flex items-center p-4 bg-white border-b border-gray-200">
        <button 
          onClick={handleBackClick} 
          className="p-1 hover:bg-gray-100 rounded-full transition-colors mr-2"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-lg font-semibold text-gray-900">My certificates</h1>
      </header>

      <main className="max-w-4xl mx-auto p-4 md:p-6">
        <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-6 flex items-center justify-between mb-6 shadow-sm">
          <div className="max-w-sm">
            <h2 className="text-2xl font-serif italic text-gray-900 mb-2">
              Certificates, that<br />you earned so far
            </h2>
            <p className="text-sm text-gray-800 font-medium">
              All your rewards and certificates, showcasing your passion for learning.
            </p>
          </div>
          <div className="hidden sm:flex items-center justify-center w-24 h-24 bg-blue-100 rounded-lg relative overflow-hidden">
            <div className="absolute top-2 right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div className="w-16 h-4 bg-blue-400 rounded mt-4"></div>
            <div className="w-16 h-4 bg-yellow-400 rounded absolute bottom-4"></div>
          </div>
        </div>

        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-4 mb-8 shadow-sm">
      <div className="flex-1 flex flex-col items-center justify-center border-r border-gray-100">
        <span className="text-2xl font-bold text-gray-900">
          {stats.programsEnrolled}
        </span>
        <div className="flex items-center text-xs text-gray-600 mt-1">
          <BookOpen className="w-3 h-3 mr-1" />
          Programs Enrolled
        </div>
      </div>
      
      <div className="w-12 h-12 rounded-full bg-gradient-to-b from-purple-400 to-purple-600 shadow-inner mx-4"></div>
      
      <div className="flex-1 flex flex-col items-center justify-center border-l border-gray-100">
        <span className="text-2xl font-bold text-gray-900">
          {stats.certificatesEarned}
        </span>
        <div className="flex items-center text-xs text-gray-600 mt-1">
          <Award className="w-3 h-3 mr-1" />
          Certificates
        </div>
      </div>
    </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-12">Your Certificates</h3>
          
          <div className="flex flex-col items-center justify-center text-center mt-12">
            <div className="w-24 h-24 bg-gray-100 rounded-lg mb-4 flex items-center justify-center relative opacity-50">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-10 border-2 border-gray-300 rounded-sm"></div>
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                <Award className="w-4 h-4 text-white" />
              </div>
            </div>
            <h4 className="text-gray-400 font-semibold mb-1">No Certificates Earned</h4>
            <p className="text-gray-400 text-sm">Join a program to earn a certificate</p>
          </div>
        </div>
      </main>

      {/* Address Confirmation Modal */}
      {showAddressModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in duration-200">
            
            <div className="flex items-center justify-between p-6 pb-2">
              <h2 className="text-xl font-semibold text-gray-900">Confirm your address details</h2>
              <button 
                onClick={closeAddressModal}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                type="button"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddressSubmit} className="p-6 space-y-4">
              
              {/* 4. Inputs updated with name, value, and onChange */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Address Line 1
                </label>
                <input 
                  type="text" 
                  name="addressLine1"
                  value={formData.addressLine1}
                  onChange={handleInputChange}
                  autoFocus
                  placeholder="Enter your street address"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Address Line 2
                </label>
                <input 
                  type="text" 
                  name="addressLine2"
                  value={formData.addressLine2}
                  onChange={handleInputChange}
                  placeholder="Apartment, suite, unit, etc. (optional)"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-gray-900 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Landmark
                </label>
                <input 
                  type="text" 
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleInputChange}
                  placeholder="Enter a nearby landmark (optional)"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-gray-900 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Enter your city
                </label>
                <input 
                  type="text" 
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-gray-900 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Pincode
                </label>
                <input 
                  type="text" 
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-gray-900 transition-all"
                  required
                />
              </div>

              <button 
                type="submit"
                className="w-full mt-6 bg-gray-900 hover:bg-black text-white font-medium py-3.5 rounded-xl transition-colors shadow-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate;