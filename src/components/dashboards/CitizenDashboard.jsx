import React from 'react';
import { 
  ShieldCheck, FolderOpen, AlertTriangle, CheckCircle2,
  Lightbulb, Filter, Flag, MessageSquare, Plus,
  Clock, ShieldAlert, Send, Activity
} from 'lucide-react';

const CitizenDashboard = ({ user }) => {
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
        <div className="bg-[#f8fafc] rounded-2xl border border-blue-100 shadow-sm p-6 mb-8 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#1e3a8a]"></div>
          <div className="w-14 h-14 rounded-full bg-[#1e3a8a] flex items-center justify-center shrink-0 shadow-md text-white ml-2">
            <Lightbulb size={24} />
          </div>
          <div className="flex-1 w-full md:w-auto">
            <h2 className="text-[17px] font-black text-[#1e2336] mb-1">Submit a Community Need</h2>
            <p className="text-[13px] text-gray-500 font-medium mb-3">What does Lilongwe City Centre need most? Your suggestions guide future government funding and MP priorities.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input type="text" placeholder="E.g., We need a new borehole in Area 25..." className="flex-1 bg-white border border-gray-200 rounded-xl px-5 py-3.5 text-[13px] font-medium outline-none focus:border-blue-500 shadow-sm text-gray-700" />
              <button className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-bold py-3.5 px-8 rounded-xl text-[13px] transition-colors shadow-sm whitespace-nowrap">
                Submit Need
              </button>
            </div>
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column (Span 2) */}
          <div className="lg:col-span-2 space-y-6">
            
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-[20px] font-black text-[#1e2336]">Active Projects Near You</h2>
              <button className="flex items-center gap-2 bg-white border border-gray-200 text-[#1e2336] text-[11px] font-bold px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                <Filter size={14} /> Filter
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Project Card 1 */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
                <div className="h-[180px] relative">
                  <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop" alt="Construction" className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-[#fef3c7] text-[#b45309] text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded shadow-sm flex items-center gap-1.5 border border-[#fde68a]">
                    <Activity size={12} /> Ongoing
                  </span>
                </div>
                
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-[17px] font-black text-[#1e2336] mb-4 leading-tight">Area 25 Health Center Renovation</h3>
                  
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Progress</span>
                      <span className="text-[11px] font-black text-gray-700">40%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#1e3a8a]" style={{width: '40%'}}></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-end border-t border-gray-100 pt-4 mb-6">
                    <div>
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Timeline</p>
                      <p className="text-[12px] font-bold text-[#1e2336]">Sep 2023 - Feb 2024</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Citizen Reports</p>
                      <p className="text-[12px] font-bold text-[#1e2336]">None</p>
                    </div>
                  </div>

                  <button className="mt-auto w-full bg-[#ef4444] hover:bg-red-600 text-white font-bold py-3.5 rounded-xl text-[13px] transition-colors shadow-sm flex items-center justify-center gap-2">
                    <Flag size={16} /> REPORT ISSUE
                  </button>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
                <div className="h-[180px] relative">
                  <img src="https://images.unsplash.com/photo-1509391366360-fe5bb60213ad?q=80&w=600&auto=format&fit=crop" alt="Empty Site" className="w-full h-full object-cover grayscale opacity-80" />
                  <span className="absolute top-3 left-3 bg-[#fef2f2] text-[#dc2626] text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded shadow-sm flex items-center gap-1.5 border border-red-100">
                    <Clock size={12} /> Delayed
                  </span>
                </div>
                
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-[17px] font-black text-[#1e2336] mb-4 leading-tight">Lilongwe Water Pipe Expansion</h3>
                  
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Progress</span>
                      <span className="text-[11px] font-black text-gray-700">15%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#dc2626]" style={{width: '15%'}}></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-end border-t border-gray-100 pt-4 mb-6">
                    <div>
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Timeline</p>
                      <p className="text-[12px] font-bold text-[#1e2336]">Jan 2023 - Dec 2023</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Citizen Reports</p>
                      <p className="text-[12px] font-bold text-[#dc2626] flex items-center justify-end gap-1"><MessageSquare size={12} /> 14 complaints</p>
                    </div>
                  </div>

                  <button className="mt-auto w-full bg-[#ef4444] hover:bg-red-600 text-white font-bold py-3.5 rounded-xl text-[13px] transition-colors shadow-sm flex items-center justify-center gap-2">
                    <Flag size={16} /> REPORT ISSUE
                  </button>
                </div>
              </div>

              {/* Project Card 3 */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
                <div className="h-[180px] relative">
                  <img src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=600&auto=format&fit=crop" alt="Market" className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-[#ecfdf5] text-[#10b981] text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded shadow-sm flex items-center gap-1.5 border border-[#a7f3d0]">
                     Completed
                  </span>
                </div>
                
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-[17px] font-black text-[#1e2336] mb-4 leading-tight">City Centre Market Solar Lights</h3>
                  
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Progress</span>
                      <span className="text-[11px] font-black text-gray-700">100%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#10b981]" style={{width: '100%'}}></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-end border-t border-gray-100 pt-4 mb-6">
                    <div>
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Timeline</p>
                      <p className="text-[12px] font-bold text-[#1e2336]">Jun 2023 - Aug 2023</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Citizen Reports</p>
                      <p className="text-[12px] font-bold text-[#1e2336]">1 complaints</p>
                    </div>
                  </div>

                  <button className="mt-auto w-full bg-[#ef4444] hover:bg-red-600 text-white font-bold py-3.5 rounded-xl text-[13px] transition-colors shadow-sm flex items-center justify-center gap-2">
                    <Flag size={16} /> REPORT ISSUE
                  </button>
                </div>
              </div>

              {/* Project Card 4 */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
                <div className="h-[180px] relative">
                  <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop" alt="School" className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-[#fef3c7] text-[#b45309] text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded shadow-sm flex items-center gap-1.5 border border-[#fde68a]">
                    <Activity size={12} /> Ongoing
                  </span>
                </div>
                
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-[17px] font-black text-[#1e2336] mb-4 leading-tight">Area 18 Primary School Desks</h3>
                  
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Progress</span>
                      <span className="text-[11px] font-black text-gray-700">75%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#1e3a8a]" style={{width: '75%'}}></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-end border-t border-gray-100 pt-4 mb-6">
                    <div>
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Timeline</p>
                      <p className="text-[12px] font-bold text-[#1e2336]">Nov 2023 - Dec 2023</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Citizen Reports</p>
                      <p className="text-[12px] font-bold text-[#1e2336]">2 complaints</p>
                    </div>
                  </div>

                  <button className="mt-auto w-full bg-[#ef4444] hover:bg-red-600 text-white font-bold py-3.5 rounded-xl text-[13px] transition-colors shadow-sm flex items-center justify-center gap-2">
                    <Flag size={16} /> REPORT ISSUE
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column (Span 1) - Report an Issue Sidebar */}
          <div className="relative">
            <div className="bg-white rounded-2xl border-[3px] border-red-500 shadow-xl overflow-hidden h-fit sticky top-24">
              
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
                    <span className="text-[13px] font-black text-[#1e2336]">Lilongwe Water Pipe Expansion</span>
                    <button className="text-[#1e3a8a] text-[11px] font-bold hover:underline">Change</button>
                  </div>
                </div>

                {/* Section 2 */}
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2.5">2. Describe the Problem</p>
                  <div className="relative">
                    <textarea rows="4" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-[13px] font-medium outline-none focus:border-red-500 shadow-sm text-gray-700 leading-relaxed resize-none" defaultValue="The contractor dug trenches two months ago and left. The pipes are just sitting there and the trenches are dangerous for children."></textarea>
                    <div className="absolute bottom-3 right-4 text-[9px] font-bold text-gray-400">124 / 500 characters</div>
                  </div>
                </div>

                {/* Section 3 */}
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2.5">3. Upload Evidence (Required)</p>
                  <div className="flex gap-3 mb-3">
                    <div className="w-[60px] h-[60px] rounded-lg border border-gray-200 overflow-hidden relative shadow-sm">
                      <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Upload" />
                      <button className="absolute top-1 right-1 w-4 h-4 bg-black/60 rounded-full flex items-center justify-center text-white hover:bg-black transition-colors">
                        <span className="text-[10px]">×</span>
                      </button>
                    </div>
                    <button className="w-[60px] h-[60px] rounded-lg border border-dashed border-gray-300 bg-[#f8fafc] flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-colors">
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
