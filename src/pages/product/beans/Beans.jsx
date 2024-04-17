
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '/src/pages/product/beans/Beans.scss';
import { Description } from './description/Description';
import { Size } from './size/Size';
import { Price } from './price/Price';

export const Beans = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [isHeaderVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const isBeansActive = location.pathname === '/beans';

    if (isBeansActive) {
      setSidebarVisible(false);
      setHeaderVisible(false);
    } else { 
      setSidebarVisible(true);
      setHeaderVisible(true);
    }
  }, [location]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className={`section ${isSidebarVisible ? '' : 'sidebar-hidden'}`}>
        <div className="box">
          <button className="beans-icon icon-chevron-left" onClick={goBack}></button>
          <button className="beans-icon icon-heart"></button>
        </div>
        <div className="parent">
          <div className="div1">
            Robusta Beans <br/>
            <p>From Africa</p>
          </div>
          <div className="div2">
            <div className="icon-coffee"><br/>Bean</div>
          </div>
          <div className="div3">
            <div className="icon-location"><br/>Africa</div>
          </div>
          <div className="div4">
            <p className="icon-star price">4.5 <span>(6,879)</span></p>
          </div>
          <div className="div5">Medium Roasted</div>
        </div>
      </div>

      <Description />
      <Size />
      <Price />

      {/* Використовуємо тернарний оператор для додавання класу */}
      <div className={`sidebar ${isSidebarVisible ? '' : 'sidebar-hidden'}`}>
        {/* Вміст Sidebar */}
      </div>

      <header className={`header ${isHeaderVisible ? '' : 'header-hidden'}`}>
        {/* Вміст Header */}
      </header>
    </>
  );
};
