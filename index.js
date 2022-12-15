import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
import { IoStar } from 'react-icons/io5';

function Card(){
    return(
        <div className="card">
            <img className="card--image" src="https://www.kindpng.com/picc/m/2-21749_girl-chef-transparent-background-hd-png-download.png" alt="Girl Chef"/>
            <div className='card--stats'>
               <span><IoStar color='red' size='15'/></span>
               <span>5.0 </span>
               <span>(6) &bull; </span>
               <span> USA</span>
            </div>
            <div className='card--title'>
               <p>Cooking With Chef Mensa</p>  
               <p>From <b>$186</b> /person</p>
            </div>
        </div>
    )
}

function App (){
    return(
        <div className="app">
          <Card/>
        </div>
    )
}

ReactDom.render(<App/>, document.getElementById('root'))