import React, {Component} from 'react'
import Nav from './Nav'
import Shoppingcart from './Shoppingcart'
import {Route,Switch,Redirect} from 'react-router-dom'
import Selected from './Selected'
import Login from './Login'

import rice from './rice.jpg'
import pizza from './pizza.jpg'
import fish from './fish.jpg'
import choco from './chocolate.jpg'
import kochary from './eygpt-koshary.jpg'
import caramello from './caramellocake.jpeg'
import checken from './Checken.jpg'
import cakeberries from './chocolatecake.jpg'
import frenchfries from './frenchfries.jpg'
import icecream from './icecream.jpg'

// chocolatecakewithmascarponeberries
class App extends Component {
        state = {
        products: [
            {name: 'Egyptin kocharey', details: 'White Rice, Nodels, Ads bigiba, Homs El shame, Fried oinion.', icart: 'No',
            id: 1, count: 34, price: 25, itnum: 1, src:kochary},
            {name: 'Rice With vigitables', details: '200gr Rice with 3 hot spices and 100gr vigitables', icart: 'No',
             id: 2, count: 20, price: 20, itnum: 1, src:rice},
            {name: 'Pizza Mashrom', details: 'Large pizza with 100gr Machrome and 100gr white cheese', icart: 'No',
             id: 3, count: 33, price: 30, itnum: 1, src: pizza},
            {name: 'Fried Fish', details: 'Two Large Fichs with 30gr hot sauce and lemon juice on fich',  icart: 'No',
             id: 4, count: 43, price: 40, itnum: 1, src:fish},
            {name: 'Chocolate Balls', details: '10 chocolate balls with white chocolate sauce',  icart: 'No',
             id: 5, count: 21, price: 50, itnum: 1, src:choco},
            {name: 'CaramelloCake', details: 'Caramello Cake',  icart: 'No',
             id: 6, count: 29, price: 23, itnum: 1, src:caramello},
            {name: 'Checken', details: 'checken',  icart: 'No',
             id: 7, count: 32, price: 19, itnum: 1, src:checken},
            {name: 'French Fries', details: 'French Fries',  icart: 'No',
             id: 8, count: 26, price: 27, itnum: 1, src:frenchfries},
            {name: 'Cake Berries', details: 'Cake Berries',  icart: 'No',
             id: 9, count: 36, price: 47, itnum: 1, src:cakeberries},

            {name: 'Ice Cream', details: 'Ice Cream',  icart: 'No',
             id: 10, count: 35, price: 17, itnum: 1, src:icecream},
            ],
            sel: [],
            Total:0
        }

        resetafterorder = ()=> {

            let mymainpro = this.state.products.map(pro=> {
                pro.icart = 'No';
                return pro
            })

            this.setState({products: mymainpro})


            // delete all selected products
            let selpro = []
            this.setState({sel: selpro})
            console.log('reset');

            // clear Total cost
            let mycost = 0;
            this.setState({Total: mycost})

        }

        // add to selected component
        addToSelected = (id)=> {
            if(this.state.sel.length === this.state.products.length){
                
            }else {
                let mypr = this.state.products.filter(p=> p.id === id)
                this.setState({sel: this.state.sel.concat(mypr)})

                // do handle count function
                this.hlcount(id)
                let mypro = this.state.products.filter(p=>{
                    if(id === p.id){
                        return p.price
                    }
                })[0]
                let price = mypro.price;
                this.setState({Total: this.state.Total + price})
                // let  audio = new Audio('ymmey.mp3')
                // audio.play()
            }
        }

        // handle count in main component => (shopping cart)
        hlcount = (id)=> {
            let mypro = this.state.products.map(p=>{
                if(p.id === id){
                    p.count += -1
                    p.icart = 'Yes'
                    p.itnum = 1;
                }
                return p;
            })
            this.setState({products: mypro})
        }

        // handle increment & decrement in selected component
        handleIncDec = (id)=> {
            let myprcount = this.state.products.map(p=>{
                if(p.id === id && p.count > 0 ){
                    //increment item number
                    p.itnum += 1
                    // decrement the avalible count
                    p.count += -1
                }
                return p;
            })
            this.setState({products: myprcount})

            // add the price to Total Object
            
            let mypro = this.state.sel.filter(p=> {
                if(id === p.id ){
                    return p.price
                }
            })[0]
            let price = mypro.price;
            this.setState({Total: this.state.Total + price})
        }


        // handle delete form selected component
        hlDelete = (id) => {
            let sel = this.state.sel.filter(p=> p.id !== id)
            this.setState({sel})

            // handle decrement From Total Object
            let mynum;
            let myprodct = this.state.sel.filter(pr=> {
                if(id === pr.id){
                    mynum = pr.itnum;
                    return pr;
                }
            })[0];
            let price = myprodct.price * mynum;
            this.setState({Total: this.state.Total -  price})
        }

        // reset the product state in main component
        resete = (id,pcount) => {
            let myproduct = this.state.products.filter(p=> {
                if(p.id === id){
                    p.count+= pcount;
                    p.icart = 'No'
                }
                return p;
            })
            this.setState({products: myproduct})
        }

        // handle count and item number in selectd component
        countdecrement = (id)=>{
            let newSel = this.state.sel.map(p=> {
                if(p.id === id){
                    p.itnum-= 1;
                    p.count+= 1;
                }
                return p;
            })
            this.setState({sel: newSel})

            // handle decrement From Total Object
            let mypro = this.state.products.filter(p=> {
                if(id === p.id){
                    return p.price
                }
            })[0]
            let price = mypro.price;
            this.setState({Total: this.state.Total - price})


        }

    render() { 



        return (
            <React.Fragment>
                <Nav />
                <Switch>
                    <Route exact path={'/shopping-cart'} render={()=> <Shoppingcart
                    // add to selected function
                    hclick={this.addToSelected}
                    // sinding data
                     pr={this.state.products}/>} />

                    <Route path='/selected' render={()=> 
                    <Selected 
                    cost={this.state.Total}
                    onDecrement={this.countdecrement}
                    onReset={this.resete} 
                    onDelete={this.hlDelete} 
                    hlincr={this.handleIncDec} 
                    sel={this.state.sel} />} />

                    <Route path='/login' render={(props)=> <Login onReset={this.resetafterorder} {...props}/>} />

                    <Route path="*" render={() => <Redirect to={"/shopping-cart"} />} />
                </Switch>
            </React.Fragment>
        );
    }
}
 
export default App;