import { useState } from 'react';
import '/src/shared/components/Header/Header.scss';
import { HeaderMenu } from './component/HeaderMenu/HeaderMenu';

export const Header = () => {
  const [navIsActive, setNavIsActive] = useState(false)
  return (
  <div className="header">
     <div className="menu" onClick={()=> setNavIsActive(true)}>
      <span className="icon-menu"></span>
     </div>
     <div className="page-title"></div>
     <div className="user">
      <span className="icon-coffee"></span>
    </div>
    <HeaderMenu navIsActive={navIsActive} navClose={()=> setNavIsActive(false)} />
  
  </div> 

  );
};
