import React, { useState, useRef } from 'react';
import { 
  ShieldCheck, FolderOpen, AlertTriangle, CheckCircle2,
  Lightbulb, Filter, Flag, MessageSquare, Plus,
  Clock, ShieldAlert, Send, Activity, ChevronDown,
  ArrowUp
} from 'lucide-react';

const mockProjects = [
  {
    id: 1,
    title: "Area 25 Health Center Renovation",
    status: "Ongoing",
    progress: 40,
    timeline: "Sep 2023 - Feb 2024",
    complaints: 0,
    budget: "MK 150 Million (40% Spent)",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Lilongwe Water Pipe Expansion",
    status: "Delayed",
    progress: 15,
    timeline: "Jan 2023 - Dec 2023",
    complaints: 14,
    budget: "MK 320 Million (80% Spent)",
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb60213ad?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "City Centre Market Solar Lights",
    status: "Completed",
    progress: 100,
    timeline: "Jun 2023 - Aug 2023",
    complaints: 1,
    budget: "MK 45 Million (100% Spent)",
    image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Area 18 Primary School Desks",
    status: "Ongoing",
    progress: 75,
    timeline: "Nov 2023 - Dec 2023",
    complaints: 2,
    budget: "MK 12 Million (75% Spent)",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop"
  }
];

const initialNeeds = [
  { id: 1, text: "New Borehole in Area 25 Sector B", upvotes: 342, hasUpvoted: true },
  { id: 2, text: "Repair potholes on main market road", upvotes: 215, hasUpvoted: false },
  { id: 3, text: "Add streetlights near the primary school", upvotes: 189, hasUpvoted: false },
];

const CitizenDashboard = ({ user }) => {
  const [activeTab, setActiveTab] = useState('active'); // 'active' or 'success'
  const [filter, setFilter] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(mockProjects[1]); // Default to delayed one for demo
  const [needs, setNeeds] = useState(initialNeeds);
  
  const reportFormRef = useRef(null);

  const handleReportClick = (project) => {
    setSelectedProject(project);
    if (reportFormRef.current) {
      // Small delay to ensure state updates before scroll if needed, though react batches this
      setTimeout(() => {
        reportFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  const handleUpvote = (id) => {
    setNeeds(needs.map(need => {
      if (need.id === id) {
        return {
          ...need,
          upvotes: need.hasUpvoted ? need.upvotes - 1 : need.upvotes + 1,
          hasUpvoted: !need.hasUpvoted
        };
      }
      return need;
    }).sort((a, b) => b.upvotes - a.upvotes));
  };

  let displayedProjects = mockProjects;
  
  if (activeTab === 'success') {
    displayedProjects = mockProjects.filter(p => p.status === 'Completed');
  } else {
    // Active Tracking
    if (filter !== 'All') {
      displayedProjects = mockProjects.filter(p => p.status === filter);
    } else {
      displayedProjects = mockProjects.filter(p => p.status !== 'Completed'); // Hide completed in active tab usually, or show all. Let's show all for 'All'
      displayedProjects = mockProjects;
    }
  }

  const renderStatusBadge = (status) => {
    if (status === 'Ongoing') {
      return (
        <span className="absolute top-3 left-3 bg-[#fef3c7] text-[#b45309] text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded shadow-sm flex items-center gap-1.5 border border-[#fde68a] z-10">
          <Activity size={12} /> Ongoing
        </span>
      );
    }
    if (status === 'Delayed') {
      return (
        <span className="absolute top-3 left-3 bg-[#fef2f2] text-[#dc2626] text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded shadow-sm flex items-center gap-1.5 border border-red-100 z-10">
          <Clock size={12} /> Delayed
        </span>
      );
    }
    return (
      <span className="absolute top-3 left-3 bg-[#ecfdf5] text-[#10b981] text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded shadow-sm flex items-center gap-1.5 border border-[#a7f3d0] z-10">
         <CheckCircle2 size={12} /> Completed
      </span>
    );
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-12 font-inter -mt-12 mx-[-1rem] sm:mx-[-1.5rem] lg:mx-[-2rem]">
      {/* Top Header */}
      <header className="bg-[#1e3a8a] h-16 w-full flex items-center justify-between px-6 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-12 h-full">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <ShieldCheck size={24} className="text-white" />
            <span className="text-white font-black text-[18px] leading-none tracking-tight uppercase">CHONDE+</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex h-full gap-2 items-center">
            <button className="px-5 py-1.5 bg-[#3b82f6] text-white font-bold text-[13px] transition-colors rounded-full shadow-sm border border-[#60a5fa]">
              My Constituency
            </button>
            <button className="px-5 text-blue-200 hover:text-white font-bold text-[13px] transition-colors">
              National View
            </button>
            <button className="px-5 text-blue-200 hover:text-white font-bold text-[13px] transition-colors">
              My Reports
            </button>
          </nav>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-white font-bold text-[13px] leading-tight">Emmanuel Phiri</p>
            <p className="text-blue-300 text-[10px] font-medium mt-0.5">Lilongwe City Centre</p>
          </div>
          <div className="w-9 h-9 rounded-full overflow-hidden border border-blue-400 bg-gray-200 shadow-sm">
            <img src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80&w=100" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-grow"></div>
    </div>
  );
};

export default CitizenDashboard;
