import React, { createContext, useMemo } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './shared/components/Header/Header';
import { Sidebar } from './shared/components/Sidebar/Sidebar';

export const ApiContext = createContext({});
export const ApiProvider = () => {
  const location = useLocation();

  const isCoffeeOrBeansPage = location.pathname.includes("Coffee") || location.pathname.includes("Beans");

  const value = useMemo(() => ({}), []);

  return (
    <ApiContext.Provider value={value}>
      {!isCoffeeOrBeansPage && <Header />}
      <div className="main">
        <Outlet />
      </div>
      {!isCoffeeOrBeansPage && <Sidebar />}
    </ApiContext.Provider>
  );
};