import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Mail,
  Lock,
  ArrowRight,
  AlertCircle,
  ShieldCheck,
  CheckCircle2,
  User,
  Eye,
  EyeOff
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState('citizen'); // 'citizen' or 'official'
  const [language, setLanguage] = useState('English');
  const [error, setError] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    const success = login(email, password);
    if (success) {
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Use test@gmail.com / 12345');
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] flex flex-col items-center justify-center p-4 sm:p-8 font-inter">
      <div className="w-full max-w-[440px]">
        {/* Logo and Brand Header */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <img src="/logo.png" alt="Chonde+ Logo" className="w-14 h-14 object-contain bg-white rounded-2xl p-2 shadow-sm" />
          <span className="text-3xl font-black tracking-tighter text-[#1e2336] uppercase">CHONDE+</span>
        </div>

        {/* Sign In Card */}
        <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.03)] p-6 sm:p-10 border border-gray-100">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-black text-gray-900 mb-1">Welcome Back</h2>
            <p className="text-sm text-gray-400 font-medium">Sign in to access your dashboard</p>
          </div>

          {/* Role Switcher */}
          <div className="flex bg-gray-100/80 p-1 rounded-xl mb-6">
            <button
              onClick={() => setRole('citizen')}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all ${role === 'citizen'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              Citizen
            </button>
            <button
              onClick={() => setRole('official')}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all ${role === 'official'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              Official / MP
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl flex items-center gap-3 text-sm font-bold">
                <AlertCircle size={18} />
                {error}
              </div>
            )}

            {/* Email/Phone Input */}
            <div className="space-y-3">
              <label className="block text-xs font-black text-gray-900 uppercase tracking-widest">
                Phone Number or Email
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-600 transition-colors">
                  <User size={20} />
                </div>
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-xl py-3.5 pl-11 pr-4 text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-bold text-sm"
                  placeholder="Enter your details..."
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="block text-xs font-black text-gray-900 uppercase tracking-widest">
                  Password
                </label>
                <button type="button" className="text-xs font-black text-blue-800 hover:text-blue-900">
                  Forgot Password?
                </button>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-600 transition-colors">
                  <Lock size={20} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-xl py-3.5 pl-11 pr-11 text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-bold text-sm"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-[#1e2336] text-white py-4 rounded-xl font-black text-base shadow-lg shadow-blue-900/10 hover:bg-[#2a3044] transition-all active:scale-[0.98] flex items-center justify-center space-x-2"
            >
              <span>Sign In</span>
              <ArrowRight size={20} />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm font-medium text-gray-400">
              Don't have an account?{' '}
              <button
                onClick={() => navigate('/signup')}
                className="text-blue-800 font-black hover:underline underline-offset-4"
              >
                Register here
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

