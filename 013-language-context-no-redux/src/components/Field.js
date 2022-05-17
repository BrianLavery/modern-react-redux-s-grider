import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

class Field extends React.Component {
    static contextType = LanguageContext
    
    render() {
        const text = this.context.language === 'english' ? 'Name' : 'Naam'
        return (
            <div className='ui field'>
                <h4><label>{text}</label></h4>
                <input />
            </div>
        )
    }
}

export default Field