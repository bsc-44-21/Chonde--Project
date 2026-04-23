import React, { useState } from 'react';
import { Filter, AlertTriangle, Lock } from 'lucide-react';

const Badge = ({ status }) => {
  const styles = {
    Completed: 'bg-emerald-100 text-emerald-700',
    Ongoing: 'bg-amber-100 text-amber-700',
    Delayed: 'bg-orange-100 text-orange-700',
    Flagged: 'bg-red-100 text-red-700',
  };

  return (
    <div className={`absolute top-3 left-3 px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded-md shadow-sm flex items-center gap-1 ${styles[status] || 'bg-gray-100 text-gray-700'}`}>
      {status === 'Flagged' && <AlertTriangle size={10} />}
      {status}
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const isFlagged = project.status === 'Flagged';
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col group">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img 
          src={project.image} 
          alt={project.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <Badge status={project.status} />
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-black text-lg text-[#1e2336] leading-tight mb-4 min-h-[56px]">
          {project.name}
        </h3>
        
        <div className="space-y-1 mb-4">
          <div className="flex justify-between items-end">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Progress</span>
            <span className="text-xs font-black text-gray-700">{project.progress}%</span>
          </div>
          <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div 
              className={`h-full ${project.status === 'Completed' ? 'bg-[#059669]' : project.status === 'Flagged' ? 'bg-[#dc2626]' : project.status === 'Delayed' ? 'bg-[#d97706]' : 'bg-[#2563eb]'}`} 
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Timeline</p>
            <p className="text-xs font-bold text-gray-700">{project.timeline}</p>
          </div>
          <div className="text-right">
            <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Citizen Reports</p>
            <p className={`text-xs font-bold ${project.complaints > 10 ? 'text-[#dc2626]' : 'text-gray-700'}`}>
              {project.complaints === 0 ? 'None' : `${project.complaints} complaints`}
            </p>
          </div>
        </div>
        
        <div className="mt-auto pt-2">
          <button className="w-full bg-[#ef4444] hover:bg-[#dc2626] text-white font-bold py-3 rounded-lg text-sm transition-colors uppercase tracking-wide">
            Report Issue
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectsList = () => {
  const highPriorityProjects = [
    {
      id: 101,
      name: 'Mzuzu Road Rehabilitation',
      status: 'Flagged',
      progress: 15,
      timeline: 'Mar 2022 - Oct 2023',
      complaints: 142,
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 102,
      name: 'Blantyre District Hospital Extension',
      status: 'Flagged',
      progress: 30,
      timeline: 'Jan 2023 - Dec 2023',
      complaints: 89,
      image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 103,
      name: 'Lilongwe Water Supply Network',
      status: 'Delayed',
      progress: 45,
      timeline: 'Feb 2023 - Nov 2023',
      complaints: 56,
      image: 'https://images.unsplash.com/photo-1581094120910-137446bc6451?q=80&w=600&auto=format&fit=crop'
    }
  ];

  const allProjects = [
    {
      id: 1,
      name: 'Chilinde Primary School Block',
      status: 'Ongoing',
      progress: 60,
      timeline: 'Jun 2023 - Mar 2024',
      complaints: 2,
      image: 'https://images.unsplash.com/photo-1509391366360-fe5bb60213ad?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 2,
      name: 'Zomba Central Market Renovation',
      status: 'Completed',
      progress: 100,
      timeline: 'Jan 2023 - Sep 2023',
      complaints: 0,
      image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Mangochi Solar Power Plant',
      status: 'Ongoing',
      progress: 80,
      timeline: 'Apr 2023 - May 2024',
      complaints: 5,
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 4,
      name: 'Salima Bridge Construction',
      status: 'Delayed',
      progress: 25,
      timeline: 'Jan 2023 - Aug 2023',
      complaints: 34,
      image: 'https://images.unsplash.com/photo-1581094120910-137446bc6451?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 5,
      name: 'Kasungu Rural Health Clinic',
      status: 'Completed',
      progress: 100,
      timeline: 'Nov 2022 - Jul 2023',
      complaints: 1,
      image: 'https://images.unsplash.com/photo-1509391366360-fe5bb60213ad?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 6,
      name: 'Mchinji Agriculture Storage Facility',
      status: 'Ongoing',
      progress: 40,
      timeline: 'Aug 2023 - Jun 2024',
      complaints: 12,
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop'
    }
  ];

  return (
    <div className="space-y-12 pb-16">
      
      {/* Filter Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1 w-full">
            <div className="flex flex-col">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 pl-1">Region</label>
              <select className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none font-medium">
                <option>All Regions</option>
                <option>Northern</option>
                <option>Central</option>
                <option>Southern</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 pl-1">District</label>
              <select className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none font-medium">
                <option>All Districts</option>
              </select>
            </div>
            <div className="flex flex-col relative">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 pl-1">Constituency</label>
              <div className="relative">
                <select disabled className="bg-gray-50 border border-gray-200 text-gray-400 text-sm rounded-lg block w-full p-2.5 outline-none font-medium appearance-none">
                  <option>Sign in to Select</option>
                </select>
                <Lock size={14} className="absolute right-3 top-3 text-gray-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 pl-1">Status</label>
              <select className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none font-medium">
                <option>All Statuses</option>
                <option>Completed</option>
                <option>Ongoing</option>
                <option>Delayed</option>
                <option>Flagged</option>
              </select>
            </div>
          </div>
          
          <div className="pt-5 md:pl-4 md:border-l border-gray-100 w-full md:w-auto">
            <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2.5 rounded-lg font-bold text-sm transition-colors">
              <Filter size={16} /> More Filters
            </button>
          </div>
        </div>
      </div>

      {/* High Priority Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b border-red-100 pb-3">
          <div className="p-1.5 bg-red-100 rounded-lg">
            <AlertTriangle size={20} className="text-red-600 fill-red-600/20" />
          </div>
          <h2 className="text-2xl font-black text-red-600">High Priority: Most Flagged Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highPriorityProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* All Monitored Projects */}
      <div className="space-y-6 pt-8">
        <div className="flex justify-between items-end border-b border-gray-200 pb-3">
          <h2 className="text-2xl font-black text-[#1e2336]">All Monitored Projects</h2>
          <span className="text-sm font-bold text-gray-500">Showing 1-9 of 1,240</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="flex justify-center pt-8">
          <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-lg font-bold text-sm transition-colors shadow-sm">
            Load More Projects
          </button>
        </div>
      </div>

    </div>
  );
};

export default ProjectsList;
