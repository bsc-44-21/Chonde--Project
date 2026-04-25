// Mock service for Project Management using localStorage
// This will be swapped with Firebase in the next phase

const PROJECTS_KEY = 'chonde_projects';

export const projectService = {
  // Create a new project
  createProject: (projectData) => {
    const projects = projectService.getAllProjects();
    const newProject = {
      ...projectData,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      status: 'Planning' // Default status
    };
    
    projects.push(newProject);
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
    return newProject;
  },

  // Get all projects in the system (for Government/Landing Page)
  getAllProjects: () => {
    const data = localStorage.getItem(PROJECTS_KEY);
    return data ? JSON.parse(data) : [];
  },

  // Get projects for a specific constituency (for Citizens/MPs)
  getProjectsByConstituency: (constituency) => {
    const projects = projectService.getAllProjects();
    return projects.filter(p => p.constituency === constituency);
  },

  // Get projects created by a specific MP
  getProjectsByMP: (mpId) => {
    const projects = projectService.getAllProjects();
    return projects.filter(p => p.createdBy === mpId);
  },

  // Get projects by sector (for Ministries)
  getProjectsBySector: (sector) => {
    const projects = projectService.getAllProjects();
    return projects.filter(p => p.sector === sector);
  },

  // Update project status
  updateProjectStatus: (projectId, status) => {
    const projects = projectService.getAllProjects();
    const index = projects.findIndex(p => p.id === projectId);
    if (index !== -1) {
      projects[index].status = status;
      localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
      return projects[index];
    }
    return null;
  },

  // --- REPORTING SYSTEM ---
  
  createReport: (reportData) => {
    const reports = projectService.getAllReports();
    const newReport = {
      ...reportData,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      status: 'Pending'
    };
    reports.push(newReport);
    localStorage.setItem('chonde_reports', JSON.stringify(reports));
    return newReport;
  },

  getAllReports: () => {
    const data = localStorage.getItem('chonde_reports');
    return data ? JSON.parse(data) : [];
  },

  // --- COMMUNITY NEEDS / SUGGESTIONS ---

  createSuggestion: (suggestionData) => {
    const suggestions = projectService.getAllSuggestions();
    const newSuggestion = {
      ...suggestionData,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      upvotes: 0
    };
    suggestions.push(newSuggestion);
    localStorage.setItem('chonde_suggestions', JSON.stringify(suggestions));
    return newSuggestion;
  },

  getAllSuggestions: () => {
    const data = localStorage.getItem('chonde_suggestions');
    return data ? JSON.parse(data) : [];
  }
};
