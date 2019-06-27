import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import world from './world.gif'

export default class mainPage extends React.Component{
    render(){
        return(
            <div className='App'>
                <div className='Header'>
                    <img src={world}/>
                </div>

            </div>
        );
    }
}