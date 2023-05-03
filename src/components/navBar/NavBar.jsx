import "./navbar.scss"
import { Link } from "react-router-dom";
import {MdOutlineHome} from "react-icons/md";
import {BsFillMoonFill} from "react-icons/bs";
import {AiOutlineAppstore} from "react-icons/ai";
import {MdOutlineWbSunny} from "react-icons/md";
import {MdOutlineNotificationsActive} from "react-icons/md";
import {AiOutlineMail} from "react-icons/ai";
import {BsFillPersonFill} from "react-icons/bs";
import {AiOutlineSearch} from "react-icons/ai";



const NavBar = () => {
  return (
    <div className='navbar'>
      <div className="left">
        <Link to="/" style={{textDecoration:"none"}}>
        <span>Kenyansocial</span> 
        </Link>
          
        <MdOutlineHome/>
        <BsFillMoonFill/>
        <AiOutlineAppstore/>
        <div className="search">
        <AiOutlineSearch/>
        <input type="text" placeholder="Search..." />
        </div>
        
        
        
       
      </div>
      <div className="right">
       <BsFillPersonFill/>
       <AiOutlineMail/>
       <MdOutlineNotificationsActive/>
       <div className="user">
        
        <img src="https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /> 
        
        <span>John Doe</span>
       </div>
      
      
      </div>
    </div>
  )
}

export default NavBar