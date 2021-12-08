import React from 'react';
import {Link } from 'react-router-dom'
const Selected = (props) => {
    // let zerocount =

    return (
        <React.Fragment>
            <h1 className='sel-h1' >Selected Products &#127828;</h1>
            <div className="center-all">

            <div className='cost-order-div'>
            <h2 className='cost' >Total Cost: {props.cost} $.</h2>
            {props.sel.length > 0 &&<h2 className='order'>If You Ready To Order Please Click Order. 
            {/* <button className='order-btn'> */}
               <Link to='/login'>Order</Link> 
                {/* </button> */}
                &#128077;</h2>}
            </div>
            {props.sel.map(it=>(
                <ul className='ul-pr-selcted' key={it.id} >
                    <div className="img-details">
                    <li><img src={it.src} alt=""/></li>
                    <li><h3 className='details'>Product Detalis: {it.details}</h3></li>
                    </div>
                    <li>Name: {it.name}. </li>
                    <li>Price: {it.price} $.</li>
                    <li>Meals Count: [{it.itnum}] {it.count === 0 ? <span>No Meals Any More. &#x1F62A; </span> : <span>&#x1F929;</span> }</li>
                    <div className="incdecbtns">

                    {it.count > 0 &&<li>
                        <button onClick={()=> 
                            props.hlincr(it.id)} 
                            className='add-self' >+</button>
                    </li>}
                    {it.itnum > 1 && <li>
                        <button onClick={()=> props.onDecrement(it.id)} className='add-self' >-</button>
                    </li>}
                    </div>
                    <li>
                        <button onClick={()=> {
                            props.onDelete(it.id) 
                            props.onReset(it.id,it.itnum)}}
                            className='del' >Delete</button>
                    </li>
                </ul>
            ))}

            </div>
        </React.Fragment>
        
    );
}
 
export default Selected;