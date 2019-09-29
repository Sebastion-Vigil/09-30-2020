import React from 'react';

import '../css/Avatar.css';

class Avatar extends React.Component {
    render() {
        return (
            <div className="Avatar">
             <div className="strip top">
              <p className="p 1 purple">A</p> 
              <p className="p 2 orange">L</p>
              <p className="p 3 yellow">G</p>
              <p className="p 4 green">O</p>
              <p className="p 5 blue">R</p>
              <p className="p 6 indigo">I</p>
              <p className="p 7 violet">T</p>
              <p className="p 8 red">H</p>
              <p className="p 9 orange">M</p>
              <p className="p 10 yellow">I</p>
              <p className="p 11 purple">C</p>
             </div>  
             <div className="strip center"></div>
             <div className="strip bottom">
               <p className="p 12 purple">S</p>               
               <p className="p 13 indigo">O</p>
               <p className="p 14 violet">R</p>
               <p className="p 15 red">C</p>         
               <p className="p 16 orange">E</p>
               <p className="p 17 yellow">R</p>
               <p className="p 18 green">E</p>
               <p className="p 19 purple">R</p>
             </div>
            </div>
        )
    }
}

export default Avatar;