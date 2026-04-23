import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, FolderGit2, FileText, Bell, Menu, X, User, LogOut, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleReportClick = (e) => {
    e.preventDefault();
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/signin');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-neutral-card border-b border-neutral-border shadow-sm h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-full">
        <div className="flex justify-between items-center h-full">
          
          {/* Left Side: Logo (Overlapping) */}
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer relative z-50 h-full -ml-1 sm:-ml-4">
            {/* The absolute positioning makes it hang over the bottom edge */}
            <div className="absolute top-1 -left-2 sm:-left-4 w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center transition-transform hover:scale-105">
              <img src="/logo.png" alt="Chonde+ CDF Logo" className="w-full h-full object-contain drop-shadow-sm" />
            </div>
            {/* Spacer to push nav items right since logo is absolute */}
            <div className="w-24 sm:w-28"></div>
            <span className="font-bold text-2xl tracking-tight text-primary-dark">CHONDE+</span>
          </Link>

          {/* Center Navigation */}
          <nav className="hidden md:flex space-x-8 items-center h-full">
            <Link to="/" className="flex items-center text-primary-dark font-medium border-b-[3px] border-primary-dark h-full transition-colors">
              <Home size={18} className="mr-2" />
              Home
            </Link>
            <a href="/#projects" className="flex items-center text-neutral-textSec hover:text-primary-dark border-b-[3px] border-transparent hover:border-primary-light h-full transition-colors font-medium">
              <FolderGit2 size={18} className="mr-2" />
              Projects
            </a>
            <button 
              onClick={handleReportClick}
              className="flex items-center text-neutral-textSec hover:text-primary-dark border-b-[3px] border-transparent hover:border-primary-light h-full transition-colors font-medium"
            >
              <FileText size={18} className="mr-2" />
              Report
            </button>
          </nav>

          {/* Right Side: Notification & Auth */}
          <div className="hidden md:flex items-center space-x-6">
            {user && (
              <Link to="/dashboard" className="flex items-center text-neutral-textSec hover:text-black font-black text-xs uppercase tracking-widest gap-2">
                <LayoutDashboard size={18} /> Dashboard
              </Link>
            )}
            <button className="relative text-neutral-textSec hover:text-primary-dark transition-colors p-1" title="Notifications">
              <Bell size={22} />
              <span className="absolute top-0 right-0 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-delayed opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-status-delayed"></span>
              </span>
            </button>
            
            {user ? (
              <div className="flex items-center gap-4 border-l border-gray-200 pl-6 h-10">
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-black text-black leading-none">{user.name}</span>
                  <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest mt-0.5">{user.role}</span>
                </div>
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
                  <User size={20} />
                </div>
                <button 
                  onClick={handleLogout}
                  className="p-2 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-lg transition-all"
                  title="Log Out"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <Link to="/signin" className="bg-status-completed hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg font-medium shadow-sm transition-colors text-sm">
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="relative text-neutral-textSec hover:text-primary-dark transition-colors p-1 mr-4" title="Notifications">
              <Bell size={22} />
              <span className="absolute top-0 right-0 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-delayed opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-status-delayed"></span>
              </span>
            </button>
            <button 
              className="text-neutral-textSec hover:text-primary-dark p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute w-full left-0 top-20 bg-neutral-card border-b border-neutral-border shadow-lg z-30 animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <Link to="/" className="flex items-center text-primary-dark font-medium px-3 py-3 bg-neutral-bg rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
              <Home size={20} className="mr-3" /> Home
            </Link>
            {user && (
              <Link to="/dashboard" className="flex items-center text-neutral-textMain font-black px-3 py-3 hover:bg-neutral-bg rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                <LayoutDashboard size={20} className="mr-3" /> Dashboard
              </Link>
            )}
            <a href="/#projects" className="flex items-center text-neutral-textMain font-medium px-3 py-3 hover:bg-neutral-bg rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              <FolderGit2 size={20} className="mr-3" /> Projects
            </a>
            <button 
              onClick={(e) => { setIsMobileMenuOpen(false); handleReportClick(e); }}
              className="flex items-center text-neutral-textMain font-medium px-3 py-3 hover:bg-neutral-bg rounded-lg transition-colors"
            >
              <FileText size={20} className="mr-3" /> Report
            </button>
            <div className="mt-4 pt-4 border-t border-neutral-border px-1">
              {user ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-4 px-3 py-2">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white">
                      <User size={24} />
                    </div>
                    <div>
                      <p className="font-black text-black">{user.name}</p>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{user.role}</p>
                    </div>
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="w-full bg-red-50 text-red-600 px-5 py-3.5 rounded-lg font-bold transition-colors flex items-center justify-center gap-2"
                  >
                    <LogOut size={20} /> LOG OUT
                  </button>
                </div>
              ) : (
                <Link to="/signin" className="w-full bg-status-completed hover:bg-emerald-700 text-white px-5 py-3.5 rounded-lg font-bold shadow-sm transition-colors block text-center text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
