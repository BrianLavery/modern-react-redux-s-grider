import React from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component {
    state = { images: [] }

    // Async Await is best way to deal with Promises and Asynchronous code
    // 1) put async in front of the method / function
    // 2) Put away in front of the action that we are waiting on that will take time (e.g. API call)
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        })
        this.setState({ images: response.data.results })
    }

    
    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                {/* The property name (onSubmit) is up to us to name */}
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App

// One option to deal with Promise is to chain on a .then() which is essentially like a callback
// Can always use .then method any time you are working with a Promise
// onSearchSubmit(term) {
//     axios.get is the function for API call takes 2 objects - a) endpoint, b) options object
//     axios.get('https://api.unsplash.com/search/photos', {
//         params: { query: term },
//         headers: { Authorization: 'Client-ID P_FEf0IFbaAxGLjnPrczS2M7wt8eH35lHO-l7x9cBUk' }
//     }).then((response) => {
//         console.log(response.data.results)
//     })
// }