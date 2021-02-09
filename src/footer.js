import React from 'react'
import vanPic from './assets/van-pic.png'
export default class Footer extends React.Component{
    render() {
        return(
            <footer>
                <span className='author'>
                    <img src={vanPic} alt='Vanessa' width='100px'/>
                    <div>
                        <h2>Vanessa Stevensson</h2>
                        <p>A bunch of Lorem Ipsum</p>
                    </div>
                    <button>Share Recipe</button>
                </span>
            </footer>
        )
    }
}