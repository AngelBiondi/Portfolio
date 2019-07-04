import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import mainPage from './mainpage'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Link } from 'reactstrap';
import { readdirSync } from 'fs';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route , Switch} from 'react-router-dom'
import world from './world.gif'
import tech from './TechWorld.jpg'
import touch from './touch.jpg'
import mongo from './mongologo.png'
import nod from './nodelogo.png'
import jque from './jquerylogo.png'
import jslo from './jslogo.png'
import boots from './bootslogo.png'
import csty from './csslogo.png'
import htm from './htmlogo.png'
import relo from './reactlogo.png'
import reduxgo from './reduxlogo.png'
import responsive from './responsive.png'

export default class App extends React.Component{
  render(){
  return(
   <div className='App'>
      <div className='Header'>
                   <h1 className='white'>Angel Biondi</h1> <br/>
                   <h2 className='white'>Full Stack Web Developer</h2> <br/>
                   <h3 className='white'>Always looking for modernism and give on my websites something that nobody else has, Full of Ideas, With High Knowledge on Digital Marketing and Page SEO <br/> <br/>

Personal Goal: Be The Best Asset in any business that decides to give me a try. <br/> <br/>

Falling is just an accident, staying in the floor is an unforgivable decision.</h3> <br/> <br/>
  </div>
  <div className='sectionone'>
 <h2 className='darkbg'>About me</h2>  <h3 className='myself'>I always try to get out of my comfort zone and push myself into new challenges. <br/> I have always loved to keep growing my knowledge to be preprared for any challenge i can face on the way to reach my goals.</h3> 
 </div>
 <div className='sectiontwo'>
   <h2 className='darkbgtwo'>JUNIOR WEB DEVELOPER</h2>
   
 <h5 className='bio'>I developed my interest in programming since i was a child, all my life i've been playing video games and spending my days trough the internet. <br/> 
 hours and hours scrolling trough Social networks and all that stuff, I grew up in the Internet revolution. <br/>
  Beside of that i always had the interest on learning how it all worked, how big companies create videogames or networks, but i never took a look into it. <br/>
  Once i finished high school (2018) i didn't knew pretty well what to do with my life, i started learning a new language (english) and my University studies of CS in my country, Venezuela<br/>
  I started developing more and more interest on programming so i decided to enroll in an Online Course (Platzi), Then i enrolled on IronHack miami and finished the Full Stack Web Dev Bootcamp, after all of that i keep learning by my own every single day and putting all my knowledge on practice.</h5>
  </div>
  <div className='what'>
    <h2>My websites</h2>
    {/* how i design my websites. 1- responsive design, mobile first. 2- speed and user friendly. 3-modernism 4-last but not less, KISS= keep it simple stupid. */}
    
     </div>
<div className='skills'>
  <h1> My Skills</h1>
  <img className='resp' src={responsive}/> 
  <ul>
  <li><img className='code' src={mongo}/></li>
  <li><img className='code' src={relo}/></li>
 <li><img className='code' src={reduxgo}/></li> 
 <li> <img className='code' src={jque}/></li>
  <li><img className='code' src={nod}/></li>
  <li><img className='code' src={csty}/></li>
  <li><img className='code' src={htm}/></li>
  <li><img className='code' src={boots}/></li>
  </ul>
</div>
      </div>
     

 
  );
  }
} 