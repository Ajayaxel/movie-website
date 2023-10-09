
import { Link} from "react-router-dom"
import "./Header.css"



function Header() {
 
   
  return (
    <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon"src="https://i.pinimg.com/600x315/bf/f3/1f/bff31f367d88e2e910b246763c674481.jpg" alt="logo"/></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
              
            </div>
        </div>
        
  )
}

export default Header


