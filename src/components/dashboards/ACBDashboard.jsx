import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  ShieldAlert, Database, Siren, Cpu, Send, FolderOpen, Filter, Search,
  Activity, Image as ImageIcon, Building, ChevronDown, CheckCircle2,
  AlertTriangle, FileText, Paperclip, Eye, MapPin, Building2, Lock, Unlock
} from 'lucide-react';
import { projectService } from '../../services/projectService';

const ACBDashboard = ({ user }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'active-cases';
  const [reports, setReports] = useState([]);

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = () => {
    setReports(projectService.getAllReports());
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
            onClick={() => setTab('active-cases')}
          >
            <img src="/logo.png" alt="Chonde+ Logo" className="w-10 h-10 object-contain bg-white rounded-xl p-1 shadow-sm group-hover:scale-105 transition-transform" />
            <div className="flex flex-col">
              <span className="text-white font-black text-[17px] leading-none tracking-tight uppercase group-hover:text-red-400 transition-colors">CHONDE+</span>
              <span className="text-red-500 text-[9px] font-black tracking-widest uppercase mt-0.5">ANTI-CORRUPTION BUREAU</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex h-full">
            <button onClick={() => setTab('active-cases')} className={`h-full px-5 font-bold text-sm transition-colors flex items-center border-b-2 ${currentTab === 'active-cases' ? 'text-white border-white' : 'text-gray-400 hover:text-white border-transparent'}`}>
              Active Cases
            </button>
            <button onClick={() => setTab('complaint-database')} className={`h-full px-5 font-bold text-sm transition-colors flex items-center border-b-2 ${currentTab === 'complaint-database' ? 'text-white border-white' : 'text-gray-400 hover:text-white border-transparent'}`}>
              Complaint Database
            </button>
            <button onClick={() => setTab('ai-intelligence')} className={`h-full px-5 font-bold text-sm transition-colors flex items-center border-b-2 ${currentTab === 'ai-intelligence' ? 'text-white border-white' : 'text-gray-400 hover:text-white border-transparent'}`}>
              AI Intelligence
            </button>
          </nav>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-white font-bold text-[13px] leading-tight">Investigator K. Moyo</p>
            <p className="text-gray-400 text-[10px] font-medium mt-0.5">Financial Crimes Unit</p>
          </div>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-red-900/20 bg-white">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow p-6 lg:p-8 max-w-7xl mx-auto w-full">
        {currentTab === 'active-cases' ? (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-black text-gray-900 tracking-tight flex items-center gap-3">
                  <ShieldAlert className="text-red-600" size={32} />
                  Active Case Monitor
                </h1>
                <p className="text-gray-500 font-medium mt-1">Real-time processing of project anomalies and corruption reports.</p>
              </div>
              <div className="bg-red-50 px-6 py-3 rounded-2xl border border-red-100 flex items-center gap-4">
                <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></span>
                <span className="text-xs font-black text-red-900 uppercase tracking-widest">{reports.length} New Reports</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {reports.length > 0 ? (
                reports.map((report) => (
                  <div key={report.id} className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden flex flex-col md:flex-row group hover:shadow-xl transition-all duration-500">
                    <div className="w-full md:w-80 bg-gray-50 p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-100">
                      <div>
                        <div className="flex items-center gap-2 text-red-600 mb-4">
                          <AlertTriangle size={18} />
                          <span className="text-[10px] font-black uppercase tracking-widest">CRITICAL ALERT</span>
                        </div>
                        <h3 className="text-xl font-black text-gray-900 leading-tight mb-2">{report.projectName}</h3>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">{report.sector} • {report.constituency}</p>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between px-4 py-3 bg-white rounded-xl border border-gray-100">
                          <span className="text-[9px] font-black text-gray-400 uppercase">Reporter</span>
                          <div className="flex items-center gap-2">
                            {report.isAnonymous ? <Lock size={12} className="text-blue-500" /> : <Unlock size={12} className="text-emerald-500" />}
                            <span className="text-[10px] font-black text-gray-900 uppercase">{report.citizenName}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-grow p-8">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Incident Narrative</span>
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{new Date(report.createdAt).toLocaleString()}</span>
                      </div>
                      <p className="text-gray-900 font-bold leading-relaxed mb-8 bg-red-50/30 p-6 rounded-2xl border-l-4 border-red-500">
                        "{report.issue}"
                      </p>
                      <div className="flex gap-4">
                        <button className="bg-[#1e2336] text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-red-900 transition-all flex items-center gap-2">
                          <Siren size={16} /> DEPLOY INVESTIGATION
                        </button>
                        <button className="border border-gray-200 text-gray-400 px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-gray-50 transition-all flex items-center gap-2">
                          <Eye size={16} /> VIEW EVIDENCE
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-24 text-center bg-white rounded-[40px] border-2 border-dashed border-gray-100">
                  <FolderOpen size={48} className="mx-auto text-gray-200 mb-4" />
                  <h3 className="text-2xl font-black text-gray-900">No Active Case Reports</h3>
                  <p className="text-gray-400 font-medium mt-2">The national anomaly monitor is clean.</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Activity size={48} className="text-red-100 mb-8" />
            <h2 className="text-3xl font-black text-[#1e2336] uppercase tracking-tight">{currentTab.replace('-', ' ')}</h2>
            <p className="text-gray-500 font-medium mt-2">This unit is currently calibrated for financial oversight.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default ACBDashboard;

