import React from 'react';
import ReactDOM from 'react-dom';

import { HomePage } from './components/HomePage/HomePage.jsx';
import { NavBar } from './components/NavBar/NavBar.jsx';

import './index.scss';


// <Gallery thumbAspectRatio={1} imageSwitchCoolDownTime={1000} dir='./images/image*.png'/>
ReactDOM.render(
    <div id="container">
    <NavBar/>
    <HomePage/>
    </div>,
    document.getElementById('root'));

