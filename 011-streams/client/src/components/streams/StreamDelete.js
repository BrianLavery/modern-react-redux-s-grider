import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import Modal from "../Modal"
import history from "../../history"
import { fetchStream, deleteStream } from "../../actions"

class StreamDelete extends React.Component {
    componentDidMount = () => {
        this.props.fetchStream(this.props.match.params.id)
    }

    onClick = () => {
        
    }
    
    renderActions = () => {
        const { id } = this.props.match.params
        // React.Fragment has no impact on DOM and styling - use if <div> causes some issues
        // Can shorten React.Fragment to <> and </> => some code editors think it is an error
        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteStream(id)} className="ui button negative">Delete</button>
                <Link to='/' className="ui button">Cancel</Link>
            </React.Fragment>
        )
    }
    
    renderContent = () => {
        if(!this.props.stream) {
            return "Are you sure you want to delete this stream?"
        }

        return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`
    }

    render() {
        return (
            <Modal
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete)