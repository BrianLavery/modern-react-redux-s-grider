import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component {    
    // Constructor function is JS function not React
    // Given constructor is first called when class created it's a good way to initialize state
    // constructor(props) {
    //     super(props) // This is required if we design our own constructor function
        
    //     // We are initialising state here including latitude property
    //     // This is the only time we use direct assignment to the state object
    //     this.state = { lat: null, errorMessage: '' } 
    // }

    state = { lat: null, errorMessage: '' } // We can do this without doing in constructor (Babel will put in constructor for us)

    // Called when we do the first render
    // Recommended to put all data loading in this function (not the constructor)
    componentDidMount() {
        // We call this not in the render as will be called frequently - also not in constructor (convention)
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (error) => this.setState({ errorMessage: error.message })
        ) 
    }

    // Called any time we update state (and therefore render is called again)
    componentDidUpdate() {
        console.log('My component was just updated')
    }

    // Helper function - we use this as don't want conditional logic in render function
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        
        return <Spinner message="Please accept location request" />
    }

    // React says we have to define render and return JSX
    render() {
        // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
        // Need to pass in 2 callbacks (success + failure) as this function needs time to return value
        return (
            <div className='border red'>
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)



// BELOW IS FUNCTIONAL COMPONENT - WE SWITCHED TO CLASS BASED COMPONENTS IN THIS VIDEO
// const App = () => {
//     // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
//     // Need to pass in 2 callbacks (success + failure) as this function needs time to return value
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (error) => console.log(error)
//     ) 


//     return <div>Hi there!</div>;
// }
