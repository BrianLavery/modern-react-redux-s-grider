// Import React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'

const buttonText = 'No! Click Me!' // We define a variable here and then reference it later
const buttonText1 = 123456
const buttonText2 = ['hi', 'there']
const buttonText3 = [1,2,3,5,7,9]
const buttonText4 = { text: 'Click on me again' }

const style = { backgroundColor: 'red', color: 'white' }

const labelText = 'Enter name:'

const getButtonText = () => { // We can also define a function for same purpose
    return 'Click on Me!'
}

// Create a react component
const App = () => {

    return (
        <div>
            <label className="label" htmlFor="name">{labelText}</label>
            <input id="name" type="text"/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>{getButtonText()}</button>
            <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText}</button>
            <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText1}</button>
            <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText2}</button>
            <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText3}</button>
            <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText4.text}</button>
            <button style={style}>{buttonText4.text}</button>
        </div>
    ) // We use the () to return the div as we want it
}

// Display the react component on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)