import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'

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

const options = [
    {
        label: "The colour red",
        value: 'red'
    },
    {
        label: "The colour blue",
        value: 'blue'
    },
    {
        label: "The colour green",
        value: 'green'
    }
]

const App = () => {
    const [selected, setSelected] = useState(options[0])
    const [showDropdown, setShowDropdown] = useState(true)
    
    return (
        <div className='ui container' style={{ marginTop : '16px' }}>
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {showDropdown ?
                <Dropdown selected={selected} options={options} onSelectedChange={setSelected} /> : null
            }
            <div>
                <p style={{ color: selected.value }}>This text is {selected.value}</p>
            </div>
        </div>
    )
}

export default App