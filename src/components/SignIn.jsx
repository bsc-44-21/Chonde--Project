import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    <div className="min-h-screen bg-neutral-bg flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-inter">
      <div className="sm:mx-auto sm:w-full sm:max-w-lg">
        {/* Logo & Brand */}
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-16 h-16 flex items-center justify-center overflow-hidden">
              <img src="/logo.png" alt="Chonde+ Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-black text-3xl tracking-tighter text-black uppercase">CHONDE+</span>
          </div>
          <h2 className="text-center text-3xl font-black text-black tracking-tight">Sign in to your account</h2>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="bg-white py-10 px-6 shadow-2xl sm:rounded-3xl border border-neutral-border sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl flex items-center gap-3 text-sm font-bold animate-shake">
                <AlertCircle size={18} />
                {error}
              </div>
            )}
            
            <div>
              <label htmlFor="email" className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Mail size={18} />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full pl-11 px-3 py-4 border border-gray-100 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent sm:text-sm font-bold text-black bg-gray-50/50"
                  placeholder="test@gmail.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Lock size={18} />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full pl-11 px-3 py-4 border border-gray-100 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-transparent sm:text-sm font-bold text-black bg-gray-50/50"
                  placeholder="12345"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-black font-bold">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-bold text-primary-light hover:text-black transition-colors">
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-2xl shadow-xl text-base font-black text-white bg-black hover:bg-status-completed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-widest"
              >
                SIGN IN NOW <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
             <p className="text-sm text-gray-500 font-medium">
              Don't have an account?{' '}
              <a href="/signup" className="text-status-completed hover:text-emerald-700 font-black transition-colors underline underline-offset-4 decoration-2">
                Create a new accountability profile
              </a>
            </p>
          </div>

          <div className="mt-10">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
              </div>
              <div className="relative flex justify-center text-[10px] uppercase tracking-[0.2em] font-black">
                <span className="px-4 bg-white text-gray-300">Authorized Access Only</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <a href="/" className="text-xs font-black text-gray-400 hover:text-black transition-colors flex items-center justify-center uppercase tracking-widest">
             Return to Public Dashboard
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
