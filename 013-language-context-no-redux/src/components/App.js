import React from 'react'
import UserCreate from './UserCreate'
import { LanguageStore } from '../contexts/LanguageContext'
import ColourContext from '../contexts/ColourContext'
import LanguageSelector from './LanguageSelector'

class App extends React.Component {
    state = {  }


    
    render() {
        return (
            <div className='ui container'>
                <LanguageStore>
                    <LanguageSelector />
                    
                    <ColourContext.Provider value={this.state.colour}>
                        <UserCreate />
                    </ColourContext.Provider>
                </LanguageStore>
            </div>
        )
    }
}

// We can use the LanguageContext.Provider above to pass data into the components that would need it
// Each time you write out this code you get an entirely new pipeline of information
// We use multiple providers for mulitple contexts

export default App