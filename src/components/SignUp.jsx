import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock, MapPin, Building2, ArrowRight } from 'lucide-react';
import { malawiData } from '../data/malawiData';

const SignUp = () => {
  const navigate = useNavigate();
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedConstituency, setSelectedConstituency] = useState('');

  const [districts, setDistricts] = useState([]);
  const [constituencies, setConstituencies] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate signup logic...
    navigate('/signin');
  };

  // Handle Region Change
  useEffect(() => {
    if (selectedRegion) {
      setDistricts(Object.keys(malawiData[selectedRegion]));
      setSelectedDistrict('');
      setConstituencies([]);
      setSelectedConstituency('');
    }
  }, [selectedRegion]);

  // Handle District Change
  useEffect(() => {
    if (selectedRegion && selectedDistrict) {
      setConstituencies(malawiData[selectedRegion][selectedDistrict]);
      setSelectedConstituency('');
    }
  }, [selectedRegion, selectedDistrict]);

  return (
    <div className="min-h-screen bg-neutral-bg flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-16 h-16 flex items-center justify-center overflow-hidden">
              <img src="/logo.png" alt="Chonde+ Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-black text-3xl tracking-tighter text-black uppercase">CHONDE+</span>
          </div>
          <h2 className="text-3xl font-black text-black">Create Accountability Profile</h2>
          <p className="mt-2 text-sm text-gray-600 font-medium">
            Join the platform to track local development.
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="bg-white py-12 px-6 shadow-2xl sm:rounded-3xl border border-neutral-border sm:px-12">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <User size={18} />
                  </div>
                  <input type="text" required className="appearance-none block w-full pl-10 px-3 py-3 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-primary-light focus:border-transparent sm:text-sm font-bold text-black" placeholder="John Doe" />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <Mail size={18} />
                  </div>
                  <input type="email" required className="appearance-none block w-full pl-10 px-3 py-3 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-primary-light focus:border-transparent sm:text-sm font-bold text-black" placeholder="name@example.com" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Password */}
              <div>
                <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <Lock size={18} />
                  </div>
                  <input type="password" required className="appearance-none block w-full pl-10 px-3 py-3 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-primary-light focus:border-transparent sm:text-sm font-bold text-black" placeholder="••••••••" />
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Confirm Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <Lock size={18} />
                  </div>
                  <input type="password" required className="appearance-none block w-full pl-10 px-3 py-3 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-primary-light focus:border-transparent sm:text-sm font-bold text-black" placeholder="••••••••" />
                </div>
              </div>
            </div>

            {/* GEOGRAPHIC DATA */}
            <div className="pt-4 space-y-4">
              <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                <MapPin size={18} className="text-status-completed" />
                <h3 className="text-sm font-black text-black uppercase tracking-widest">Geographical Residence</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Region */}
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Region</label>
                  <select 
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    required
                    className="block w-full px-3 py-3 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-primary-light focus:border-transparent text-sm font-bold text-black cursor-pointer bg-neutral-bg"
                  >
                    <option value="">Select Region</option>
                    {Object.keys(malawiData).map(region => (
                      <option key={region} value={region}>{region}</option>
                    ))}
                  </select>
                </div>

                {/* District */}
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">District</label>
                  <select 
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    disabled={!selectedRegion}
                    required
                    className="block w-full px-3 py-3 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-primary-light focus:border-transparent text-sm font-bold text-black cursor-pointer bg-neutral-bg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="">Select District</option>
                    {districts.map(district => (
                      <option key={district} value={district}>{district}</option>
                    ))}
                  </select>
                </div>

                {/* Constituency */}
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Constituency</label>
                  <select 
                    value={selectedConstituency}
                    onChange={(e) => setSelectedConstituency(e.target.value)}
                    disabled={!selectedDistrict}
                    required
                    className="block w-full px-3 py-3 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-primary-light focus:border-transparent text-sm font-bold text-black cursor-pointer bg-neutral-bg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="">Select Constituency</option>
                    {constituencies.map(constituency => (
                      <option key={constituency} value={constituency}>{constituency}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full flex justify-center py-4 border border-transparent rounded-2xl shadow-xl text-lg font-black text-white bg-black hover:bg-status-completed transition-all transform hover:-translate-y-1 active:scale-95"
              >
                CREATE ACCOUNT <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 font-bold">
              Already have an account?{' '}
              <a href="/signin" className="text-primary-light hover:text-black font-black transition-colors">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
