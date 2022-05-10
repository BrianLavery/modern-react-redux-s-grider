import React from "react"
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'


class GoogleAuth extends React.Component {
    // state = { isSignedIn: null }
    
    componentDidMount() {
        // Need to use the window variable here as gapi only works in the window scope
        window.gapi.load('client:auth2', () => {
            // .init returns a promise so we chain on a .then()
            window.gapi.client.init({
                clientId: '550209386789-92e2kij3vs0btqqkjo7a4dq66qvokp28.apps.googleusercontent.com',
                scope: 'email',
                plugin_name: 'streamy'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                // this.setState({ isSignedIn: this.auth.isSignedIn.get() })
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        // this.setState({ isSignedIn: this.auth.isSignedIn.get() })
        if (isSignedIn) {
            // We pass in current id to this function
            this.props.signIn(this.auth.currentUser.get().getId())
        } else {
            this.props.signOut()
        }
    }

    trySignIn = () => {
        this.auth.signIn()
    }

    trySignOut = () => {
        this.auth.signOut()
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.trySignOut} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={this.trySignIn} className="ui red google button">
                    <i className="google icon" />
                    Sign In with Google
                </button>
            )
        }
    }
    
    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)