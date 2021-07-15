import '../Style.css';
// import Image from '../assets/Image.jpg';
import {Link} from 'react-router-dom';
function Nav() {
    return(
        <div>
            <div className="id">
            <ul>
            <div className="example"><Link to ="/" style={{ textDecoration: 'none' }}><li>Home</li></Link>
            <Link to ="/about" style={{ textDecoration: 'none' }}><li>About</li></Link> 
            {/* <Link to ="/skills" style={{ textDecoration: 'none' }}><li>Skills</li></Link> */}
            <Link to ="/projects" style={{ textDecoration: 'none' }}><li>Projects</li></Link>
            <Link to ="/contact" style={{ textDecoration: 'none' }}><li>Contact</li></Link></div>
            
            </ul>

        </div> 
       
        </div>
        
        
      
    );
}
export default Nav;