import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, FolderGit2, FileText, Bell, Menu, X, User, LogOut, LayoutDashboard, Map, Info } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#1e2336] border-b border-[#2a3044] shadow-sm h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-full">
        <div className="flex justify-between items-center h-full">
          
          {/* Left Side: Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer group">
            <div className="w-11 h-11 flex items-center justify-center mr-3 bg-white rounded-xl shadow-md transform group-hover:scale-105 transition-all duration-200">
              <img src="/logo.png" alt="Chonde+ Logo" className="w-9 h-9 object-contain" />
            </div>
            <span className="font-black text-2xl tracking-tight text-white uppercase group-hover:text-blue-400 transition-colors">CHONDE+</span>
          </Link>

          {/* Center Navigation */}
          <nav className="hidden md:flex space-x-8 items-center h-full">
            <Link to="/" className="flex items-center text-white font-bold text-sm hover:text-gray-300 transition-colors">
              Home
            </Link>
            <a href="/#projects" className="flex items-center text-gray-300 hover:text-white font-bold text-sm transition-colors">
              All Projects
            </a>
            <a href="#" className="flex items-center text-gray-300 hover:text-white font-bold text-sm transition-colors">
              Constituency Map
            </a>
            <a href="#" className="flex items-center text-gray-300 hover:text-white font-bold text-sm transition-colors">
              About Us
            </a>
          </nav>

          {/* Right Side: Auth & Language */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm font-bold">
              <button className="text-white">EN</button>
              <span className="text-gray-500">|</span>
              <button className="text-gray-400 hover:text-white transition-colors">CH</button>
            </div>
            
            {user ? (
              <div className="flex items-center gap-4 pl-4 border-l border-[#2a3044]">
                <Link to="/dashboard" className="flex items-center text-white hover:text-gray-300 font-bold text-sm gap-2">
                  <LayoutDashboard size={18} /> Dashboard
                </Link>
                <button 
                  onClick={handleLogout}
                  className="px-4 py-2 border border-[#2a3044] hover:bg-[#2a3044] text-white rounded-lg transition-colors text-sm font-bold"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link to="/signin" className="px-5 py-2.5 border border-white/20 hover:border-white text-white rounded-lg font-bold transition-all text-sm">
                  Sign In
                </Link>
                <Link to="/signup" className="bg-white hover:bg-gray-100 text-[#1e2336] px-5 py-2.5 rounded-lg font-bold shadow-sm transition-all text-sm">
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              className="text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute w-full left-0 top-20 bg-[#1e2336] border-b border-[#2a3044] shadow-lg z-30 animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <Link to="/" className="flex items-center text-white font-medium px-3 py-3 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <a href="/#projects" className="flex items-center text-gray-300 font-medium px-3 py-3 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
              All Projects
            </a>
            <a href="#" className="flex items-center text-gray-300 font-medium px-3 py-3 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
              Constituency Map
            </a>
            <a href="#" className="flex items-center text-gray-300 font-medium px-3 py-3 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
              About Us
            </a>
            
            <div className="mt-4 pt-4 border-t border-[#2a3044] px-1">
              {user ? (
                <div className="space-y-4">
                  <Link to="/dashboard" className="flex items-center text-white font-bold px-3 py-3 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    <LayoutDashboard size={20} className="mr-3" /> Dashboard
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="w-full border border-red-500/30 text-red-400 hover:bg-red-500/10 px-5 py-3.5 rounded-lg font-bold transition-colors flex items-center justify-center gap-2"
                  >
                    <LogOut size={20} /> LOG OUT
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <Link to="/signin" className="w-full border border-white/20 text-white px-5 py-3 rounded-lg font-bold text-center block" onClick={() => setIsMobileMenuOpen(false)}>
                    Sign In
                  </Link>
                  <Link to="/signup" className="w-full bg-white text-[#1e2336] px-5 py-3 rounded-lg font-bold text-center block" onClick={() => setIsMobileMenuOpen(false)}>
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
