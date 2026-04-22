import React, { useState } from 'react';
import {
  Calendar, MapPin, DollarSign, ArrowRight, User,
  Clock, CheckCircle, X
} from 'lucide-react';

const Badge = ({ status }) => {
  const styles = {
    Completed: 'bg-status-completed/10 text-status-completed border-status-completed/20',
    Ongoing: 'bg-status-ongoing/10 text-status-ongoing border-status-ongoing/20',
    Delayed: 'bg-status-delayed/10 text-status-delayed border-status-delayed/20',
    'Not Started': 'bg-gray-100 text-gray-400 border-gray-200',
    Issue: 'bg-status-issue/10 text-status-issue border-status-issue/20 font-bold',
  };

  return (
    <span className={`px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded-full border ${styles[status]}`}>
      {status}
    </span>
  );
};

const ProjectsList = () => {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const regions = ['All', 'Northern', 'Central', 'Southern'];

  const projects = [
    {
      id: 1,
      name: 'National Highway M1 Expansion',
      department: 'Ministry of Transport',
      region: 'Northern',
      district: 'Karonga',
      status: 'Issue',
      budget: '$45M',
      lastUpdated: '2 days ago',
      progress: 35,
      contractor: 'ZhongHao Construction Ltd',
      timeline: 'Jan 2024 - Dec 2025',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop',
      description: 'Widening of the primary north-south artery to improve trade logistics with neighboring countries.'
    },
    {
      id: 2,
      name: 'Salima Solar Power Plant',
      department: 'Energy Commission',
      region: 'Central',
      district: 'Salima',
      status: 'Ongoing',
      budget: '$12M',
      lastUpdated: '1 week ago',
      progress: 68,
      contractor: 'GreenSource Infrastructure',
      timeline: 'Mar 2024 - Sept 2025',
      image: 'https://images.unsplash.com/photo-1509391366360-fe5bb60213ad?q=80&w=600&auto=format&fit=crop',
      description: 'Phase III of the rural electrification program focusing on sustainable solar energy harvesting.'
    },
    {
      id: 3,
      name: 'Mzuzu Central Hospital Upgrade',
      department: 'Ministry of Health',
      region: 'Northern',
      district: 'Mzimba',
      status: 'Delayed',
      budget: '$28M',
      lastUpdated: '3 days ago',
      progress: 42,
      contractor: 'BuildWorks Malawi',
      timeline: 'Oct 2023 - June 2025',
      image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=600&auto=format&fit=crop',
      description: 'Renovation and expansion of the main surgical unit to include high-tech pediatric care.'
    },
    {
      id: 4,
      name: 'Blantyre Water Supply Project',
      department: 'Water Board',
      region: 'Southern',
      district: 'Blantyre',
      status: 'Completed',
      budget: '$15M',
      lastUpdated: '1 month ago',
      progress: 100,
      contractor: 'HydraFlow Malawi',
      timeline: 'Jan 2023 - Jan 2025',
      image: 'https://images.unsplash.com/photo-1581094120910-137446bc6451?q=80&w=600&auto=format&fit=crop',
      description: 'Deployment of secondary reservoirs and pipes to ensure consistent water supply to the Limbe area.'
    },
  ];

  const getHeadline = () => {
    if (selectedRegion === 'All') return 'National Development Projects';
    return `Development in ${selectedRegion} Malawi`;
  };

  return (
    <div className="space-y-10 relative">
      {/* Tab Filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-black">
            {getHeadline().split(' ')[0]} <span className="text-primary-light">{getHeadline().split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-gray-500 mt-1 font-medium">Tracking fiscal accountability across the map.</p>
        </div>

        <div className="flex bg-gray-100 p-1 rounded-xl w-fit border border-gray-200">
          {regions.map(region => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-6 py-2.5 rounded-lg text-sm font-black transition-all ${selectedRegion === region
                ? 'bg-white text-black shadow-lg ring-1 ring-black/5'
                : 'text-gray-400 hover:text-black'
                }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      {/* Projects List */}
      <div className="grid grid-cols-1 gap-8">
        {projects
          .filter(p => selectedRegion === 'All' || p.region === selectedRegion)
          .map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl shadow-sm border border-neutral-border overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row"
            >
              {/* Details on Left */}
              <div className="flex-1 p-8 sm:p-10 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge status={project.status} />
                    <span className="text-[11px] font-black text-gray-400 uppercase tracking-tighter flex items-center">
                      <Calendar size={13} className="mr-1" />
                      Ref: {project.lastUpdated}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-black text-black leading-tight">
                      {project.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 font-bold">
                      <span className="flex items-center text-primary-dark">
                        <MapPin size={16} className="mr-1.5" />
                        {project.region} &bull; {project.district}
                      </span>
                      <span className="flex items-center">
                        <DollarSign size={16} className="mr-1" />
                        Budget: {project.budget}
                      </span>
                    </div>
                  </div>

                  {/* VISUAL PROGRESS BAR */}
                  <div className="space-y-2 py-2">
                    <div className="flex justify-between items-end">
                      <span className="text-xs font-black text-black">PROJECT COMPLETION</span>
                      <span className="text-sm font-black text-primary-light">{project.progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden border border-gray-50">
                      <div
                        className={`h-full transition-all duration-1000 ease-out ${project.status === 'Issue' ? 'bg-black' :
                          project.status === 'Delayed' ? 'bg-status-delayed' : 'bg-status-completed'
                          }`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black text-gray-400 tracking-widest uppercase mb-1">Implementing Agency</p>
                    <span className="text-sm font-black text-black">
                      {project.department}
                    </span>
                  </div>
                  <button
                    onClick={() => setActiveProject(project)}
                    className="bg-black text-white px-6 py-3 rounded-xl text-xs font-black hover:bg-primary-light transition-all flex items-center gap-2 group-hover:px-8"
                  >
                    FULL REPORT <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* Image on Right */}
              <div className="md:w-[35%] h-72 md:h-auto overflow-hidden relative group-hover:md:w-[40%] transition-all duration-700">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/10 to-transparent"></div>
              </div>
            </div>
          ))}
      </div>

      {/* INTERACTIVE DETAIL SLIDE-OUT */}
      {activeProject && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity animate-in fade-in duration-300"
            onClick={() => setActiveProject(null)}
          />
          <div className="fixed right-0 top-0 h-full w-full max-w-lg bg-white z-[110] shadow-2xl animate-in slide-in-from-right duration-500 flex flex-col">
            <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h4 className="text-xs font-black tracking-widest text-gray-500 uppercase">Strategic Project Report</h4>
              <button
                onClick={() => setActiveProject(null)}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-8 sm:p-12 space-y-10">
              <div className="space-y-4">
                <Badge status={activeProject.status} />
                <h3 className="text-4xl font-black text-black leading-tight">{activeProject.name}</h3>
                <p className="text-gray-500 font-bold flex items-center gap-2">
                  <MapPin size={18} /> {activeProject.region}, {activeProject.district}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-gray-400 tracking-widest uppercase">Contractor</p>
                  <div className="flex items-center gap-2 text-black font-black">
                    <User size={16} className="text-primary-light" />
                    {activeProject.contractor}
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-gray-400 tracking-widest uppercase">Timeline</p>
                  <div className="flex items-center gap-2 text-black font-black">
                    <Clock size={16} className="text-primary-light" />
                    {activeProject.timeline}
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <p className="text-[10px] font-black text-gray-400 tracking-widest uppercase">Detailed Progress View</p>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-black text-black text-xl">{activeProject.progress}%</span>
                    <span className="text-xs font-bold text-gray-400 italic">Financial Verfication: OK</span>
                  </div>
                  <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-status-completed"
                      style={{ width: `${activeProject.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-black text-gray-400 tracking-widest uppercase">Executive Summary</p>
                <p className="text-gray-600 leading-relaxed">
                  {activeProject.description} This project is part of the 2024 Strategic Development Goal framework.
                  Audit trails are available for public verification via the Ministry of Finance disclosure portal.
                </p>
              </div>
            </div>

            <div className="p-8 border-t border-gray-100">
              <button
                onClick={() => setActiveProject(null)}
                className="w-full bg-black text-white font-black py-4 rounded-2xl hover:bg-status-completed transition-all shadow-xl shadow-black/5"
              >
                CLOSE REPORT
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProjectsList;
