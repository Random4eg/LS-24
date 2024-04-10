import { Link } from "react-router-dom"

export const Sidebar = () => {
  return (
    <div className="Sidebar">
       <Link to={'/'} >Home</Link>
       <Link to={'/about'} >About</Link>
    </div>
   
  )
}
