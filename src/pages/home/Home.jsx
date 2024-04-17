// import { NavLink } from "react-router-dom";
import { Input } from "../../shared/ui/input/Input";
import HomeList from "./components/HomeList/HomeList";
import { BeansList} from "./components/beans/BeansList";
import  {CoffeeList}  from "./components/coffee/CoffeeList";
import '/src/pages/home/Home.scss'

export const Home = () => {
  return (
    <>
    <h1>Find the best <br />coffee for you</h1>
      <section className="container"> 
      <button className="home-input icon-search"><Input/></button>
      <HomeList/>
      <CoffeeList/>
      <BeansList/>      
      </section>
  </>
  );
};




