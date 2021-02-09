import React from 'react'
import chocoPizza from './assets/choco-pizza.png'

export default class ImageSection extends React.Component{
    render() {
        return(
            <img src={chocoPizza} alt='chocolate-pizza'/>
        )
    }
}

