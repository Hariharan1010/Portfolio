import React from 'react';
import './Style.css';
import Hari from './assets/harii.jpg';

function Home() {
return(
    <div className="grid">
         <h1>Hai! I am</h1>
         <h2>Hariharan</h2>
         <h3> Web Developer</h3>
         <img src={Hari} width="100"alt="Logo" />;
        {/* <div className="name">
            <h2>Hariharan</h2>
        </div>  */}
        {/* <div className="web">
        <h3> Web Developer</h3>
        </div> */}
        
       {/* <div> <h1> Ramalingam</h1></div> */}
        
    </div>
     
    
);

}
export default Home;


