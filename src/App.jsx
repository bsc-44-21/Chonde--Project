import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import { projectService } from './services/projectService';
import { Building2, MapPin, Eye } from 'lucide-react';

const HomePage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectService.getAllProjects());
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc]">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-[#1e2336] mb-4 tracking-tighter uppercase">
            National Transparency Feed
          </h1>
          <p className="text-gray-500 font-medium text-lg max-w-2xl mx-auto">
            Live monitoring of community development projects across Malawi.
            Powered by citizen oversight and MP accountability.
          </p>
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 hover:shadow-xl transition-all group border-b-4 border-b-blue-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{project.sector}</p>
                    <h3 className="text-xl font-black text-gray-900 leading-tight tracking-tight">{project.name}</h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-500 font-bold text-sm mb-8">
                  <MapPin size={16} className="text-blue-500" />
                  <span>{project.village}, {project.district}</span>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-black uppercase rounded-full tracking-widest">
                    {project.status}
                  </span>
                  <button className="text-blue-600 font-black text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Details <Eye size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-[40px] border-2 border-dashed border-gray-100">
            <Building2 size={48} className="mx-auto text-gray-200 mb-4" />
            <h3 className="text-2xl font-black text-gray-900">No Projects Published Yet</h3>
            <p className="text-gray-400 font-medium mt-2">Projects will appear here as MPs deploy them in their constituencies.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
