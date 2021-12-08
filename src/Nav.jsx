import React from 'react';
import {Link} from 'react-router-dom'
const Nav = () => {
   const del = ()=>{
        // let  audio = new Audio('del.mp3')
        // audio.play() 
    }

    return (
        <nav >
            <ul className='nav-ul' >
                <li key='1' ><Link to='/shopping-cart' >Home</Link> </li>
                <li key='2' ><Link onClick={()=> del()} to='/selected'>Selected 😋</Link> </li>
            </ul>
        </nav>
     );
}
 
export default Nav;