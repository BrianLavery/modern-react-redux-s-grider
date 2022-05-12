// With React-Router each component needs to be designed to work in isolation (fetch own data!)
import _ from 'lodash'
import React from "react"
import { connect } from "react-redux"
import { formValues } from "redux-form"
import { fetchStream, editStream } from "../../actions"
import StreamForm from "./StreamForm"

class StreamEdit extends React.Component {
    componentDidMount = () => {
        this.props.fetchStream(this.props.match.params.id)
    }

    // formValues for editStream should only be the changed ones
    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues)
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }
        // Lodash pick method helps us choose only a few properties from the object
        return (
            <div>
                <h3>Edit a stream</h3>
                <StreamForm 
                    onSubmit={this.onSubmit} 
                    initialValues={_.pick(this.props.stream, 'title', 'description')} 
                />
            </div>
        )
    }
}

// We want to pass state (right stream to props) but we only know right stream ID through params (which is on props)
// mapState has access to ownProps
const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit)