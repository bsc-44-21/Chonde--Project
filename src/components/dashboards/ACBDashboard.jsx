import React from 'react';
import { 
  ShieldAlert, Database, Siren, Cpu, Send, FolderOpen, Filter, Search,
  Activity, Image as ImageIcon, Building, ChevronDown, CheckCircle2,
  AlertTriangle, FileText, Paperclip
} from 'lucide-react';

const ACBDashboard = ({ user }) => {
  return (
    <div className="bg-[#f3f4f6] min-h-screen pb-12 font-inter -mt-12 mx-[-1rem] sm:mx-[-1.5rem] lg:mx-[-2rem]">
      {/* Top Header */}
      <header className="bg-[#0f172a] h-16 w-full flex items-center justify-between px-6 sticky top-0 z-50 border-b-[5px] border-[#dc2626] shadow-sm">
        <div className="flex items-center gap-12 h-full">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#dc2626] flex items-center justify-center">
              <ShieldAlert size={18} className="text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black text-[17px] leading-none tracking-tight uppercase">CHONDE+</span>
              <span className="text-red-500 text-[9px] font-black tracking-widest uppercase mt-0.5">ANTI-CORRUPTION BUREAU</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex h-full gap-2">
            <button className="h-full px-5 bg-[#1e293b] text-white font-bold text-sm transition-colors flex items-center rounded-t-lg mt-2 pt-1">
              Active Cases
            </button>
            <button className="h-full px-5 text-gray-400 hover:text-white font-bold text-sm transition-colors flex items-center mt-2 pt-1">
              Complaint Database
            </button>
            <button className="h-full px-5 text-gray-400 hover:text-white font-bold text-sm transition-colors flex items-center mt-2 pt-1">
              AI Intelligence
            </button>
            <button className="h-full px-5 text-gray-400 hover:text-white font-bold text-sm transition-colors flex items-center mt-2 pt-1">
              Government Directives
            </button>
          </nav>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-white font-bold text-[13px] leading-tight">Investigator K. Moyo</p>
            <p className="text-gray-400 text-[10px] font-medium mt-0.5">Financial Crimes Unit</p>
          </div>
          <div className="w-9 h-9 rounded-full overflow-hidden border border-gray-600 bg-gray-200">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mt-8 space-y-8">
        
        {/* Top Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col justify-center relative overflow-hidden h-[100px]">
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Total Complaints</p>
            <p className="text-[34px] font-black text-[#1e2336] leading-none">8,432</p>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#f1f5f9] flex items-center justify-center">
              <Database size={18} className="text-[#64748b]" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 border-l-[3px] border-l-[#dc2626] p-6 flex flex-col justify-center relative overflow-hidden h-[100px]">
            <p className="text-[10px] font-black text-[#dc2626] uppercase tracking-widest mb-1">Critical Priority Files</p>
            <p className="text-[34px] font-black text-[#dc2626] leading-none">47</p>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#fef2f2] flex items-center justify-center">
              <Siren size={18} className="text-[#dc2626]" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 border-l-[3px] border-l-[#f59e0b] p-6 flex flex-col justify-center relative overflow-hidden h-[100px]">
            <p className="text-[10px] font-black text-[#f59e0b] uppercase tracking-widest mb-1">AI Flagged Patterns</p>
            <p className="text-[34px] font-black text-[#f59e0b] leading-none">12</p>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#fffbeb] flex items-center justify-center">
              <Cpu size={18} className="text-[#f59e0b]" />
            </div>
          </div>

          {/* Card 4 (Dark) */}
          <div className="bg-[#1e293b] rounded-xl shadow-sm border border-[#334155] p-5 flex flex-col justify-between h-[100px]">
            <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Central Gov Engagement</p>
            <button className="w-full bg-[#ef4444] hover:bg-red-600 text-white font-bold py-2 rounded-lg text-[13px] transition-colors flex items-center justify-center gap-2 shadow-sm">
              <Send size={14} /> Issue Urgent Directive
            </button>
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          
          {/* Left Column (Span 2) */}
          <div className="xl:col-span-2 space-y-6">
            
            <div className="flex justify-between items-end mb-2">
              <h2 className="text-[22px] font-black text-[#1e2336] flex items-center gap-2">
                <FolderOpen size={24} className="text-[#dc2626]" /> High-Risk Case Files
              </h2>
              <button className="flex items-center gap-2 bg-white border border-gray-200 text-[#1e2336] text-[11px] font-bold px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                <Filter size={14} /> Sorted by: Severity
              </button>
            </div>
            
            {/* Case Card 1 (CRITICAL) */}
            <div className="bg-white rounded-2xl shadow-sm border border-red-200 overflow-hidden">
              <div className="bg-[#fef2f2] px-6 py-3.5 border-b border-red-100 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <span className="bg-[#dc2626] text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded">Severity: Critical</span>
                  <span className="text-[#dc2626] font-bold text-[13px]">Case #AC-992-MZ</span>
                </div>
                <span className="text-[11px] font-bold text-gray-500">Last updated: 2 hours ago</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-[22px] font-black text-[#1e2336] mb-1.5 leading-tight">Mzuzu Road Rehabilitation</h3>
                <p className="text-[13px] text-gray-500 font-medium mb-6">Contractor: Phiri Construction Ltd • MP: Hon. C. Phiri • Mzuzu Central</p>
                
                {/* AI Summary Block */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 flex flex-col md:flex-row gap-6 relative overflow-hidden shadow-sm">
                  <div className="flex-1">
                    <span className="inline-flex items-center gap-1.5 bg-[#1e3a8a] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 shadow-sm">
                      <Cpu size={12} /> AI Case Summary
                    </span>
                    <div className="flex justify-between items-start mb-3">
                      <p className="text-[12px] font-black text-[#1e2336]">
                        Categorization: <span className="text-[#dc2626]">Ghost Project / Material Theft</span>
                      </p>
                      <span className="bg-gray-100 text-gray-700 text-[10px] font-black px-2.5 py-1 rounded">Based on 142 Complaints</span>
                    </div>
                    <p className="text-[13px] text-gray-600 font-medium leading-relaxed">
                      AI analysis of 142 citizen complaints and 34 uploaded images indicates severe irregularities. Citizens report that equipment was brought to site for one day to secure initial government funding, then immediately removed. No work has occurred in 6 weeks. High probability of coordinated fraud.
                    </p>
                  </div>

                  {/* Evidence Thumbnails */}
                  <div className="w-full md:w-[180px] shrink-0 bg-[#f8fafc] rounded-lg p-3 border border-gray-100 flex flex-col">
                    <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-2 text-center">Top Evidence</p>
                    <div className="space-y-2 flex-1">
                      <div className="relative h-[65px] rounded border border-gray-200 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Evidence" />
                        <span className="absolute bottom-1 right-1 bg-black/70 text-white text-[8px] font-bold px-1.5 py-0.5 rounded">Yesterday</span>
                      </div>
                      <div className="relative h-[65px] rounded border border-gray-200 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1509391366360-fe5bb60213ad?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="Evidence" />
                        <span className="absolute bottom-1 right-1 bg-black/70 text-white text-[8px] font-bold px-1.5 py-0.5 rounded">Oct 12</span>
                      </div>
                    </div>
                    <button className="w-full mt-2 text-[#1e40af] font-bold text-[10px] hover:underline text-center">
                      +32 more photos
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  <button className="bg-[#ef4444] hover:bg-red-600 text-white font-bold text-[13px] px-6 py-2.5 rounded-lg transition-colors shadow-sm flex items-center gap-2">
                    <FileText size={16} /> Draft Central Gov Report
                  </button>
                  <button className="bg-white border border-gray-200 hover:bg-gray-50 text-[#1e2336] font-bold text-[13px] px-6 py-2.5 rounded-lg transition-colors shadow-sm flex items-center gap-2">
                    <Search size={16} /> View All Evidence
                  </button>
                </div>
              </div>
            </div>

            {/* Case Card 2 (HIGH) */}
            <div className="bg-white rounded-2xl shadow-sm border border-amber-200 overflow-hidden">
              <div className="bg-[#fffbeb] px-6 py-3.5 border-b border-amber-100 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <span className="bg-[#f59e0b] text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded">Severity: High</span>
                  <span className="text-[#d97706] font-bold text-[13px]">Case #AC-804-BT</span>
                </div>
                <span className="text-[11px] font-bold text-gray-500">Last updated: 1 day ago</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-[22px] font-black text-[#1e2336] mb-1.5 leading-tight">Blantyre District Hospital Extension</h3>
                <p className="text-[13px] text-gray-500 font-medium mb-6">Contractor: BuildRight Corp • Ministry of Health • Blantyre</p>
                
                {/* AI Summary Block */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
                  <span className="inline-flex items-center gap-1.5 bg-[#1e3a8a] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 shadow-sm">
                    <Cpu size={12} /> AI Case Summary
                  </span>
                  <div className="flex justify-between items-start mb-3">
                    <p className="text-[12px] font-black text-[#1e2336]">
                      Categorization: <span className="text-[#f59e0b]">Sub-standard Materials / Safety Risk</span>
                    </p>
                    <span className="bg-gray-100 text-gray-700 text-[10px] font-black px-2.5 py-1 rounded">Based on 89 Complaints</span>
                  </div>
                  <p className="text-[13px] text-gray-600 font-medium leading-relaxed">
                    Citizens and local nurses report that bricks used for the new extension are crumbling during mild rain. Structural integrity is compromised. Contractor claims full materials were purchased, but photographic evidence suggests cheaper substitutes were used.
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button className="bg-[#ef4444] hover:bg-red-600 text-white font-bold text-[13px] px-6 py-2.5 rounded-lg transition-colors shadow-sm flex items-center gap-2">
                    <FileText size={16} /> Draft Central Gov Report
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (Span 1) */}
          <div className="space-y-6">
            
            {/* AI Pattern Intelligence */}
            <div className="bg-[#0f172a] rounded-2xl border border-[#334155] shadow-md overflow-hidden h-fit">
              <div className="p-6 border-b border-[#1e293b] bg-[#1e293b]/50">
                <h2 className="text-[17px] font-black text-white flex items-center gap-2">
                  <Cpu size={20} className="text-[#3b82f6]" /> AI Pattern Intelligence
                </h2>
              </div>

              <div className="p-6 space-y-7">
                
                {/* Pattern 1 */}
                <div>
                  <h3 className="text-[11px] font-black text-[#f59e0b] uppercase tracking-widest flex items-center gap-2 mb-2.5">
                    <AlertTriangle size={14} /> Contractor Flag
                  </h3>
                  <p className="text-[13px] text-gray-300 font-medium leading-relaxed mb-3">
                    AI has detected that <span className="text-white font-bold">Phiri Construction Ltd</span> is associated with 4 delayed projects across 3 different districts. Total combined complaints: 312.
                  </p>
                  <button className="text-[#3b82f6] text-[11px] font-bold hover:underline">
                    View Contractor Dossier →
                  </button>
                </div>

                <div className="w-full h-px bg-[#1e293b]"></div>

                {/* Pattern 2 */}
                <div>
                  <h3 className="text-[11px] font-black text-[#ef4444] uppercase tracking-widest flex items-center gap-2 mb-2.5">
                    <AlertTriangle size={14} /> MP Anomaly
                  </h3>
                  <p className="text-[13px] text-gray-300 font-medium leading-relaxed">
                    Constituency <span className="text-white font-bold">Mzuzu Central</span> has the highest ratio of completed project claims vs. citizen dispute reports (8:1 dispute ratio).
                  </p>
                </div>

              </div>
            </div>

            {/* Engage Central Government */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-7 sticky top-24">
              <h2 className="text-[17px] font-black text-[#1e2336] flex items-center gap-2 mb-2">
                <Building size={20} className="text-[#1e293b]" /> Engage Central Government
              </h2>
              <p className="text-[11px] text-gray-500 font-medium mb-6 leading-relaxed">
                Use this portal to send official findings, halt project funding, or request ministerial intervention.
              </p>

              <form className="space-y-5">
                <div>
                  <label className="block text-[10px] font-black text-[#1e2336] uppercase tracking-widest mb-2.5">Action Type</label>
                  <div className="relative">
                    <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-[13px] font-bold appearance-none outline-none focus:border-blue-500 shadow-sm text-gray-700">
                      <option>Request Funding Freeze</option>
                      <option>Send Official Warning</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-3.5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-[#1e2336] uppercase tracking-widest mb-2.5">Target Ministry</label>
                  <div className="relative">
                    <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-[13px] font-bold appearance-none outline-none focus:border-blue-500 shadow-sm text-gray-700">
                      <option>Ministry of Finance</option>
                      <option>Ministry of Health</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-3.5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-[#1e2336] uppercase tracking-widest mb-2.5">Attach Case File</label>
                  <div className="w-full bg-[#f8fafc] border border-gray-200 rounded-xl px-4 py-3.5 text-[12px] font-bold text-[#1e40af] flex items-center gap-2 shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
                    <Paperclip size={14} /> Case #AC-992-MZ (Mzuzu Road)
                  </div>
                </div>

                <button type="button" className="w-full bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold py-4 rounded-xl text-[13px] transition-colors shadow-sm flex items-center justify-center gap-2 mt-4">
                  <Send size={16} /> Transmit Official Directive
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ACBDashboard;
