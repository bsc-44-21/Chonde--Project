import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import DashboardCards from './components/DashboardCards';
import ProjectsList from './components/ProjectsList';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const HomePage = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <HeroBanner />
    <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <DashboardCards />
      <section className="py-16" id="projects">
        <ProjectsList />
      </section>
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element=