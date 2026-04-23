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
    <div className="min-h-screen flex font-inter overflow-hidden">
      {/* Left Side - Sign Up Section (NOW ON THE LEFT) */}
      <div className="w-full lg:w-1/2 bg-[#f8faff] flex flex-col items-center justify-center p-4 sm:p-8 relative">
        <div className="w-full max-w-[480px]">
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
                className="w-full bg-[#1e3a8a] text-white py-4 rounded-xl font-black text-lg shadow-lg shadow-blue-900/10 hover:bg-blue-900 transition-all active:scale-[0.98]"
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

          {/* Language Selector */}
          <div className="mt-8 flex justify-center items-center space-x-6">
            <button 
              onClick={() => setLanguage('English')}
              className={`text-sm font-black transition-colors ${
                language === 'English' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              English
            </button>
            <button 
              onClick={() => setLanguage('Chichewa')}
              className={`text-sm font-black transition-colors ${
                language === 'Chichewa' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Chichewa
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Hero Section (NOW ON THE RIGHT) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-blue-900">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/auth-bg.png')" }}
        >
          <div className="absolute inset-0 bg-[#1e3a8a]/90 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-between p-8 w-full text-white">
          <div className="flex items-center space-x-2">
            <ShieldCheck size={32} className="text-white" />
            <span className="text-2xl font-black tracking-tighter uppercase">CHONDE+</span>
          </div>

          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-[1.1]">
              Take charge of your<br />
              community.
            </h1>
            <p className="text-base sm:text-lg text-blue-100/90 mb-6 leading-relaxed">
              Register to track specific projects in your constituency, report issues directly to the ACB, and suggest where future government funds should go.
            </p>

            {/* Feature Cards */}
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex items-start space-x-4">
                <div className="bg-white rounded-full p-2 text-blue-900 shadow-sm">
                  <Eye size={20} />
                </div>
                <div>
                  <h3 className="font-black text-lg">Public Visibility</h3>
                  <p className="text-sm text-blue-100/70">Your reports force public accountability. Everyone sees when a project fails.</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex items-start space-x-4">
                <div className="bg-red-500 rounded-full p-2 text-white shadow-sm">
                  <Shield size={20} />
                </div>
                <div>
                  <h3 className="font-black text-lg">100% Anonymous</h3>
                  <p className="text-sm text-blue-100/70">Protect your identity. The MP and contractor will never know who reported them.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-blue-200/60 text-sm font-medium">
            <Lock size={14} />
            <span>Secure platform monitored by the Anti-Corruption Bureau</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

