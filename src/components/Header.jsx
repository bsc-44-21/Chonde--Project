import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, FolderGit2, FileText, Bell, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <a href="/#reports" className="flex items-center text-neutral-textSec hover:text-primary-dark border-b-[3px] border-transparent hover:border-primary-light h-full transition-colors font-medium">
              <FileText size={18} className="mr-2" />
              Reports
            </a>
          </nav>

          {/* Right Side: Notification & Sign In */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="relative text-neutral-textSec hover:text-primary-dark transition-colors p-1" title="Notifications">
              <Bell size={22} />
              <span className="absolute top-0 right-0 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-delayed opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-status-delayed"></span>
              </span>
            </button>
            <Link to="/signin" className="bg-status-completed hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg font-medium shadow-sm transition-colors text-sm">
              Sign In
            </Link>
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
            <a href="/#projects" className="flex items-center text-neutral-textMain font-medium px-3 py-3 hover:bg-neutral-bg rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              <FolderGit2 size={20} className="mr-3" /> Projects
            </a>
            <a href="/#reports" className="flex items-center text-neutral-textMain font-medium px-3 py-3 hover:bg-neutral-bg rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              <FileText size={20} className="mr-3" /> Reports
            </a>
            <div className="mt-4 pt-4 border-t border-neutral-border px-1">
              <Link to="/signin" className="w-full bg-status-completed hover:bg-emerald-700 text-white px-5 py-3.5 rounded-lg font-bold shadow-sm transition-colors block text-center text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
