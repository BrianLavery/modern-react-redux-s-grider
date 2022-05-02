import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
    const [term, setTerm] = useState('')
    const [debouncedTerm, setDebouncedTerm] = useState(term) // Set up to avoid double API requests
    const [results, setResults] = useState([])

    // Set this up to avoid double requests
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term)
        }, 1000)

        return () => {
            clearTimeout(timerId)
        }
    }, [term])

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            })

            setResults(data.query.search)
        }

        if (debouncedTerm) {
            search()
        } else {
            setResults([])
        }
    }, [debouncedTerm])

    // Use Effect will take 2 arguments and the first will be a function to run
    // Second is argument to tell us when to run the function - either
    // either emtpy array => run only at initial render
    // no arguments => run after every render
    // 1+ arguments => run after every render IF at least one of the arguments has changed since last render
    // Function you pass into useEffect cannot be an async function with the await keyword

    // For useEffect you can only return one type of value - you can only return a function ("cleanup function")
    // when useEffect runs each time it calls the cleanup function from last time and then it runs
    // useEffect(() => {
    //     const search = async () => {
    //         const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
    //             params: {
    //                 action: 'query',
    //                 list: 'search',
    //                 origin: '*',
    //                 format: 'json',
    //                 srsearch: term
    //             }
    //         })

    //         setResults(data.query.search)
    //     }

    //     if (term || results.length) {
    //         const timeoutId = setTimeout(() => {
    //             if (term) {
    //                 search()
    //             } else {
    //                 setResults([])
    //             }
    //         }, 500)
    
    //         return () => {
    //             clearTimeout(timeoutId)
    //         }
    //     }

    // }, [term, results.length])
    
    const renderedResults = results.map((result) => {
       return (
            <div key={result.pageid} className='item'>
                <div className='right floated content'>
                    <a 
                        className='ui button'
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >Go</a>
                </div>
                <div className='content'>
                    <div className='header'>
                        {result.title}
                    </div>
                    
                    {/* The text below we don't tend to use as could open up to XSS attack
                    Someone could write some JS inside the HTML and then take over our app */}
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                    {/*{result.snippet}*/}
                </div>
            </div>
       )
    })

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
            <div className='ui celled list'>
                {renderedResults}
            </div>
        </div>
    )
}

export default Search


// 3 ways to make an API request (aysnchronous) inside useEffect
// 1 - make an async function inside then immediately call it
// useEffect(() => {
//     const search = async () => {
//         await axios.get('asdfa')
//     }

//     search()
// }, [term])

// 2 - we define a function and immediately invoke it - without a variable perspective
// useEffect(() => {
//     (async () => {
//         await axios.get('asdfa')
//     })()
// }, [term])

// 3 - use promises with .then
// useEffect(() => {
//     axios.get('asdfa')
//         .then((response) => {
//             console.log(response.data)
//         })
// }, [term])