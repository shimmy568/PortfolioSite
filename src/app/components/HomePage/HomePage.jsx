import React from 'react';

import * as style from './HomePage.scss';

/**
 * The component that represents an image in a gallery
 */
export class HomePage extends React.Component {

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
        return(
            <main className={style.className}>
                <div className="topSec">
                    <h1>Title</h1>
                </div>
            </main>
        );
    }
}
