import React from 'react';
import { 
  ShieldCheck, AlertTriangle, MessageSquare, Clock, PlusCircle,
  Filter, ChevronUp, ChevronDown, Activity, Edit2, Users
} from 'lucide-react';

const MPDashboard = ({ user }) => {
  return (
    <div className="bg-[#f8fafc] min-h-screen pb-12 font-inter -mt-12 mx-[-1rem] sm:mx-[-1.5rem] lg:mx-[-2rem]">
      {/* Top Header */}
      <header className="bg-[#1e2336] h-16 w-full flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center gap-12 h-full">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <ShieldCheck size={20} className="text-blue-500" />
            <span className="text-white font-black text-lg leading-none tracking-tight uppercase">CHONDE+ <span className="text-gray-400 text-[10px] tracking-widest font-bold ml-1">MP PORTAL</span></span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex h-full gap-2">
            <button className="h-full px-5 bg-[#2a3044] text-white font-bold text-sm transition-colors flex items-center rounded-t-lg mt-2 pt-1">
              Overview
            </button>
            <button className="h-full px-5 text-gray-400 hover:text-white font-bold text-sm transition-colors flex items-center mt-2 pt-1">
              Manage Projects
            </button>
            <button className="h-full px-5 text-gray-400 hover:text-white font-bold text-sm transition-colors flex items-center mt-2 pt-1">
              Community Voices
            </button>
          </nav>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-white font-bold text-sm leading-tight">Hon. Peter Banda</p>
            <p className="text-gray-400 text-[10px] font-medium">MP - Lilongwe City Centre</p>
          </div>
          <div className="w-9 h-9 rounded-full overflow-hidden border border-gray-600 bg-gray-200">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Alert Banner */}
      <div className="bg-[#ef4444] w-full px-6 py-3 flex items-center justify-center gap-4 text-white shadow-sm">
        <AlertTriangle size={18} />
        <span className="text-sm font-bold tracking-wide">ATTENTION: 3 projects in your constituency have been flagged by citizens this week. ACB is monitoring.</span>
        <button className="ml-4 bg-white text-[#ef4444] px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-gray-100 transition-colors shadow-sm">
          REVIEW NOW
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mt-8 space-y-8">
        
        {/* Top Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-sm border-2 border-red-500 p-6 flex flex-col justify-center items-center text-center relative overflow-hidden">
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Citizen Satisfaction</p>
            <p className="text-[40px] font-black text-[#dc2626] leading-none my-2">42%</p>
            <div className="flex items-center gap-1 text-[11px] font-bold text-[#dc2626]">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-180"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
               -8% this month
            </div>
            <p className="text-[9px] text-gray-400 mt-4 italic font-medium">Publicly visible to all citizens</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="p-2.5 bg-orange-50 rounded-xl text-orange-500">
                <Clock size={20} />
              </div>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest max-w-[80px] text-right leading-tight">Delayed Projects</p>
            </div>
            <div className="mt-4">
              <p className="text-4xl font-black text-[#1e2336] leading-none mb-2">2</p>
              <p className="text-xs font-bold text-orange-500">Requires urgent update</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="p-2.5 bg-red-50 rounded-xl text-red-500">
                <MessageSquare size={20} />
              </div>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest max-w-[90px] text-right leading-tight">Unresolved Complaints</p>
            </div>
            <div className="mt-4">
              <p className="text-4xl font-black text-[#1e2336] leading-none mb-2">38</p>
              <p className="text-xs font-bold text-red-500">12 new this week</p>
            </div>
          </div>

          {/* Card 4 (Dark) */}
          <div className="bg-[#263b75] rounded-2xl shadow-sm border border-[#314a8f] p-6 flex flex-col justify-between">
            <div>
              <p className="text-sm font-bold text-white mb-2">
                 Government Mandate
              </p>
              <p className="text-xs text-blue-200 leading-relaxed font-medium">
                You have 1 newly assigned government project to register.
              </p>
            </div>
            <button className="mt-5 w-full bg-white hover:bg-gray-50 text-[#263b75] font-bold py-3 rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow-sm">
              <PlusCircle size={16} /> Register Project
            </button>
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          
          {/* Left Column (Span 2) */}
          <div className="xl:col-span-2 space-y-4">
            <div className="flex justify-between items-end mb-4">
              <div>
                <h2 className="text-xl font-black text-[#1e2336]">Manage Constituency Projects</h2>
                <p className="text-[13px] text-gray-500 font-medium mt-1">Update statuses regularly. Changes are live to citizens immediately.</p>
              </div>
              <button className="flex items-center gap-2 bg-white border border-gray-200 text-[#1e2336] text-[11px] font-bold px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                <Filter size={14} /> Sort by: Most Complained
              </button>
            </div>
            
            <div className="space-y-6">
              {/* Project Card 1 */}
              <div className="bg-white rounded-2xl shadow-sm border border-red-200 p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
                <div className="flex justify-between items-start mb-4 ml-2">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-[#dc2626] bg-[#fee2e2] px-2.5 py-1 rounded border border-red-100">
                      <AlertTriangle size={12} /> Flagged
                    </span>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Ref: LIL-WPE-2023</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[#dc2626] font-black text-sm block leading-none mb-1.5">14 Complaints</span>
                    <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Top Issue: Abandoned site</p>
                  </div>
                </div>
                
                <div className="ml-2">
                  <h3 className="text-[19px] font-black text-[#1e2336] mb-1">Lilongwe Water Pipe Expansion</h3>
                  <p className="text-xs text-gray-500 font-medium">Contractor: Phiri Construction Ltd • Jan 2023 - Dec 2023</p>
                  
                  <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div>
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Current Status</p>
                      <p className="text-[13px] font-bold text-[#1e2336] flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span> Foundation Phase (Delayed)
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <button className="flex items-center gap-2 text-gray-700 bg-white border border-gray-200 font-bold py-2.5 px-4 rounded-lg text-xs transition-colors hover:bg-gray-50 shadow-sm">
                        <MessageSquare size={14} /> View Complaints
                      </button>
                      <button className="flex items-center gap-2 bg-[#263b75] hover:bg-[#1e2f5d] text-white font-bold py-2.5 px-5 rounded-lg text-xs transition-colors shadow-sm">
                        <Edit2 size={14} /> Update Status
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-amber-400"></div>
                <div className="flex justify-between items-start mb-4 ml-2">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-amber-600 bg-amber-50 px-2.5 py-1 rounded border border-amber-100">
                      <Activity size={12} /> Ongoing
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[#1e2336] font-black text-sm block leading-none mb-1.5">0 Complaints</span>
                    <p className="text-[9px] text-emerald-500 font-bold uppercase tracking-widest">On track</p>
                  </div>
                </div>
                
                <div className="ml-2">
                  <h3 className="text-[19px] font-black text-[#1e2336] mb-1">Area 25 Health Center Renovation</h3>
                  <p className="text-xs text-gray-500 font-medium">Contractor: M&M Builders • Sep 2023 - Feb 2024</p>
                  
                  <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div>
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Current Status</p>
                      <p className="text-[13px] font-bold text-[#1e2336] flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span> Ongoing Construction (40%)
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <button className="flex items-center gap-2 bg-[#263b75] hover:bg-[#1e2f5d] text-white font-bold py-2.5 px-5 rounded-lg text-xs transition-colors shadow-sm">
                        <Edit2 size={14} /> Update Status
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Card (Edit Mode) */}
              <div className="bg-white rounded-2xl shadow-md border-2 border-[#263b75] p-7 relative">
                <h3 className="text-xl font-black text-[#1e2336]">Area 18 Primary School Desks</h3>
                <p className="text-[13px] text-gray-500 font-medium mt-1 mb-8">Update public progress report</p>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-black text-[#1e2336] uppercase tracking-widest mb-2.5">Phase</label>
                      <div className="relative">
                        <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-[13px] font-bold appearance-none outline-none focus:border-blue-500 shadow-sm text-gray-700">
                          <option>Completed</option>
                          <option>Ongoing</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-4 top-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-[#1e2336] uppercase tracking-widest mb-2.5">Progress %</label>
                      <input type="text" value="100" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-[13px] font-bold outline-none focus:border-blue-500 shadow-sm text-gray-700" readOnly />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-[#1e2336] uppercase tracking-widest mb-2.5">Public Update Message</label>
                    <textarea rows="3" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-[13px] font-medium outline-none focus:border-blue-500 resize-none shadow-sm text-gray-600 leading-relaxed" defaultValue="All 500 desks have been successfully delivered and assembled in the classrooms. Project is now fully complete ahead of schedule."></textarea>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-[#1e2336] uppercase tracking-widest mb-2.5">Proof of Progress (Photo)</label>
                    <div className="w-full bg-[#f8fafc] border border-dashed border-gray-300 rounded-xl p-10 flex justify-center items-center cursor-pointer hover:bg-gray-50 transition-colors">
                      <span className="text-[13px] font-bold text-gray-500">Upload site photos (Required for completion)</span>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end gap-3 border-t border-gray-100 mt-2">
                    <button className="text-gray-600 font-bold text-[13px] px-6 py-2.5 hover:bg-gray-50 rounded-xl transition-colors">Cancel</button>
                    <button className="bg-[#263b75] hover:bg-[#1e2f5d] text-white font-bold text-[13px] px-8 py-2.5 rounded-xl transition-colors shadow-sm">Publish Update</button>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (Span 1) */}
          <div className="bg-[#f8fafc] rounded-2xl p-6 border border-gray-200 h-fit sticky top-24">
            <h2 className="text-lg font-black text-[#1e2336] flex items-center gap-2 mb-2">
              <Users size={20} className="text-[#263b75]" /> Community Voices
            </h2>
            <p className="text-[13px] text-gray-500 font-medium mb-6 leading-relaxed">
              Top needs suggested by citizens in Lilongwe City Centre. Use this to guide your next government funding requests.
            </p>

            <div className="space-y-4">
              
              {/* Need 1 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex gap-4 border-l-4 border-l-[#10b981] relative overflow-hidden">
                <div className="flex flex-col items-center justify-start pt-1 min-w-[40px]">
                  <ChevronUp size={20} className="text-[#10b981]" strokeWidth={3} />
                  <span className="font-black text-[#1e2336] text-[15px] mt-0.5">245</span>
                </div>
                <div>
                  <h3 className="text-[13px] font-black text-[#1e2336] leading-tight mb-2">New Borehole in Area 25 Sector C</h3>
                  <p className="text-[11px] text-gray-500 font-medium leading-snug mb-3">
                    We have been lacking clean water for 6 months since the main pipe broke. A borehole would solve this.
                  </p>
                  <span className="bg-[#eff6ff] text-[#1e40af] text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded">Water & Sanitation</span>
                </div>
              </div>

              {/* Need 2 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex gap-4 border-l-4 border-l-[#10b981] relative overflow-hidden">
                <div className="flex flex-col items-center justify-start pt-1 min-w-[40px]">
                  <ChevronUp size={20} className="text-[#10b981]" strokeWidth={3} />
                  <span className="font-black text-[#1e2336] text-[15px] mt-0.5">182</span>
                </div>
                <div>
                  <h3 className="text-[13px] font-black text-[#1e2336] leading-tight mb-2">Streetlights around City Market</h3>
                  <p className="text-[11px] text-gray-500 font-medium leading-snug mb-3">
                    The market area is very unsafe at night. We need solar streetlights installed along the main road.
                  </p>
                  <span className="bg-[#eef2ff] text-[#3730a3] text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded">Infrastructure</span>
                </div>
              </div>

              {/* Need 3 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex gap-4 border-l-4 border-l-gray-300 relative overflow-hidden">
                <div className="flex flex-col items-center justify-start pt-1 min-w-[40px]">
                  <ChevronUp size={20} className="text-gray-400" strokeWidth={3} />
                  <span className="font-black text-[#1e2336] text-[15px] mt-0.5">94</span>
                </div>
                <div>
                  <h3 className="text-[13px] font-black text-[#1e2336] leading-tight mb-2">More medicine at local clinic</h3>
                  <p className="text-[11px] text-gray-500 font-medium leading-snug mb-3">
                    The clinic structure is fine but we constantly run out of malaria medication.
                  </p>
                  <span className="bg-[#f3e8ff] text-[#6b21a8] text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded">Healthcare</span>
                </div>
              </div>

            </div>

            <button className="w-full mt-6 bg-white hover:bg-gray-50 border border-gray-200 text-[#1e2336] font-bold py-3 rounded-xl text-[12px] transition-colors shadow-sm">
              View All 42 Suggestions
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MPDashboard;
