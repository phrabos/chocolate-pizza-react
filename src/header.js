import React from 'react';
import SocialMedia from './media'
export default class Header extends React.Component{
    render() {
        return (
        <div className="header">
            <header className="App-header">
                <div className='title'>
                    <h1>
                    Delicious
                    </h1>
                    <p>
                    THE BEST FOOD BLOG ON THE WEB.
                    </p>
                </div>
                <div className='Social-media'>
                <SocialMedia />
                </div>
            </header>
        </div>
        )
    }
}    