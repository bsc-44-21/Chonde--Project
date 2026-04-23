import React, { useState } from 'react';
import { 
  PlusCircle, MessageSquare, MapPin, 
  ArrowRight, ShieldCheck, Info, X, Camera, Upload, 
  CheckCircle2, Briefcase, AlertTriangle
} from 'lucide-react';

const CitizenDashboard = ({ user }) => {
  const [suggestion, setSuggestion] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showReportForm, setShowReportForm] = useState(false);
  const [reportData, setReportData] = useState({ project: '', description: '', image: null });
  const [reportSuccess, setReportSuccess] = useState(false);
  const fileInputRef = React.useRef(null);

  const localProjects = [
    { id: 101, name: 'Area 18 Bridge Repair', status: 'Ongoing', budget: 'MWK 4.2B' },
    { id: 102, name: 'Chinsapo Market Expansion', status: 'Delayed', budget: 'MWK 8.5B' },
    { id: 103, name: 'City Center Street Lighting', status: 'Completed', budget: 'MWK 1.5B' }
  ];

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
    setReportSuccess(true);
    setTimeout(() => {
      setReportSuccess(false);
      setShowReportForm(false);
    }, 3000);
  };

  return (
    <div className="space-y-12">
      {/* Action Header */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h1 className="text-3xl font-black text-black tracking-tight">Citizen Dashboard: {user?.name}</h1>
          <p className="text-gray-500 font-bold flex items-center gap-2 mt-1"><MapPin size={16} className="text-primary-light" /> Monitoring: {user?.constituency}</p>
        </div>
        <button onClick={() => setShowReportForm(true)} className="bg-black hover:bg-status-ongoing text-white px-8 py-4 rounded-2xl font-black transition-all flex items-center gap-3 shadow-xl transform active:scale-95">
          <PlusCircle size={22} /> REPORT A PROJECT
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Tracked', val: 'MWK 142B', icon: <Briefcase size={16}/>, color: "text-black" },
          { label: 'Pending Issues', val: '14', icon: <AlertTriangle size={16}/>, color: "text-status-delayed" },
          { label: 'User Feedback', val: '89', icon: <MessageSquare size={16}/>, color: "text-status-ongoing" },
          { label: 'Verified', val: '92%', icon: <CheckCircle2 size={16}/>, color: "text-status-completed" }
        ].map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-center">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 flex items-center justify-center gap-1">
              {s.icon} {s.label}
            </span>
            <span className={`text-2xl font-black ${s.color}`}>{s.val}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-xl font-black text-black uppercase tracking-widest">My Area Projects</h2>
          <div className="space-y-4">
            {localProjects.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                 <div className="flex justify-between items-start">
                   <div>
                     <h3 className="font-black text-black group-hover:text-primary-light transition-colors">{item.name}</h3>
                     <p className="text-xs font-bold text-gray-400 mt-1">Budget: {item.budget}</p>
                   </div>
                   <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                     item.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
                   }`}>
                     {item.status}
                   </span>
                 </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <MessageSquare size={24} className="text-black" />
            <h2 className="text-xl font-black text-black uppercase tracking-widest">Suggestion Box</h2>
          </div>
          <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
            <p className="text-sm text-gray-500 font-bold mb-6 italic leading-relaxed">How can we improve {user?.district}?</p>
            <form onSubmit={handleSuggestionSubmit} className="space-y-4">
              <textarea value={suggestion} onChange={(e) => setSuggestion(e.target.value)} className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-sm font-bold min-h-[150px]" placeholder="Share your thoughts..."/>
              <button type="submit" className="w-full bg-black text-white font-black py-4 rounded-xl hover:bg-status-completed transition-all">SUBMIT</button>
            </form>
            {showSuccess && <div className="mt-4 p-4 bg-emerald-50 text-emerald-600 rounded-xl text-xs font-black text-center">Thanks! Logged.</div>}
          </div>
        </div>
      </div>

      {/* Modal Simulation */}
      {showReportForm && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={() => setShowReportForm(false)}></div>
          <div className="relative bg-white w-full max-w-xl rounded-[40px] shadow-2xl p-10">
             <div className="flex justify-between items-center mb-8">
               <h2 className="text-2xl font-black text-black">Submit Field Report</h2>
               <button onClick={() => setShowReportForm(false)}><X size={24} className="text-gray-400"/></button>
             </div>
             {!reportSuccess ? (
               <form onSubmit={handleReportSubmit} className="space-y-6">
                 <select required className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-4 py-4 text-sm font-black">
                   <option value="">Choose project...</option>
                   {localProjects.map(p => <option key={p.id}>{p.name}</option>)}
                 </select>
                 <textarea required className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-sm font-bold min-h-[120px]" placeholder="What is the observation?" />
                 <div onClick={() => fileInputRef.current?.click()} className="border-2 border-dashed border-gray-100 rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer">
                   <Camera size={32} className="text-gray-300"/><span className="text-[10px] font-black text-gray-400 mt-2 uppercase tracking-widest">Upload Photo Evidence</span>
                   <input type="file" ref={fileInputRef} className="hidden" />
                 </div>
                 <button type="submit" className="w-full bg-black text-white font-black py-5 rounded-2xl hover:bg-status-completed shadow-xl">SUBMIT TO OVERSIGHT</button>
               </form>
             ) : (
               <div className="text-center py-10">
                 <CheckCircle2 size={64} className="text-status-completed mx-auto mb-4" />
                 <h3 className="text-xl font-black text-black uppercase tracking-widest">Report Logged</h3>
               </div>
             )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CitizenDashboard;
