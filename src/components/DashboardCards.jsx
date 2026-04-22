import React from 'react';
import { CheckCircle2, AlertCircle, Clock, XOctagon } from 'lucide-react';

const DashboardCards = () => {
  const stats = [
    {
      label: 'Completed Projects',
      value: '124',
      icon: <CheckCircle2 size={24} className="text-status-completed" />,
      borderColor: 'border-l-status-completed'
    },
    {
      label: 'Ongoing Activity',
      value: '45',
      icon: <Clock size={24} className="text-status-ongoing" />,
      borderColor: 'border-l-status-ongoing'
    },
    {
      label: 'Not Started',
      value: '22',
      icon: <AlertCircle size={24} className="text-gray-400" />,
      borderColor: 'border-l-gray-300'
    },
    {
      label: 'Critical Issues',
      value: '3',
      icon: <XOctagon size={24} className="text-status-issue" />,
      borderColor: 'border-l-status-issue'
    }
  ];

  return (
    <div className="relative z-10 -mt-16 sm:-mt-24 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-xl shadow-xl p-6 border border-neutral-border border-l-4 ${stat.borderColor} hover:shadow-2xl transition-all duration-300 flex items-center justify-between group transform hover:-translate-y-1`}
          >
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-3xl font-black text-black group-hover:scale-105 transition-transform origin-left">{stat.value}</p>
            </div>
            <div className="p-3 bg-neutral-bg rounded-full shadow-inner">
              {stat.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCards;
