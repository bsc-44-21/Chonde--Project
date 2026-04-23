import React from 'react';
import { 
  Heart, Activity, FileText, Clock, AlertTriangle, ShieldAlert,
  MapPin, Bell, Paperclip, ChevronDown, CheckCircle2, MessageSquare
} from 'lucide-react';

const MinistryDashboard = ({ user }) => {
  return (
    <div className="bg-[#f8fafc] min-h-screen pb-12 font-inter -mt-12 mx-[-1rem] sm:mx-[-1.5rem] lg:mx-[-2rem]">
      {/* Top Header */}
      <header className="bg-[#263b75] h-16 w-full flex items-center justify-between px-6 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-12 h-full">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <Heart size={18} className="text-white fill-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black text-[17px] leading-none tracking-tight uppercase">CHONDE+</span>
              <span className="text-white text-[9px] font-black tracking-widest uppercase mt-0.5">MINISTRY OF HEALTH</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex h-full gap-2">
            <button className="h-full px-5 bg-[#314a8f] text-white font-bold text-sm transition-colors flex items-center rounded-t-lg mt-2 pt-1 shadow-sm">
              Sector Dashboard
            </button>
            <button className="h-full px-5 text-blue-200 hover:text-white font-bold text-sm transition-colors flex items-center mt-2 pt-1">
              MP Compliance
            </button>
            <button className="h-full px-5 text-blue-200 hover:text-white font-bold text-sm transition-colors flex items-center mt-2 pt-1">
              Health Projects
            </button>
            <button className="h-full px-5 text-blue-200 hover:text-white font-bold text-sm transition-colors flex items-center mt-2 pt-1">
              Citizen Reports
            </button>
          </nav>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-white font-bold text-[13px] leading-tight">Dr. A. Nkhata</p>
            <p className="text-blue-300 text-[10px] font-medium mt-0.5">Director of Infrastructure</p>
          </div>
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#314a8f] bg-gray-200 shadow-sm">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mt-8 space-y-8">
        
        {/* Top Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col justify-between">
            <div className="flex items-center gap-2 text-gray-500 mb-4">
              <Activity size={16} />
              <p className="text-[10px] font-black uppercase tracking-widest">Active Health Projects</p>
            </div>
            <div>
              <p className="text-4xl font-black text-[#1e2336] leading-none mb-3">142</p>
              <p className="text-[11px] font-bold text-[#10b981]">Across 28 Districts</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-sm border border-amber-200 p-6 flex flex-col justify-between">
            <div className="flex items-center gap-2 text-amber-500 mb-4">
              <FileText size={16} />
              <p className="text-[10px] font-black uppercase tracking-widest">Unregistered Mandates</p>
            </div>
            <div>
              <p className="text-4xl font-black text-amber-500 leading-none mb-3">4</p>
              <p className="text-[11px] font-bold text-gray-500">MPs failing to create projects</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col justify-between">
            <div className="flex items-center gap-2 text-gray-500 mb-4">
              <Clock size={16} />
              <p className="text-[10px] font-black uppercase tracking-widest">Delayed Progress</p>
            </div>
            <div>
              <p className="text-4xl font-black text-[#1e2336] leading-none mb-3">18</p>
              <p className="text-[11px] font-bold text-[#dc2626]">Past expected completion date</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-sm border border-red-200 p-6 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute right-[-20px] top-10 opacity-[0.03]">
              <AlertTriangle size={100} className="text-red-500" strokeWidth={1.5} />
            </div>
            <div className="relative z-10 flex items-center gap-2 text-[#dc2626] mb-4">
              <MessageSquare size={16} />
              <p className="text-[10px] font-black uppercase tracking-widest">Sector Complaints</p>
            </div>
            <div className="relative z-10">
              <p className="text-4xl font-black text-[#dc2626] leading-none mb-3">215</p>
              <p className="text-[11px] font-bold text-[#dc2626]">8 High Severity Issues</p>
            </div>
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          
          {/* Left Column (Span 2) */}
          <div className="xl:col-span-2 space-y-8">
            
            {/* Pending MP Registrations */}
            <div className="bg-[#fffbeb] rounded-2xl shadow-sm border border-[#fde68a] overflow-hidden">
              <div className="p-5 border-b border-[#fde68a] flex justify-between items-center bg-[#fef3c7]">
                <div className="flex items-center gap-3">
                  <FileText size={20} className="text-amber-600" />
                  <h2 className="text-[17px] font-black text-amber-900">Pending MP Registrations (Government Mandates)</h2>
                </div>
                <span className="bg-white text-amber-600 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded border border-amber-200 shadow-sm">
                  Action Required
                </span>
              </div>
              
              <div className="p-6">
                <p className="text-[13px] text-amber-900/80 font-medium mb-6 leading-relaxed">
                  The following government-funded health projects have not been registered by their respective MPs. The public cannot track these projects until they are created in the system.
                </p>

                <div className="space-y-4">
                  {/* Mandate Card 1 */}
                  <div className="bg-white rounded-xl shadow-sm border border-[#fde68a] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-[15px] font-black text-[#1e2336] mb-1">Kasungu Rural Maternity Wing</h3>
                      <p className="text-[11px] font-bold text-gray-500">Assigned: 2 months ago • MP: Hon. Phiri (Kasungu East)</p>
                    </div>
                    <button className="bg-[#f59e0b] hover:bg-amber-600 text-white font-bold text-[12px] px-5 py-2.5 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2">
                      <Bell size={14} /> Send Official Warning
                    </button>
                  </div>

                  {/* Mandate Card 2 */}
                  <div className="bg-white rounded-xl shadow-sm border border-red-200 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-[15px] font-black text-[#1e2336] mb-1">Nkhotakota District Hospital Beds</h3>
                      <p className="text-[11px] font-bold text-[#dc2626]">Assigned: 4 months ago • MP: Hon. Banda (Nkhotakota South)</p>
                    </div>
                    <button className="bg-[#dc2626] hover:bg-red-700 text-white font-bold text-[12px] px-5 py-2.5 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2">
                      <AlertTriangle size={14} /> Escalate to Central Gov
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Health Infrastructure Tracker */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-black text-[#1e2336] flex items-center gap-2">
                  <MapPin size={22} className="text-[#263b75]" /> Health Infrastructure Tracker
                </h2>
                <div className="flex gap-3">
                  <div className="relative">
                    <select className="bg-white border border-gray-200 text-gray-700 text-[11px] font-bold pl-3 pr-8 py-2 rounded-lg appearance-none shadow-sm outline-none">
                      <option>District: All</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" />
                  </div>
                  <div className="relative">
                    <select className="bg-white border border-gray-200 text-gray-700 text-[11px] font-bold pl-3 pr-8 py-2 rounded-lg appearance-none shadow-sm outline-none">
                      <option>Status: Delayed & Flagged</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Project Card 1 */}
                <div className="bg-white rounded-2xl shadow-sm border border-red-200 p-5 flex flex-col sm:flex-row gap-6">
                  <div className="w-full sm:w-[220px] h-[140px] rounded-xl overflow-hidden relative shrink-0">
                    <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=400&auto=format&fit=crop" alt="Construction" className="w-full h-full object-cover" />
                    <span className="absolute top-2 left-2 bg-[#dc2626] text-white text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded shadow-sm flex items-center gap-1">
                      <AlertTriangle size={10} /> Flagged
                    </span>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-[17px] font-black text-[#1e2336] leading-tight">Blantyre District Hospital Extension</h3>
                      <div className="text-right shrink-0 ml-4">
                        <span className="text-[#dc2626] font-black text-[13px] block leading-none mb-1">89 Complaints</span>
                        <span className="text-[9px] text-red-500/80 font-black uppercase tracking-widest">Structural Risk</span>
                      </div>
                    </div>
                    
                    <p className="text-[11px] text-gray-500 font-medium mb-auto">
                      District: Blantyre • Contractor: BuildRight Corp • MP: Hon. Chilima
                    </p>
                    
                    <div className="mt-4 border-t border-gray-100 pt-4 flex items-center justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Progress (Stalled)</span>
                          <span className="text-[11px] font-black text-gray-700">30%</span>
                        </div>
                        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-[#dc2626]" style={{width: '30%'}}></div>
                        </div>
                      </div>
                      <button className="bg-white border border-gray-200 hover:bg-gray-50 text-[#1e2336] font-bold text-[11px] px-4 py-2 rounded-lg transition-colors shadow-sm shrink-0">
                        View Dashboard
                      </button>
                    </div>
                  </div>
                </div>

                {/* Project Card 2 */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 flex flex-col sm:flex-row gap-6">
                  <div className="w-full sm:w-[220px] h-[140px] rounded-xl overflow-hidden relative shrink-0">
                    <img src="https://images.unsplash.com/photo-1509391366360-fe5bb60213ad?q=80&w=400&auto=format&fit=crop" alt="Empty Site" className="w-full h-full object-cover grayscale opacity-80" />
                    <span className="absolute top-2 left-2 bg-[#f59e0b] text-white text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded shadow-sm flex items-center gap-1">
                      <Clock size={10} /> Delayed
                    </span>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-[17px] font-black text-[#1e2336] leading-tight">Salima Rural Health Post</h3>
                      <div className="text-right shrink-0 ml-4">
                        <span className="text-[#f59e0b] font-black text-[13px] block leading-none mb-1">12 Complaints</span>
                        <span className="text-[9px] text-amber-500/80 font-black uppercase tracking-widest">No Activity</span>
                      </div>
                    </div>
                    
                    <p className="text-[11px] text-gray-500 font-medium mb-auto">
                      District: Salima • Contractor: N/A • MP: Hon. Mwale
                    </p>
                    
                    <div className="mt-4 border-t border-gray-100 pt-4 flex items-center justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Progress (6 Months Late)</span>
                          <span className="text-[11px] font-black text-gray-700">0%</span>
                        </div>
                        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-[#f59e0b]" style={{width: '3%'}}></div>
                        </div>
                      </div>
                      <button className="bg-white border border-gray-200 hover:bg-gray-50 text-[#1e2336] font-bold text-[11px] px-4 py-2 rounded-lg transition-colors shadow-sm shrink-0">
                        View Dashboard
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button className="text-[#263b75] font-black text-[13px] hover:underline">
                  Load More Health Projects
                </button>
              </div>
            </div>

          </div>

          {/* Right Column (Span 1) */}
          <div className="bg-white rounded-2xl border border-red-100 shadow-sm overflow-hidden h-fit sticky top-24">
            <div className="p-6 bg-[#fff5f5] border-b border-red-100">
              <h2 className="text-[17px] font-black text-[#dc2626] flex items-center gap-2 mb-1.5">
                <ShieldAlert size={20} /> Sector Complaints
              </h2>
              <p className="text-[11px] text-gray-600 font-medium">
                Citizen reports specific to Ministry of Health projects.
              </p>
            </div>

            <div className="p-6 space-y-8">
              
              {/* Complaint 1 */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-red-50 text-red-600 border border-red-100 text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded">Material Quality</span>
                  <span className="text-[10px] font-bold text-[#263b75]">2 hours ago</span>
                </div>
                <h3 className="text-[14px] font-black text-[#1e2336] mb-2 leading-tight">Crumbling Bricks at Blantyre Hospital</h3>
                <p className="text-[12px] text-gray-600 font-medium leading-relaxed mb-3">
                  "The contractor is using substandard bricks for the new maternity wing. They dissolve in the rain. This is a massive safety hazard for future patients."
                </p>
                <button className="flex items-center gap-1.5 text-[#263b75] text-[11px] font-bold hover:underline mb-4">
                  <Paperclip size={14} /> View 4 attached photos
                </button>
                
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-3">Ministry Action Required:</p>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold text-[11px] py-2 rounded-lg transition-colors shadow-sm">
                      Halt Funding
                    </button>
                    <button className="flex-1 bg-[#ef4444] hover:bg-red-600 text-white font-bold text-[11px] py-2 rounded-lg transition-colors shadow-sm">
                      Notify ACB
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-gray-100"></div>

              {/* Complaint 2 */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-amber-50 text-amber-600 border border-amber-100 text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded">Abandoned Site</span>
                  <span className="text-[10px] font-bold text-[#263b75]">Yesterday</span>
                </div>
                <h3 className="text-[14px] font-black text-[#1e2336] mb-2 leading-tight">No workers at Salima Post</h3>
                <p className="text-[12px] text-gray-600 font-medium leading-relaxed mb-4">
                  "The MP announced this clinic 6 months ago. The land was cleared but no materials or workers have arrived since January."
                </p>
                
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-3">Ministry Action Required:</p>
                  <button className="w-full bg-[#f59e0b] hover:bg-orange-600 text-white font-bold text-[11px] py-2 rounded-lg transition-colors shadow-sm">
                    Summon MP
                  </button>
                </div>
              </div>

            </div>

            <div className="border-t border-gray-100 p-4 bg-gray-50">
              <button className="w-full text-center text-[#263b75] font-bold text-[11px] hover:underline">
                View All 215 Sector Complaints
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MinistryDashboard;
