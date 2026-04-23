import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    if (password !== '12345') return false;

    let mockUser = null;
    if (email === 'cit@gmail.com') {
      mockUser = { email, name: 'John Doe', role: 'CITIZEN', district: 'Lilongwe', constituency: 'Lilongwe City Center' };
    } else if (email === 'mp@gmail.com') {
      mockUser = { email, name: 'Hon. Mphepo', role: 'MP', district: 'Blantyre', constituency: 'Blantyre City Center' };
    } else if (email === 'gvmt@gmail.com') {
      mockUser = { email, name: 'Admin One', role: 'GOVERNMENT', department: 'Presidential Oversite' };
    } else if (email === 'anti@gmail.com') {
      mockUser = { email, name: 'Inv. Mwale', role: 'ACB', rank: 'Senior Investigator' };
    } else if (email === 'min@gmail.com') {
      mockUser = { email, name: 'Director Kaunda', role: 'MINISTRY', sector: 'Ministry of Education' };
    }

    if (mockUser) {
      setUser(mockUser);
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
