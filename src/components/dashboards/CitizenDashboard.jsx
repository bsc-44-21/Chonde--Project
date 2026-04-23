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
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mt-8">
        
        {/* Header Text */}
        <div className="mb-6">
          <h1 className="text-[26px] font-black text-[#1e2336] leading-tight mb-1">Lilongwe City Centre Projects</h1>
          <p className="text-[14px] text-gray-500 font-medium mt-1">Monitor development in your area. Your vigilance ensures funds are used effectively.</p>
        </div>

        {/* Top Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-[#eff6ff] flex items-center justify-center">
              <FolderOpen size={20} className="text-[#3b82f6]" />
            </div>
            <div>
              <p className="text-2xl font-black text-[#1e2336] leading-none mb-1">14</p>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Total Projects</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-[#fef2f2] flex items-center justify-center">
              <AlertTriangle size={20} className="text-[#dc2626]" />
            </div>
            <div>
              <p className="text-2xl font-black text-[#dc2626] leading-none mb-1">2</p>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Flagged Issues</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-[#ecfdf5] flex items-center justify-center">
              <CheckCircle2 size={20} className="text-[#10b981]" />
            </div>
            <div>
              <p className="text-2xl font-black text-[#10b981] leading-none mb-1">5</p>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Completed</p>
            </div>
          </div>

        </div>

        {/* Submit a Community Need */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl border border-blue-100 shadow-sm p-6 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden mb-4">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#1e3a8a]"></div>
            <div className="w-14 h-14 rounded-full bg-[#1e3a8a] flex items-center justify-center shrink-0 shadow-md text-white ml-2">
              <Lightbulb size={24} />
            </div>
            <div className="flex-1 w-full md:w-auto">
              <h2 className="text-[17px] font-black text-[#1e2336] mb-1">Submit a Community Need</h2>
              <p className="text-[13px] text-gray-500 font-medium mb-3">What does Lilongwe City Centre need most? Your suggestions guide future government funding and MP priorities.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input type="text" placeholder="E.g., We need a new borehole in Area 25..." className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 text-[13px] font-medium outline-none focus:border-blue-500 shadow-sm text-gray-700 focus:bg-white transition-colors" />
                <button className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-bold py-3.5 px-8 rounded-xl text-[13px] transition-colors shadow-sm whitespace-nowrap">
                  Submit Need
                </button>
              </div>
            </div>
          </div>
          
          {/* Trending Needs - Upvoting Section */}
          <div className="pl-4 border-l-2 border-gray-200 space-y-3 ml-2">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Trending Community Needs</p>
            {needs.map((need) => (
              <div key={need.id} className="flex items-center gap-4 bg-white px-4 py-2.5 rounded-lg border border-gray-100 shadow-sm w-fit">
                <button 
                  onClick={() => handleUpvote(need.id)}
                  className={`flex flex-col items-center justify-center w-10 h-10 rounded-md transition-colors ${need.hasUpvoted ? 'bg-orange-50 text-orange-600 border border-orange-200' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}
                >
                  <ArrowUp size={16} strokeWidth={need.hasUpvoted ? 3 : 2} />
                </button>
                <div>
                  <p className="text-[13px] font-bold text-[#1e2336]">{need.text}</p>
                  <p className="text-[11px] font-medium text-gray-500">{need.upvotes} citizens support this</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column (Span 2) */}
          <div className="lg:col-span-2 space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-2">
              {/* Tab Toggle */}
              <div className="flex bg-gray-100 p-1 rounded-lg w-fit">
                <button 
                  onClick={() => { setActiveTab('active'); setFilter('All'); }}
                  className={`px-4 py-2 rounded-md text-[13px] font-bold transition-all ${activeTab === 'active' ? 'bg-white text-[#1e2336] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  Active Tracking
                </button>
                <button 
                  onClick={() => setActiveTab('success')}
                  className={`px-4 py-2 rounded-md text-[13px] font-bold transition-all flex items-center gap-1.5 ${activeTab === 'success' ? 'bg-[#10b981] text-white shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >
                   Success Stories
                </button>
              </div>

              {/* Filter */}
              {activeTab === 'active' && (
                <div className="relative">
                  <button 
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="flex items-center justify-between w-40 bg-white border border-gray-200 text-[#1e2336] text-[12px] font-bold px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
                  >
                    <span className="flex items-center gap-2"><Filter size={14} /> {filter === 'All' ? 'Filter' : filter}</span>
                    <ChevronDown size={14} className="text-gray-400" />
                  </button>
                  
                  {isFilterOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-xl shadow-lg z-20 py-1">
                      <button onClick={() => { setFilter('All'); setIsFilterOpen(false); }} className="w-full text-left px-4 py-2 text-[12px] font-bold text-gray-700 hover:bg-gray-50">All Projects</button>
                      <button onClick={() => { setFilter('Ongoing'); setIsFilterOpen(false); }} className="w-full text-left px-4 py-2 text-[12px] font-bold text-[#b45309] hover:bg-amber-50">Ongoing</button>
                      <button onClick={() => { setFilter('Delayed'); setIsFilterOpen(false); }} className="w-full text-left px-4 py-2 text-[12px] font-bold text-[#dc2626] hover:bg-red-50">Delayed</button>
                      <button onClick={() => { setFilter('Completed'); setIsFilterOpen(false); }} className="w-full text-left px-4 py-2 text-[12px] font-bold text-[#10b981] hover:bg-emerald-50">Completed</button>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {displayedProjects.map((project) => (
                <div key={project.id} className={`bg-white rounded-2xl shadow-sm border ${activeTab === 'success' ? 'border-emerald-200' : 'border-gray-200'} overflow-hidden flex flex-col transition-all hover:shadow-md`}>
                  <div className="h-[180px] relative group">
                    <img src={project.image} alt={project.title} className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${project.status === 'Delayed' ? 'grayscale opacity-80' : ''}`} />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    {renderStatusBadge(project.status)}
                  </div>
                  
                  <div className="p-5 flex flex-col flex-1 relative">
                    {/* Budget Badge */}
                    <div className="absolute -top-3 right-4 bg-white border border-gray-200 text-gray-700 text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded shadow-sm z-10">
                      {project.budget}
                    </div>

                    <h3 className="text-[17px] font-black text-[#1e2336] mb-4 leading-tight mt-1">{project.title}</h3>
                    
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Progress</span>
                        <span className="text-[11px] font-black text-gray-700">{project.progress}%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-1000 ${project.status === 'Completed' ? 'bg-[#10b981]' : project.status === 'Delayed' ? 'bg-[#dc2626]' : 'bg-[#1e3a8a]'}`} 
                          style={{width: `${project.progress}%`}}
                        ></div>
                      </div>
                    </div>

                    <div className="flex justify-between items-end border-t border-gray-100 pt-4 mb-6">
                      <div>
                        <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Timeline</p>
                        <p className="text-[12px] font-bold text-[#1e2336]">{project.timeline}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Citizen Reports</p>
                        <p className={`text-[12px] font-bold flex items-center justify-end gap-1 ${project.complaints > 0 ? 'text-[#dc2626]' : 'text-[#1e2336]'}`}>
                          {project.complaints > 0 ? <><MessageSquare size={12} /> {project.complaints} complaints</> : 'None'}
                        </p>
                      </div>
                    </div>

                    {project.status !== 'Completed' && (
                      <button 
                        onClick={() => handleReportClick(project)}
                        className="mt-auto w-full bg-[#ef4444] hover:bg-red-600 text-white font-bold py-3.5 rounded-xl text-[13px] transition-colors shadow-sm flex items-center justify-center gap-2"
                      >
                        <Flag size={16} /> REPORT ISSUE
                      </button>
                    )}
                    {project.status === 'Completed' && (
                      <button 
                        className="mt-auto w-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold py-3.5 rounded-xl text-[13px] flex items-center justify-center gap-2 cursor-default"
                      >
                        <CheckCircle2 size={16} /> Fully Delivered
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {displayedProjects.length === 0 && (
                <div className="col-span-1 md:col-span-2 bg-white border border-gray-200 rounded-2xl p-12 text-center text-gray-500">
                  No projects found for this filter.
                </div>
              )}

            </div>

          </div>

          {/* Right Column (Span 1) - Report an Issue Sidebar */}
          <div className="relative">
            <div ref={reportFormRef} className="bg-white rounded-2xl border-[3px] border-red-500 shadow-xl overflow-hidden h-fit sticky top-24 transition-all duration-300">
              
              <div className="bg-[#ef4444] p-5 text-white flex gap-4">
                <div className="pt-1"><ShieldAlert size={24} /></div>
                <div>
                  <h2 className="text-[19px] font-black leading-tight mb-1">Report an Issue</h2>
                  <p className="text-[11px] font-bold">Direct to Anti-Corruption Bureau</p>
                </div>
              </div>

              <div className="p-7 space-y-7">
                
                {/* Section 1 */}
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2.5">1. Selected Project</p>
                  <div className="bg-[#f8fafc] border border-gray-200 rounded-xl p-4 flex justify-between items-center shadow-sm">
                    <span className="text-[13px] font-black text-[#1e2336] truncate pr-4">{selectedProject.title}</span>
                    <button className="text-[#1e3a8a] text-[11px] font-bold hover:underline shrink-0">Change</button>
                  </div>
                </div>

                {/* Section 2 */}
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2.5">2. Describe the Problem</p>
                  <div className="relative">
                    <textarea rows="4" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-[13px] font-medium outline-none focus:border-red-500 shadow-sm text-gray-700 leading-relaxed resize-none" placeholder="Explain what is wrong with this project..."></textarea>
                    <div className="absolute bottom-3 right-4 text-[9px] font-bold text-gray-400">0 / 500 characters</div>
                  </div>
                </div>

                {/* Section 3 */}
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2.5">3. Upload Evidence (Required)</p>
                  <div className="flex gap-3 mb-3">
                    <button className="w-[60px] h-[60px] rounded-lg border border-dashed border-gray-300 bg-[#f8fafc] flex flex-col items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-colors">
                      <Plus size={20} />
                    </button>
                  </div>
                  <p className="text-[10px] text-gray-500 font-medium">Upload clear photos showing the current state of the project.</p>
                </div>

                {/* Anonymous */}
                <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-4 shadow-sm">
                  <div className="flex gap-3">
                    <div className="pt-0.5"><ShieldCheck size={16} className="text-[#10b981]" /></div>
                    <div>
                      <h3 className="text-[13px] font-black text-[#1e2336] mb-1">Anonymous Submission</h3>
                      <p className="text-[11px] text-gray-600 font-medium leading-relaxed mb-3.5">Your identity will be hidden from the MP and contractor. Only the ACB will know who submitted this.</p>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <div className="w-4 h-4 rounded-full bg-[#1e3a8a] flex items-center justify-center shadow-sm">
                          <CheckCircle2 size={12} className="text-white" />
                        </div>
                        <span className="text-[11px] font-bold text-[#1e2336]">Keep my report anonymous</span>
                      </label>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-[#ef4444] hover:bg-red-600 text-white font-black py-4 rounded-xl text-[14px] transition-colors shadow-md flex items-center justify-center gap-2">
                  <Send size={18} /> Submit Report Now
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CitizenDashboard;
