// With React-Router each component needs to be designed to work in isolation (fetch own data!)
import React from "react"
import { connect } from "react-redux"
import { fetchStream } from "../../actions"

class StreamEdit extends React.Component {
    componentDidMount = () => {
        this.props.fetchStream(this.props.match.params.id)
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }
        return <div>{this.props.stream.title}</div>
    }
}

// We want to pass state (right stream to props) but we only know right stream ID through params (which is on props)
// mapState has access to ownProps
const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream })(StreamEdit)