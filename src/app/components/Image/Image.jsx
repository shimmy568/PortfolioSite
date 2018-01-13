import React from 'react';
import PropTypes from 'prop-types';

import * as style from './Image.scss';

console.log(style);

/**
 * The component that represents an image in a gallery
 */
export class Image extends React.Component {

    /**
     * The default constructor for the Image component
     */
    constructor(){
        super();
    }

    /**
     * The render method for the Image component
     * 
     * @returns {JSX.Element} - The rendered content for the Image component
     */
    render(){
        return(<p>fuck</p>);
    }
}

Image.propTypes = {
    baseUrl: PropTypes.string,
    src: PropTypes.string,
    index: PropTypes.number,
    onLoadCallback: PropTypes.func,
    onClick: PropTypes.func,
    aspectRatio: PropTypes.number,
    style: PropTypes.object,
    layout: PropTypes.string
};