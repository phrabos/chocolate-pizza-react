import React from 'react'
import ingredientDataArray from './data'


// class IngredientComponent extends React.Component {
//     render(){
//         return ((<li key={ingredient.name}>
//             <input type='checkbox' id={ingredient.name}/>
//             <label htmlFor={ingredient.name}>{ingredient.amount} {ingredient.name}</label>
//            </li>)
//     }
// }

export default class Ingredients extends React.Component{
    render() {
        const ingredientList =
         ingredientDataArray.map(
            ingredient => (<li key={ingredient.name}>
                <input type='checkbox' id={ingredient.name}/>
                <label htmlFor={ingredient.name}>{ingredient.amount} {ingredient.name}</label>
               </li>
         ))

        return(
            <div className='ingredients'>
            <ul>
                { ingredientList }
            </ul>
        </div>
        )
    }
}