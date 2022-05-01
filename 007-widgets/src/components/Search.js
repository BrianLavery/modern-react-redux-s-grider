import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
    const [term, setTerm] = useState('')

    // console.log('I RUN WITH EVERY RENDER')

    // Use Effect will take 2 arguments and the first will be a function to run
    // Second is argument to tell us when to run the function - either
    // either emtpy array => run only at initial render
    // no arguments => run after every render
    // 1+ arguments => run after every render IF at least one of the arguments has changed since last render
    useEffect(() => {
        console.log('I run when term changes and we re-render')
    }, [term])

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Search Term</label>
                    <input
                        className='input'
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Search