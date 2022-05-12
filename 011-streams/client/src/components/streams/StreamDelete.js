import React from "react"
import Modal from "../Modal"
import history from "../../history"
import { connect } from "react-redux"
import { fetchStream, deleteStream } from "../../actions"

class StreamDelete extends React.Component {
    renderActions = () => {
        // React.Fragment has no impact on DOM and styling - use if <div> causes some issues
        // Can shorten React.Fragment to <> and </> => some code editors think it is an error
        return (
            <React.Fragment>
                <button className="ui button negative">Delete</button>
                <button className="ui button">Cancel</button>
            </React.Fragment>
        )
    }
    
    render() {
        return (
            <div>
                StreamDelete
                <Modal
                    title="Delete Stream"
                    content="Are you sure you want to delete this stream?"
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
            </div>
        )
    }
}

export default StreamDelete