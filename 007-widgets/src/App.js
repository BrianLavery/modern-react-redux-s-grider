import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Route from './components/Route'
import Header from './components/Header'

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

// const showAccordion = () => {
//     if (window.location.pathname === '/') {
//         return <Accordion items={items} />
//     }
// }

// const showList = () => {
//     if (window.location.pathname === '/list') {
//         return <Search />
//     }
// }

// const showDropdown = (selected, setSelected) => {
//     if (window.location.pathname === '/dropdown') {
//         return (
//             // <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
//             // {showDropdown ?
//             //     <Dropdown selected={selected} options={options} onSelectedChange={setSelected} /> : null
//             // }
//             <Dropdown selected={selected} options={options} onSelectedChange={setSelected} />
//         )
//     }
// }

// const showTranslate = () => {
//     if (window.location.pathname === '/translate') {
//         return <Translate />
//     }
// }

const App = () => {
    const [selected, setSelected] = useState(options[0])
    // const [showDropdown, setShowDropdown] = useState(true)
        
    return (
        <div className='ui container' style={{ marginTop : '16px' }}>
            <Header />
            <Route path='/'>
                <Accordion items={items} />
            </Route>
            <Route path='/list'>
                <Search />
            </Route>
            <Route path='/dropdown'>
                <Dropdown label="Select a colour" selected={selected} options={options} onSelectedChange={setSelected} />
            </Route>
            <Route path='/translate'>
                <Translate />
            </Route>
        </div>
    )
}

export default App