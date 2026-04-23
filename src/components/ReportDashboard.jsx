import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useAuth } from '../context/AuthContext';
import { 
  PlusCircle, MessageSquare, MapPin, 
  ArrowRight, ShieldCheck, Info, X, Camera, Upload, CheckCircle2 
} from 'lucide-react';
import { malawiData } from '../data/malawiData';

const ReportDashboard = () => {
  const { user } = useAuth();
  const [suggestion, setSuggestion] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Report Form State
  const [showReportForm, setShowReportForm] = useState(false);
  const [reportData, setReportData] = useState({ project: '', description: '', image: null });
  const [reportSuccess, setReportSuccess] = useState(false);
  const fileInputRef = React.useRef(null);

  // Mock projects for the user's specific area
  const localProjects = [
    { id: 101, name: 'Area 18 Bridge Repair', status: 'Ongoing', budget: 'MWK 4.2B' },
    { id: 102, name: 'Chinsapo Market Expansion', status: 'Delayed', budget: 'MWK 8.5B' },
    { id: 103, name: 'City Center Street Lighting', status: 'Completed', budget: 'MWK 1.5B' },
    { id: 104, name: 'Bunda Road Drainage', status: 'Ongoing', budget: 'MWK 2.1B' },
    { id: 105, name: 'Kawale Health Center Clinic', status: 'Not Started', budget: 'MWK 3.8B' }
  ];

  // Calculate local stats
  const stats = {
    total: localProjects.length,
    completed: localProjects.filter(p => p.status === 'Completed').length,
    ongoing: localProjects.filter(p => p.status === 'Ongoing' || p.status === 'Delayed').length,
    notStarted: localProjects.filter(p => p.status === 'Not Started').length
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setReportData({ ...reportData, image: e.target.files[0].name });
    }
  };

  const handleSuggestionSubmit = (e) => {
    e.preventDefault();
    if (suggestion.trim()) {
      setShowSuccess(true);
      setSuggestion('');
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  const handleReportSubmit = (e) => {
    e.preventDefault();
    if (reportData.project && reportData.description) {
      setReportSuccess(true);
      setTimeout(() => {
        setReportSuccess(false);
        setShowReportForm(false);
        setReportData({ project: '', description: '', image: null });
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-bg flex flex-col font-inter">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {/* User Greeting */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-status-completed/10 rounded-2xl flex items-center justify-center text-status-completed">
              <ShieldCheck size={40} />
            </div>
            <div>
              <h1 className="text-3xl font-black text-black tracking-tight">Welcome back, {user?.name || 'Citizen'}</h1>
              <p className="text-gray-500 font-bold flex items-center gap-2 mt-1">
                <MapPin size={16} className="text-primary-light" />
                Monitoring: {user?.constituency}, {user?.district}
              </p>
            </div>
          </div>
          <button 
            onClick={() => setShowReportForm(true)}
            className="bg-black hover:bg-status-ongoing text-white px-8 py-4 rounded-2xl font-black transition-all flex items-center gap-3 shadow-xl transform active:scale-95"
          >
            <PlusCircle size={22} />
            REPORT A NEW PROJECT
          </button>
        </div>

        {/* Local Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Total in Area</span>
            <span className="text-3xl font-black text-black">{stats.total}</span>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-emerald-100 shadow-sm flex flex-col items-center text-center border-l-4 border-l-status-completed">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Completed</span>
            <span className="text-3xl font-black text-status-completed">{stats.completed}</span>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-blue-100 shadow-sm flex flex-col items-center text-center border-l-4 border-l-status-ongoing">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Ongoing</span>
            <span className="text-3xl font-black text-status-ongoing">{stats.ongoing}</span>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center border-l-4 border-l-gray-300">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Not Started</span>
            <span className="text-3xl font-black text-gray-500">{stats.notStarted}</span>
          </div>
        </div>

        {/* PROJECT REPORT MODAL */}
        {showReportForm && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-black/70 backdrop-blur-md animate-in fade-in duration-300"
              onClick={() => !reportSuccess && setShowReportForm(false)}
            ></div>
            
            <div className="relative bg-white w-full max-w-xl rounded-[40px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 border border-gray-100">
              <div className="p-8 sm:p-10">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h2 className="text-2xl font-black text-black">Submit Field Report</h2>
                    <p className="text-gray-400 font-bold text-sm tracking-tight mt-1">Providing eyes on the ground for {user?.constituency}.</p>
                  </div>
                  <button 
                    onClick={() => setShowReportForm(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={24} className="text-gray-400" />
                  </button>
                </div>

                {!reportSuccess ? (
                  <form onSubmit={handleReportSubmit} className="space-y-6">
                    {/* Project Selection */}
                    <div>
                      <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Select Active Project</label>
                      <select 
                        required
                        value={reportData.project}
                        onChange={(e) => setReportData({...reportData, project: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-4 py-4 text-sm font-black focus:ring-2 focus:ring-primary-light focus:bg-white focus:outline-none appearance-none cursor-pointer"
                      >
                        <option value="">Choose a local project...</option>
                        {localProjects.map(p => (
                          <option key={p.id} value={p.name}>{p.name}</option>
                        ))}
                      </select>
                    </div>

                    {/* Description */}
                    <div>
                      <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Field Observations</label>
                      <textarea 
                        required
                        value={reportData.description}
                        onChange={(e) => setReportData({...reportData, description: e.target.value})}
                        placeholder="Describe what you see at the site (e.g., equipment presence, workforce status, apparent obstacles...)"
                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-primary-light focus:bg-white focus:outline-none min-h-[140px]"
                      />
                    </div>

                    {/* Image Upload Simulation */}
                    <div>
                      <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Evidence Attachment (Photo)</label>
                      <div 
                        onClick={() => fileInputRef.current?.click()}
                        className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center transition-all cursor-pointer group ${
                          reportData.image ? 'border-status-completed bg-emerald-50' : 'border-gray-100 bg-gray-50/50 hover:border-primary-light/50 hover:bg-primary-light/5'
                        }`}
                      >
                        {reportData.image ? (
                          <>
                            <CheckCircle2 size={32} className="mb-2 text-status-completed" />
                            <span className="text-xs font-black uppercase tracking-widest text-status-completed">{reportData.image} SELECTED</span>
                          </>
                        ) : (
                          <>
                            <Camera size={32} className="mb-2 text-gray-400 group-hover:text-primary-light transition-colors" />
                            <span className="text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-black">Upload Field Evidence</span>
                          </>
                        )}
                        <input 
                          type="file" 
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          className="hidden" 
                          accept="image/*" 
                        />
                      </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-black text-white font-black py-5 rounded-2xl hover:bg-status-completed transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-3 active:scale-[0.98]"
                    >
                      <Upload size={20} />
                      SUBMIT VALIDATED REPORT
                    </button>
                  </form>
                ) : (
                  <div className="py-20 flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-500">
                    <div className="w-24 h-24 bg-status-completed rounded-full flex items-center justify-center text-white mb-6 shadow-2xl shadow-status-completed/30">
                      <CheckCircle2 size={48} />
                    </div>
                    <h3 className="text-3xl font-black text-black mb-2">Report Submitted!</h3>
                    <p className="text-gray-500 font-bold max-w-xs uppercase text-xs tracking-widest leading-loose">
                      Your observations have been logged. The District Oversight Team will verify this within 24 hours.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content: Local Projects */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-black text-black uppercase tracking-widest">Projects in Your Area</h2>
              <span className="bg-gray-100 text-gray-400 text-[10px] font-black px-3 py-1 rounded-full">{localProjects.length} ACTIVE</span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {localProjects.map(project => (
                <div key={project.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary-light/20 transition-all group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-black text-lg text-black group-hover:text-primary-light transition-colors">{project.name}</h3>
                      <p className="text-sm font-bold text-gray-400 mt-1">Budget: {project.budget}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                        project.status === 'Ongoing' ? 'bg-status-ongoing/10 text-status-ongoing' : 
                        project.status === 'Delayed' ? 'bg-status-delayed/10 text-status-delayed' : 'bg-status-completed/10 text-status-completed'
                      }`}>
                        {project.status}
                      </span>
                      <button className="p-2 bg-gray-50 rounded-xl text-gray-400 group-hover:text-black transition-colors">
                        <ArrowRight size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Info Box */}
            <div className="bg-primary-light/5 border border-primary-light/10 p-6 rounded-3xl flex gap-4">
              <Info className="text-primary-light shrink-0" size={24} />
              <p className="text-sm font-medium text-primary-dark/80 leading-relaxed">
                As a registered citizen, your reports are prioritized by the District Oversight Committee. 
                Ensure you provide clear photographic evidence for faster verification.
              </p>
            </div>
          </div>

          {/* Sidebar: Suggestion Box */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <MessageSquare size={24} className="text-black" />
              <h2 className="text-xl font-black text-black uppercase tracking-widest">Suggestion Box</h2>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <p className="text-sm text-gray-500 font-bold mb-6 italic leading-relaxed">
                What can be done to improve project delivery in {user?.district}?
              </p>
              
              <form onSubmit={handleSuggestionSubmit} className="space-y-4">
                <textarea 
                  value={suggestion}
                  onChange={(e) => setSuggestion(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-sm font-bold focus:ring-2 focus:ring-primary-light focus:bg-white focus:outline-none min-h-[150px] transition-all"
                  placeholder="Share your thoughts with the council..."
                />
                <button 
                  type="submit"
                  className="w-full bg-black text-white font-black py-4 rounded-xl hover:bg-status-completed transition-all shadow-lg active:scale-95"
                >
                  SUBMIT SUGGESTION
                </button>
              </form>

              {showSuccess && (
                <div className="mt-4 p-4 bg-emerald-50 text-emerald-600 rounded-xl text-xs font-black animate-in fade-in slide-in-from-top-2 text-center">
                   Suggestion received! Thank you for your civic contribution.
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ReportDashboard;
