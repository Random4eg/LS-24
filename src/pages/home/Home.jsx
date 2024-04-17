// import { NavLink } from "react-router-dom";
// import { Input } from "../../shared/ui/input/Input";
import HomeList from "./components/HomeList/HomeList";
import { BeansList} from "./components/beans/BeansList";
import  {CoffeeList}  from "./components/coffee/CoffeeList";
import '/src/pages/home/Home.scss'

export const Home = () => {
  return (
    <> 
    <section className="home-container"> 
    <h1>Find the best coffee for you</h1> 
    <label className="home-label">
      <button className="home-btn icon-search"></button>
      <input className="home-input" type="search" placeholder="Find Your Coffee..." />
      </label>    
     
      </section>
      <HomeList/>
      <CoffeeList/>
      <BeansList/>      
      
  </>
  );
};




