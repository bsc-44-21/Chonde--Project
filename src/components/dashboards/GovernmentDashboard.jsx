import React from 'react';
import { 
  Building2, Activity,
  TrendingUp, AlertTriangle, Settings2,
  MapPin, Brain
} from 'lucide-react';

const GovernmentDashboard = ({ user }) => {
  return (
    <div className="bg-[#f3f4f6] min-h-screen pb-12 font-inter -mt-12 mx-[-1rem] sm:mx-[-1.5rem] lg:mx-[-2rem]">
      {/* Top Header */}
      <header className="bg-[#263b75] border-b border-[#1e2f5d] h-16 w-full flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center gap-8 h-full">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Building2 size={24} className="text-white" />
            <div className="flex flex-col">
              <span className="text-white font-black text-lg leading-none tracking-tight uppercase">CHONDE+</span>
              <span className="text-blue-200 text-[9px] font-black tracking-widest uppercase">Central Oversight</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex h-full">
            <button className="h-full px-4 bg-[#314a8f] text-white font-bold text-sm border-b-2 border-white transition-colors flex items-center">
              National Command
            </button>
            <button className="h-full px-4 text-blue-200 hover:text-white font-bold text-sm border-b-2 border-transparent hover:border-blue-400 transition-colors flex items-center">
              MP Compliance
            </button>
            <button className="h-full px-4 text-blue-200 hover:text-white font-bold text-sm border-b-2 border-transparent hover:border-blue-400 transition-colors flex items-center">
              AI Intelligence
            </button>
            <button className="h-full px-4 text-blue-200 hover:text-white font-bold text-sm border-b-2 border-transparent hover:border-blue-400 transition-colors flex items-center">
              Citizen Needs
            </button>
          </nav>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-white font-bold text-sm leading-tight">Director O. Phiri</p>
            <p className="text-blue-300 text-[10px] font-medium">Ministry of Development</p>
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-blue-400 bg-gray-200">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mt-6 space-y-6">
        
        {/* Top Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Total National Projects</p>
              <p className="text-3xl font-black text-[#1e2336]">1,240</p>
            </div>
            <div className="flex items-center gap-3 mt-4 text-xs font-bold text-gray-500">
               <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#10b981]"></span> 620 Completed</span>
               <span className="text-gray-300">•</span>
               <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#f59e0b]"></span> 620 Ongoing</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-sm border border-red-200 p-5 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute right-[-20px] top-[-10px] opacity-[0.03]">
              <AlertTriangle size={120} className="text-red-500" strokeWidth={1.5} />
            </div>
            <div className="relative z-10">
              <p className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-1">Citizen Reports (30 Days)</p>
              <p className="text-3xl font-black text-[#dc2626]">2,130</p>
            </div>
            <div className="relative z-10 mt-4 flex items-center gap-1 text-xs font-bold text-[#dc2626]">
               <TrendingUp size={14} /> +14% since last month
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-sm border border-orange-200 p-5 flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Unregistered Mandates</p>
              <p className="text-3xl font-black text-[#f59e0b]">18</p>
            </div>
            <div className="mt-4 text-xs font-bold text-[#f59e0b]">
               MPs failing to create projects
            </div>
          </div>

          {/* Card 4 (Dark) */}
          <div className="bg-[#263b75] rounded-xl shadow-sm border border-[#314a8f] p-5 flex flex-col justify-between">
            <div>
              <p className="text-[12px] font-bold text-white mb-2 flex items-center gap-2">
                 <Settings2 size={16} className="text-blue-300" /> AI System Status
              </p>
              <p className="text-xs text-blue-200 leading-relaxed font-medium">
                Processing all incoming reports and summarizing national trends.
              </p>
            </div>
            <button className="mt-4 w-full bg-white hover:bg-gray-50 text-[#263b75] font-bold py-2 rounded-lg text-xs transition-colors">
              Generate Weekly Report
            </button>
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column (Span 2) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* AI Complaint Analysis */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex justify-between items-start">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#263b75] rounded-xl text-white shadow-sm">
                    <Activity size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-[#1e2336]">AI Complaint Analysis</h2>
                    <p className="text-sm text-gray-500 font-medium mt-0.5">Auto-categorization of 2,130 citizen reports across the country</p>
                  </div>
                </div>
                <span className="bg-[#eef2ff] text-[#4f46e5] text-[10px] font-bold px-3 py-1.5 rounded-full border border-indigo-100">
                  Live Analysis
                </span>
              </div>
              
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Progress Bars */}
                <div>
                  <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">Top Issue Categories</h3>
                  <div className="space-y-4">
                    
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-black text-gray-800">
                        <span>Poor Construction Quality</span>
                        <span>35%</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#dc2626]" style={{width: '35%'}}></div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-black text-gray-800">
                        <span>Abandoned / Ghost Projects</span>
                        <span>28%</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#f59e0b]" style={{width: '28%'}}></div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-black text-gray-800">
                        <span>Material Theft</span>
                        <span>18%</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#263b75]" style={{width: '18%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Executive Summary */}
                <div className="bg-[#f8fafc] border border-gray-100 rounded-xl p-5">
                  <h3 className="text-[10px] font-black text-[#475569] uppercase tracking-widest mb-3 flex items-center gap-1.5">
                    <Brain size={14} className="text-[#64748b]" /> AI Executive Summary
                  </h3>
                  <p className="text-xs text-[#334155] leading-relaxed font-medium">
                    There is a critical surge in reports concerning road infrastructure in the Northern Region. Citizens note contractors abandoning sites shortly after receiving initial payments. Additionally, 18 newly mandated education projects have not yet been registered by their respective MPs in the central system.
                  </p>
                </div>
              </div>
            </div>

            {/* MP Accountability & Compliance */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-black text-[#1e2336]">MP Accountability & Compliance</h2>
                <div className="flex gap-2">
                  <button className="bg-white border border-gray-200 text-gray-700 text-xs font-bold px-4 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
                    All Regions
                  </button>
                  <button className="bg-red-50 text-red-600 border border-red-100 text-xs font-bold px-4 py-1.5 rounded-lg hover:bg-red-100 transition-colors">
                    Show Non-Compliant
                  </button>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="py-3 px-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Constituency / MP</th>
                      <th className="py-3 px-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Assigned</th>
                      <th className="py-3 px-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Registered</th>
                      <th className="py-3 px-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Citizen Rating</th>
                      <th className="py-3 px-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-medium">
                    <tr className="border-b border-gray-100 bg-[#fef2f2]">
                      <td className="py-4 px-5">
                        <div className="font-black text-[#1e2336] text-sm">Hon. C. Phiri</div>
                        <div className="text-gray-400 text-xs font-medium mt-0.5">Mzuzu Central</div>
                      </td>
                      <td className="py-4 px-5 font-black text-gray-800">5</td>
                      <td className="py-4 px-5 font-black text-[#dc2626]">2</td>
                      <td className="py-4 px-5 font-black text-[#dc2626]">31%</td>
                      <td className="py-4 px-5">
                        <div className="flex flex-wrap gap-2">
                          <button className="bg-[#f59e0b] hover:bg-orange-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-md transition-colors">Send Warning</button>
                          <button className="bg-[#ef4444] hover:bg-red-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-md transition-colors">Escalate to ACB</button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-[#fef2f2]">
                      <td className="py-4 px-5">
                        <div className="font-black text-[#1e2336] text-sm">Hon. S. Banda</div>
                        <div className="text-gray-400 text-xs font-medium mt-0.5">Salima North</div>
                      </td>
                      <td className="py-4 px-5 font-black text-gray-800">3</td>
                      <td className="py-4 px-5 font-black text-[#dc2626]">0</td>
                      <td className="py-4 px-5 font-black text-[#dc2626]">45%</td>
                      <td className="py-4 px-5">
                        <button className="bg-[#f59e0b] hover:bg-orange-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-md transition-colors">Send Warning</button>
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="py-4 px-5">
                        <div className="font-black text-[#1e2336] text-sm">Hon. E. Kadzamira</div>
                        <div className="text-gray-400 text-xs font-medium mt-0.5">Lilongwe South</div>
                      </td>
                      <td className="py-4 px-5 font-black text-gray-800">4</td>
                      <td className="py-4 px-5 font-black text-[#10b981]">4</td>
                      <td className="py-4 px-5 font-black text-[#10b981]">78%</td>
                      <td className="py-4 px-5">
                        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-[10px] font-bold px-3 py-1.5 rounded-md transition-colors">View Dashboard</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* Right Column (Span 1) */}
          <div className="space-y-6">
            
            {/* National Risk Heatmap */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <h2 className="text-sm font-black text-[#1e2336] mb-4 flex items-center gap-2">
                <MapPin size={16} className="text-[#263b75]" /> National Risk Heatmap
              </h2>
              
              <div className="rounded-lg overflow-hidden bg-gray-200 h-40 mb-5 relative border border-gray-100">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop" alt="Malawi Map" className="w-full h-full object-cover opacity-60 mix-blend-multiply grayscale" />
                {/* Risk Indicators */}
                <div className="absolute top-[35%] left-[45%] w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-[8px] text-white font-bold"></div>
                <div className="absolute top-[65%] left-[30%] w-5 h-5 bg-red-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-[10px] text-white font-bold">!</div>
                <div className="absolute top-[55%] left-[60%] w-3 h-3 bg-orange-400 rounded-full border-[1.5px] border-white shadow-lg"></div>
                <div className="absolute top-[70%] left-[75%] w-2 h-2 bg-emerald-400 rounded-full border border-white shadow-sm"></div>
              </div>

              <div>
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-3">Districts with Most Complaints</p>
                <ul className="space-y-2.5">
                  <li className="flex justify-between items-center text-xs font-bold text-[#1e2336]">
                    <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Mzuzu City</span>
                    <span className="text-red-500">412 Reports</span>
                  </li>
                  <li className="flex justify-between items-center text-xs font-bold text-[#1e2336]">
                    <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Lilongwe Rural</span>
                    <span className="text-red-500">384 Reports</span>
                  </li>
                  <li className="flex justify-between items-center text-xs font-bold text-[#1e2336]">
                    <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span> Blantyre Central</span>
                    <span className="text-orange-500">215 Reports</span>
                  </li>
                </ul>
              </div>

              <button className="w-full mt-5 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-[#1e2336] font-bold py-2.5 rounded-lg text-[11px] transition-colors">
                View Full Geographic Report
              </button>
            </div>

            {/* Sector Oversight */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <h2 className="text-sm font-black text-[#1e2336] mb-4">Sector Oversight</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 border border-gray-100 rounded-lg hover:border-gray-200 transition-colors cursor-pointer bg-gray-50/50">
                   <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded bg-gray-200/50 flex items-center justify-center"></div>
                     <span className="text-xs font-bold text-[#1e2336]">Education</span>
                   </div>
                   <span className="bg-[#fef3c7] text-[#b45309] text-[9px] font-black uppercase tracking-wider px-2 py-1 rounded">12 Delayed</span>
                </div>

                <div className="flex justify-between items-center p-3 border border-gray-100 rounded-lg hover:border-gray-200 transition-colors cursor-pointer bg-gray-50/50">
                   <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded bg-gray-200/50 flex items-center justify-center"></div>
                     <span className="text-xs font-bold text-[#1e2336]">Health</span>
                   </div>
                   <span className="bg-[#fee2e2] text-[#dc2626] border border-red-100 text-[9px] font-black uppercase tracking-wider px-2 py-1 rounded">8 Flagged</span>
                </div>

                <div className="flex justify-between items-center p-3 border border-gray-100 rounded-lg hover:border-gray-200 transition-colors cursor-pointer bg-gray-50/50">
                   <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded bg-gray-200/50 flex items-center justify-center"></div>
                     <span className="text-xs font-bold text-[#1e2336]">Transport & Roads</span>
                   </div>
                   <span className="bg-[#fee2e2] text-[#dc2626] border border-red-100 text-[9px] font-black uppercase tracking-wider px-2 py-1 rounded">High Risk</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernmentDashboard;
