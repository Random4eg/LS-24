import { useState } from 'react';
import '/src/shared/components/Header/Header.scss';
import { HeaderMenu } from './component/HeaderMenu/HeaderMenu';
import { Link } from 'react-router-dom';



export const Header = () => {
  const [navIsActive, setNavIsActive] = useState(false)
  return (
  <div className="header">
     <div className="menu" onClick={()=> setNavIsActive(true)}>
      <span className="icon-menu icon"></span>
     </div>
     <div className="page-title"></div>
     <div className="user">
      <Link to ={`/Login/`} className="icon-coffee icon">
         </Link>
    {/* <a  className="icon-coffee icon" href="../../../pages/auth/login/Login"></a> */}
    </div>
    <HeaderMenu navIsActive={navIsActive} navClose={()=> setNavIsActive(false)} />
  
  </div> 

  );
};
