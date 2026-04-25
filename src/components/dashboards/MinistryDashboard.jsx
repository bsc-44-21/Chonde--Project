import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Heart, Activity, FileText, Clock, AlertTriangle, ShieldAlert,
  MapPin, Bell, Paperclip, ChevronDown, CheckCircle2, MessageSquare,
  Building2, Calendar, DollarSign, Filter, Search, Eye
} from 'lucide-react';
import { projectService } from '../../services/projectService';

const MinistryDashboard = ({ user }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'sector-dashboard';
  const [projects, setProjects] = useState([]);
  
  // Default to Health for demo, but can be dynamic based on user role
  const ministryName = user?.ministry || "MINISTRY OF HEALTH";
  const sectorName = user?.sector || "Health";

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = () => {
    const data = projectService.getProjectsBySector(sectorName);
    setProjects(data);
  };

  const setTab = (tab) => {
    setSearchParams({ tab });
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen flex flex-col font-inter">
      {/* Top Header */}
      <header className="bg-[#1e2336] border-b border-[#2a3044] h-20 w-full flex items-center justify-between px-6 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-12 h-full">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setTab('sector-dashboard')}
          >
            <img src="/logo.png" alt="Chonde+ Logo" className="w-10 h-10 object-contain bg-white rounded-xl p-1 shadow-sm group-hover:scale-105 transition-transform" />
            <div className="flex flex-col">
              <span className="text-white font-black text-[17px] leading-none tracking-tight uppercase group-hover:text-blue-400 transition-colors">CHONDE+</span>
              <span className="text-blue-200 text-[9px] font-black tracking-widest uppercase mt-0.5">{ministryName}</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex h-full">
            <button onClick={() => setTab('sector-dashboard')} className={`h-full px-5 font-bold text-sm transition-colors flex items-center border-b-2 ${currentTab === 'sector-dashboard' ? 'text-white border-white' : 'text-blue-200 hover:text-white border-transparent'}`}>
              Sector Dashboard
            </button>
            <button onClick={() => setTab('mp-compliance')} className={`h-full px-5 font-bold text-sm transition-colors flex items-center border-b-2 ${currentTab === 'mp-compliance' ? 'text-white border-white' : 'text-blue-200 hover:text-white border-transparent'}`}>
              MP Compliance
            </button>
            <button onClick={() => setTab('sector-projects')} className={`h-full px-5 font-bold text-sm transition-colors flex items-center border-b-2 ${currentTab === 'sector-projects' ? 'text-white border-white' : 'text-blue-200 hover:text-white border-transparent'}`}>
              Sectoral Projects
            </button>
          </nav>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-white font-bold text-[13px] leading-tight">Dr. A. Nkhata</p>
            <p className="text-blue-300 text-[10px] font-medium mt-0.5">Director of Infrastructure</p>
          </div>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#2a3044] bg-white shadow-sm">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow p-6 lg:p-8 max-w-7xl mx-auto w-full">
        {currentTab === 'sector-dashboard' || currentTab === 'sector-projects' ? (
          <div className="space-y-8">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Total Projects</p>
                <p className="text-3xl font-black text-gray-900">{projects.length}</p>
                <div className="mt-4 flex items-center gap-1 text-emerald-600 text-xs font-bold">
                  <Activity size={14} /> 100% System Visibility
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Sector Alerts</p>
                <p className="text-3xl font-black text-red-600">
                  {projectService.getAllReports().filter(r => r.sector === sectorName).length}
                </p>
                <div className="mt-4 flex items-center gap-1 text-red-400 text-xs font-bold">
                  <AlertTriangle size={14} /> Attention Required
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Oversight Metrics</p>
                  <Filter size={14} className="text-gray-400" />
                </div>
                <div className="flex gap-2">
                  {['Planning', 'In Progress', 'Completed'].map(status => (
                    <button key={status} className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-100 text-[10px] font-black uppercase text-gray-600 hover:bg-gray-100 transition-all">
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Sector Projects */}
              <div className="lg:col-span-2 bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-50 bg-gray-50/30 flex items-center justify-between">
                  <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight">Sectoral Asset Registry</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-gray-50/50">
                        <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Project Name</th>
                        <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Location</th>
                        <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
                        <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {projects.length > 0 ? (
                        projects.map(project => (
                          <tr key={project.id} className="hover:bg-gray-50/50 transition-colors">
                            <td className="px-6 py-4">
                              <span className="font-black text-gray-900 text-sm tracking-tight">{project.name}</span>
                            </td>
                            <td className="px-6 py-4 text-xs font-bold text-gray-500">{project.village}, {project.constituency}</td>
                            <td className="px-6 py-4">
                              <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[9px] font-black uppercase rounded-full">
                                {project.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <button className="w-8 h-8 bg-[#1e2336] text-white rounded-lg flex items-center justify-center">
                                <Eye size={16} />
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr><td colSpan="4" className="px-6 py-10 text-center text-gray-400 font-bold">No active assets found.</td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Sector Alerts */}
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight">Sectoral Alerts</h3>
                </div>
                <div className="space-y-4">
                  {projectService.getAllReports().filter(r => r.sector === sectorName).length > 0 ? (
                    projectService.getAllReports().filter(r => r.sector === sectorName).map(r => (
                      <div key={r.id} className="bg-white p-6 rounded-3xl border-2 border-red-50 shadow-sm">
                        <div className="flex items-center gap-2 mb-3">
                          <AlertTriangle size={16} className="text-red-600" />
                          <span className="text-[10px] font-black text-gray-400 uppercase">{r.projectName}</span>
                        </div>
                        <p className="text-gray-900 font-bold text-sm leading-relaxed mb-4 italic">"{r.issue}"</p>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                          <span className="text-[9px] font-black text-red-500 uppercase">Critical Anomaly</span>
                          <button className="text-blue-600 font-black text-[10px] uppercase">Review</button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="bg-gray-50 rounded-3xl p-10 text-center text-gray-400 font-bold">No alerts for this sector.</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-200">
              <Activity size={40} />
            </div>
            <h2 className="text-2xl font-black text-[#1e2336] uppercase tracking-tight">{currentTab.replace('-', ' ')}</h2>
            <p className="text-gray-500 font-medium mt-2 max-w-md">This monitor module is currently being optimized for ministry oversight.</p>
          </div>
        )}

      </main>
    </div>
  );
};

export default MinistryDashboard;

