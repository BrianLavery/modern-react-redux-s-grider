import React from "react"
import { connect } from "react-redux"
import { fetchStreams } from "../../actions"
import { Link } from "react-router-dom"

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams()
    }
    
    renderAuthenticatedUserButtons = (stream) => {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link className="ui button primary" to={`/streams/edit/${stream.id}`}>Edit</Link>
                    <Link className="ui button negative" to={`/streams/delete/${stream.id}`}>Delete</Link>
                </div>
            )
        }
    }

    renderList = () => {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderAuthenticatedUserButtons(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/streams/${stream.id}`} className="header">{stream.title}</Link>
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            )
        })
    }

    renderCreateButton = () => {
        if (this.props.isSignedIn) {
            return (
                <div style={{textAlign: 'right' }}>
                    <Link to='/streams/new' className="ui button primary">Create Stream</Link>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreateButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // We convert object to an array to make it easier to loop through and generate JSX
    return { 
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList)