import React from 'react'
import ImageSection from './imageSection';
import Ingredients from './ingredients';
import Recipe from './recipe';
export default class Body extends React.Component{
    render() {
        return(
            <main>
                <h1>Chocolate Pizza </h1>
                <p>Posted on "a day"</p>
                <ImageSection />
                <Recipe />
                <Ingredients />
            </main>
        )
    }
}