import React from 'react'

// We make a class based component as will use state to get user input
class SearchBar extends React.Component {
    // Name of this function is community convention - sometimes people like to use handleInputChange
    // onInputChange(event) {
    //     console.log(event.target.value)
    // }

    // Doing below to create controlled form
    state = { term: '' }
    
    onFormSubmit = (event) => {
        event.preventDefault()
        
        // Need to use this. to refer to props in a class component
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                    <label>Image Search</label>
                    {/* We can use this to call our helper function above - do not use parentheses 
                    Some other common props are onClick onSubmit 
                    <input type="text" onChange={this.onInputChange}/>
                    Alternative way to set up an input handler - don't create separate function
                    <input type="text" onChange={(event) => console.log(event.target.value)}/> */}

                    {/* Doing below to create controlled input - React always knows what the input value is
                    In an uncontrolled form the only place that info is located is inside the HTML / DOM 
                    Makes it easier to do things like force input to be in upper case - by adding .toUpperCase in setState */}
                    <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar