import React from 'react';
import ReactDOM from 'react-dom';

import { Image } from './components/Image/Image.jsx';

import './index.scss';


// <Gallery thumbAspectRatio={1} imageSwitchCoolDownTime={1000} dir='./images/image*.png'/>
ReactDOM.render(
    <div id="container"><Image/></div>, document.getElementById('root'));

