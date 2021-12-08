import React from 'react';

const Shoppingcart = (props) => {

    return (
        <React.Fragment>
            <h1 className='h1-ch'>shopping cart 🛒</h1>
            {/* <div className=""> */}
            {props.pr.map(p=>(
                <ul className='ul-pr-shopping cont ' key={p.id}>
                    <h2>Selected : {p.icart} {p.icart === 'No'? <span>&#128543;</span>:<span>&#x1F60B;</span>} </h2>
                    <li><img src={p.src} alt="not found"/></li>
                    <li>Name : {p.name}</li>
                    <li>Price : {p.price} $</li>
                    <li>Avalible Meals count : {p.count} Meals. </li>
                    <li>
                        {p.icart === 'No' && p.count !==0 ? <button onClick={()=> {
                            props.hclick(p.id) 
                        }}
                        className='add-btn'>Add to Cart</button>:''}</li>
                </ul>
                ))}
            {/* </div> */}
        </React.Fragment>
        
    );
}
 
export default Shoppingcart;

