import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColourContext from '../contexts/ColourContext'

class Button extends React.Component {
    // Need to call the below exactly contextType
    // static this adds a property to class itself - is equivalent to outside class writing Button.contextType
    // static contextType = LanguageContext // Don't need this if we get our data from a consumer
    
    renderButton = (colour) => {
        return (<button className={`ui button ${colour}`}>
            <LanguageContext.Consumer>
                {(value) => value === 'english' ? 'Submit' : 'Voorleggen' }
            </LanguageContext.Consumer>
        </button>)
    }

    render() {
        // const text = this.context === 'english' ? 'Submit' : 'Voorleggen' // Don't need this if we get our data from a consumer
        // return <button className='ui button primary'>{text}</button>

        // Consumer always get passed a function that it will invoke
        // We would use a Consumer if we had multiple different contexts to pull info from
        return (
            <ColourContext.Consumer>
                {(colour) => this.renderButton(colour)}
            </ColourContext.Consumer>
        ) 
    }
}

export default Button