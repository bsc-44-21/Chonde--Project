import React from 'react';
import { Folder, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

const DashboardCards = () => {
  const stats = [
    {
      label: 'Total Projects',
      value: '1,240',
      valueColor: 'text-[#2563eb]', // Blue
      icon: <Folder size={20} className="text-[#2563eb]" />,
      iconBg: 'bg-[#eff6ff]', // Blue-50
    },
    {
      label: 'Completed',
      value: '620',
      valueColor: 'text-[#059669]', // Emerald
      icon: <CheckCircle size={20} className="text-[#059669]" />,
      iconBg: 'bg-[#ecfdf5]', // Emerald-50
      inlineIcon: <CheckCircle size={16} className="text-[#059669] ml-2" />
    },
    {
      label: 'Delayed',
      value: '410',
      valueColor: 'text-[#d97706]', // Amber
      icon: <Clock size={20} className="text-[#d97706]" />,
      iconBg: 'bg-[#fffbeb]', // Amber-50
      inlineIcon: <AlertTriangle size={16} className="text-[#d97706] ml-2 fill-[#d97706]/20" />
    },
    {
      label: 'Reported Issues',
      value: '2,130',
      valueColor: 'text-[#dc2626]', // Red
      icon: <AlertTriangle size={20} className="text-[#dc2626]" />,
      iconBg: 'bg-[#fef2f2]', // Red-50
      inlineIcon: <AlertTriangle size={16} className="text-[#dc2626] ml-2 fill-[#dc2626]" />
    }
  ];

  return (
    <div className="relative z-10 pb-8 bg-[#f8f9fa]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col justify-between"
          >
            <div className="flex justify-between items-start mb-4">
              <p className="text-[11px] font-black text-gray-500 uppercase tracking-widest">{stat.label}</p>
              <div className={`p-2.5 rounded-lg ${stat.iconBg}`}>
                {stat.icon}
              </div>
            </div>
            <div className="flex items-center">
              <span className={`text-3xl font-black ${stat.valueColor}`}>
                {stat.value}
              </span>
              {stat.inlineIcon && stat.inlineIcon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCards;
