import React from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../contexts/LanguageContext'
import ColourContext from '../contexts/ColourContext'

class App extends React.Component {
    state = { language: 'english', colour: 'red' }

    setColour = (language) => {
        if (language === 'english') {
            return 'red'
        } else {
            return 'primary'
        }
    }

    onLanguageChange = (language) => {
        this.setState({ language })
        this.setState({ colour: this.setColour(language) })
    }
    
    render() {
        return (
            <div className='ui container'>
                <div>
                    Select a language:
                    <i className='flag uk' onClick={() => this.onLanguageChange('english')} />
                    <i className='flag nl' onClick={() => this.onLanguageChange('dutch')} />
                </div>
                <LanguageContext.Provider value={this.state.language}>
                    <ColourContext.Provider value={this.state.colour}>
                        <UserCreate />
                    </ColourContext.Provider>
                </LanguageContext.Provider>
            </div>
        )
    }
}

// We can use the LanguageContext.Provider above to pass data into the components that would need it
// Each time you write out this code you get an entirely new pipeline of information
// We use multiple providers for mulitple contexts

export default App