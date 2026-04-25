import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useAuth } from '../context/AuthContext';
import CitizenDashboard from './dashboards/CitizenDashboard';
import MPDashboard from './dashboards/MPDashboard';
import GovernmentDashboard from './dashboards/GovernmentDashboard';
import ACBDashboard from './dashboards/ACBDashboard';
import MinistryDashboard from './dashboards/MinistryDashboard';

const Dashboard = () => {
  const { user } = useAuth();

  const renderDashboard = () => {
    switch (user?.role) {
      case 'CITIZEN':
        return <CitizenDashboard user={user} />;
      case 'MP':
        return <MPDashboard user={user} />;
      case 'GOVERNMENT':
        return <GovernmentDashboard user={user} />;
      case 'ACB':
        return <ACBDashboard user={user} />;
      case 'MINISTRY':
        return <MinistryDashboard user={user} />;
      default:
        return (
          <div className="py-20 text-center">
            <h2 className="text-2xl font-black text-black tracking-widest uppercase">Unauthorized</h2>
            <p className="text-gray-500 font-bold mt-2 italic">Please Sign In to access your terminal.</p>
          </div>
        );
    }
  };

  const isFullWidthRole = user?.role === 'GOVERNMENT' || user?.role === 'MP' || user?.role === 'MINISTRY' || user?.role === 'ACB' || user?.role === 'CITIZEN';

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex flex-col font-inter">
      {!isFullWidthRole && <Header />}
      
      {isFullWidthRole ? (
        <main className="flex-grow w-full">
          {renderDashboard()}
        </main>
      ) : (
        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
          {renderDashboard()}
        </main>
      )}

      <Footer />
    </div>
  );
};

export default Dashboard;
