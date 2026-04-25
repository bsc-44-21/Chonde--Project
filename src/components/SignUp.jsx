import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Eye, 
  Lock, 
  ArrowRight, 
  User, 
  Phone, 
  MapPin, 
  Shield 
} from 'lucide-react';
import { malawiData } from '../data/malawiData';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    district: '',
    constituency: '',
    password: ''
  });
  const [language, setLanguage] = useState('English');
  const [allDistricts, setAllDistricts] = useState([]);
  const [availableConstituencies, setAvailableConstituencies] = useState([]);

  // Flatten districts from malawiData
  useEffect(() => {
    const districts = [];
    Object.values(malawiData).forEach(regionDistricts => {
      districts.push(...Object.keys(regionDistricts));
    });
    setAllDistricts(districts.sort());
  }, []);

  // Update constituencies when district changes
  useEffect(() => {
    if (formData.district) {
      let foundConstituencies = [];
      Object.values(malawiData).forEach(regionDistricts => {
        if (regionDistricts[formData.district]) {
          foundConstituencies = regionDistricts[formData.district];
        }
      });
      setAvailableConstituencies(foundConstituencies);
    } else {
      setAvailableConstituencies([]);
    }
  }, [formData.district]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/signin');
  };

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] flex flex-col items-center justify-center p-4 sm:p-8 font-inter overflow-y-auto py-12">
      <div className="w-full max-w-[480px]">
        {/* Logo and Brand Header */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <img src="/logo.png" alt="Chonde+ Logo" className="w-14 h-14 object-contain bg-white rounded-2xl p-2 shadow-sm" />
          <span className="text-3xl font-black tracking-tighter text-[#1e2336] uppercase">CHONDE+</span>
        </div>

        <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.03)] p-6 sm:p-10 border border-gray-100">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-black text-gray-900 mb-1">Create an Account</h2>
            <p className="text-sm text-gray-400 font-medium">Join as a citizen to monitor development</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="block text-xs font-black text-gray-900 uppercase tracking-widest">Full Name</label>
              <input
                type="text"
                required
                className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-bold text-sm"
                placeholder="e.g. Emmanuel Phiri"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              />
            </div>

            {/* Email Address */}
            <div className="space-y-1.5">
              <label className="block text-xs font-black text-gray-900 uppercase tracking-widest">Email Address</label>
              <input
                type="email"
                required
                className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-bold text-sm"
                placeholder="e.g. emmanuel@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-1.5">
              <label className="block text-xs font-black text-gray-900 uppercase tracking-widest">Phone Number</label>
              <div className="flex">
                <div className="bg-gray-50 border border-gray-200 border-r-0 rounded-l-xl px-3 flex items-center space-x-2 text-sm font-bold text-gray-900">
                  <span className="text-base">🇲🇼</span>
                  <span>+265</span>
                </div>
                <input
                  type="tel"
                  required
                  className="w-full bg-white border border-gray-200 rounded-r-xl py-3 px-4 text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-bold text-sm"
                  placeholder=" _ _ _ _ _ _ _ _"
                  maxLength={9}
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/\D/g, '')})}
                />
              </div>
            </div>

            {/* District & Constituency */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-black text-gray-900 uppercase tracking-widest">District</label>
                <select
                  required
                  className="w-full bg-white border border-gray-200 rounded-xl py-3 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-bold text-sm cursor-pointer"
                  value={formData.district}
                  onChange={(e) => setFormData({...formData, district: e.target.value, constituency: ''})}
                >
                  <option value="">Select District...</option>
                  {allDistricts.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-black text-gray-900 uppercase tracking-widest">Constituency</label>
                <select
                  required
                  disabled={!formData.district}
                  className="w-full bg-white border border-gray-200 rounded-xl py-3 px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-bold text-sm disabled:opacity-50 cursor-pointer"
                  value={formData.constituency}
                  onChange={(e) => setFormData({...formData, constituency: e.target.value})}
                >
                  <option value="">{formData.district ? "Select Constituency..." : "Select District first"}</option>
                  {availableConstituencies.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
            <p className="text-[10px] text-gray-400 font-medium leading-tight">This sets your default dashboard to monitor projects in your area.</p>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="block text-xs font-black text-gray-900 uppercase tracking-widest">Password</label>
              <input
                type="password"
                required
                className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-bold text-sm"
                placeholder="Create a password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#1e2336] text-white py-4 rounded-xl font-black text-lg shadow-lg shadow-blue-900/10 hover:bg-[#2a3044] transition-all active:scale-[0.98]"
            >
              Register Now
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm font-medium text-gray-400">
              Already have an account?{' '}
              <button 
                onClick={() => navigate('/signin')}
                className="text-blue-800 font-black hover:underline underline-offset-4"
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

