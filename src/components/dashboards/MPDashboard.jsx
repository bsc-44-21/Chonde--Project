import React, { useState } from 'react';
import { 
  PlusCircle, MessageSquare, Briefcase, 
  CheckCircle2, AlertTriangle, Users, Download,
  X, Calendar, Building2, HardHat, Check
} from 'lucide-react';

const MPDashboard = ({ user }) => {
  const [projects, setProjects] = useState([
    { id: 101, name: 'Area 18 Bridge Repair', status: 'Ongoing', budget: 'MWK 4.2B', timeline: 'June 2024 - Dec 2024', contractor: 'Malawian Builders Ltd' },
    { id: 103, name: 'City Center Street Lighting', status: 'Completed', budget: 'MWK 1.5B', timeline: 'Jan 2024 - May 2024', contractor: 'Elex Malawi' }
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const [newProject, setNewProject] = useState({
    name: '',
    contractor: '',
    budget: '',
    startDate: '',
    endDate: ''
  });

  const handleCreateProject = (e) => {
    e.preventDefault();
    const project = {
      id: Date.now(),
      name: newProject.name,
      status: 'Planning',
      budget: `MWK ${newProject.budget}B`,
      timeline: `${newProject.startDate} - ${newProject.endDate}`,
      contractor: newProject.contractor
    };
    setProjects([project, ...projects]);
    setSuccessMessage('Project Created Successfully!');
    setTimeout(() => {
      setSuccessMessage('');
      setShowCreateModal(false);
      setNewProject({ name: '', contractor: '', budget: '', startDate: '', endDate: '' });
    }, 2000);
  };

  const handleUpdateStatus = (status) => {
    setProjects(projects.map(p => p.id === selectedProject.id ? { ...p, status } : p));
    setSuccessMessage('Status Updated!');
    setTimeout(() => {
      setSuccessMessage('');
      setShowUpdateModal(false);
    }, 1500);
  };

  return (
    <div className="space-y-12">
      {/* Action Header */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h1 className="text-3xl font-black text-black tracking-tight">MP Command: {user?.constituency}</h1>
          <p className="text-gray-500 font-bold flex items-center gap-2 mt-1"><Users size={16} /> District Oversight: ACTIVE</p>
        </div>
        <button 
          onClick={() => setShowCreateModal(true)}
          className="bg-black hover:bg-status-ongoing text-white px-8 py-4 rounded-2xl font-black transition-all flex items-center gap-3 shadow-xl transform active:scale-95"
        >
          <PlusCircle size={22} /> CREATE PROJECT
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Funds Managed', val: 'MWK 14.5B', icon: <Briefcase size={16}/>, color: "text-black" },
          { label: 'Citizen Reports', val: '8', icon: <AlertTriangle size={16}/>, color: "text-status-delayed" },
          { label: 'Projects Active', val: projects.length, icon: <MessageSquare size={16}/>, color: "text-status-ongoing" },
          { label: 'Completion Rate', val: '92%', icon: <CheckCircle2 size={16}/>, color: "text-status-completed" }
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
          <h2 className="text-xl font-black text-black uppercase tracking-widest">Active Constituency Projects</h2>
          <div className="space-y-4">
            {projects.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                 <div className="flex justify-between items-start">
                   <div>
                     <h3 className="font-black text-black group-hover:text-primary-light transition-colors">{item.name}</h3>
                     <div className="flex flex-wrap gap-4 mt-2">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1">
                          <Building2 size={12} /> {item.contractor}
                        </p>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1">
                          <Calendar size={12} /> {item.timeline}
                        </p>
                     </div>
                   </div>
                   <div className="flex items-center gap-3">
                    <button 
                      onClick={() => { setSelectedProject(item); setShowUpdateModal(true); }}
                      className="text-[10px] font-black text-gray-500 hover:text-black hover:bg-gray-50 uppercase tracking-widest border border-gray-200 px-4 py-2 rounded-xl transition-all"
                    >
                      Update
                    </button>
                    <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                      item.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : 
                      item.status === 'Ongoing' ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-600'
                    }`}>
                      {item.status}
                    </span>
                   </div>
                 </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-3">
             <MessageSquare size={24} className="text-black" />
             <h2 className="text-xl font-black text-black uppercase tracking-widest">Community Needs</h2>
          </div>
          <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-6">
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
               <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Citizen Suggestion</p>
               <p className="text-sm font-bold text-black leading-relaxed italic">"We need a primary school fence in Chinsapo Area 2 to improve safety."</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
               <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Citizen Suggestion</p>
               <p className="text-sm font-bold text-black leading-relaxed italic">"Borehole at the center has stopped working, maintenance required."</p>
            </div>
            <button className="w-full bg-black text-white font-black py-4 rounded-xl hover:bg-primary-light shadow-lg flex items-center justify-center gap-2 transition-colors">
              <Download size={18} /> EXPORT NEEDS LIST
            </button>
          </div>
        </div>
      </div>

      {/* CREATE PROJECT MODAL */}
      {showCreateModal && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={() => setShowCreateModal(false)}></div>
          <div className="relative bg-white w-full max-w-xl rounded-[40px] shadow-2xl p-10 overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-black text-black uppercase tracking-tight">Register New Project</h2>
              <button onClick={() => setShowCreateModal(false)}><X size={24} className="text-gray-400" /></button>
            </div>
            
            {successMessage ? (
              <div className="py-20 text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white mb-6 shadow-xl"><Check size={40} /></div>
                <h3 className="text-xl font-black text-black uppercase">{successMessage}</h3>
              </div>
            ) : (
              <form onSubmit={handleCreateProject} className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Project Name</label>
                  <input required placeholder="e.g. New Health Clinic" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 font-bold text-sm" 
                    value={newProject.name} onChange={e => setNewProject({...newProject, name: e.target.value})} />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Construction Company</label>
                  <input required placeholder="Contractor Name" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 font-bold text-sm"
                    value={newProject.contractor} onChange={e => setNewProject({...newProject, contractor: e.target.value})} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Budget (MWK Billion)</label>
                    <input type="number" step="0.1" required placeholder="0.0" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 font-bold text-sm"
                      value={newProject.budget} onChange={e => setNewProject({...newProject, budget: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Estimated Timeline</label>
                    <input placeholder="e.g Jan 2025" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 font-bold text-sm"
                      value={newProject.startDate} onChange={e => setNewProject({...newProject, startDate: e.target.value})} />
                  </div>
                </div>
                <button type="submit" className="w-full bg-black text-white font-black py-5 rounded-2xl hover:bg-status-completed shadow-xl transition-all">FINALISE & PUBLISH</button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* UPDATE STATUS MODAL */}
      {showUpdateModal && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={() => setShowUpdateModal(false)}></div>
          <div className="relative bg-white w-full max-w-sm rounded-[40px] shadow-2xl p-10 overflow-hidden animate-in zoom-in-95 duration-200">
             <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-black text-black">Update Project Status</h2>
              <button onClick={() => setShowUpdateModal(false)}><X size={20} className="text-gray-400" /></button>
            </div>
            
            {successMessage ? (
              <div className="py-10 text-center">
                 <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg"><Check size={30} /></div>
                 <p className="font-black uppercase tracking-widest text-sm">{successMessage}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-3">
                {['Planning', 'Foundation', 'Ongoing', 'Completed'].map(status => (
                  <button 
                    key={status}
                    onClick={() => handleUpdateStatus(status)}
                    className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest border transition-all ${
                      selectedProject?.status === status ? 'bg-black text-white border-black' : 'bg-white text-gray-500 border-gray-100 hover:border-black hover:text-black'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MPDashboard;
