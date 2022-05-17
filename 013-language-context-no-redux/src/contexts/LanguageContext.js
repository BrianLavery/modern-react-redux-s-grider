// 2 lines below are all that is needed to create a context object
// We create object in a separate file so we can import it only to the components where we want it

import React from 'react'

// Need to use capital C here - need to do this to make React understand this is a Component
const Context = React.createContext('english') // We can add a default value here - could be an array, object

class LanguageStore extends React.Component {
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

    // For values we provide all of state and the function
    // We need to ensure this wraps things we provide data to
    render() {
        return (
            <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Context
export { LanguageStore }