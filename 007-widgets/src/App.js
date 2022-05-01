import React from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'

const items = [
    {
        title: 'What is react?',
        content: 'React is a front end javascript framework'

    },
    {
        title: 'Why use react?',
        content: 'Developers love React'

    },
    {
        title: 'How use react?',
        content: 'Use by creating components'

    }
]

const App = () => {
    return (
        <div className='ui container' style={{ marginTop : '16px' }}>
            <Search />
        </div>
    )
}

export default App