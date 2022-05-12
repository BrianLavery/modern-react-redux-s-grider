import React from "react"
import flv from "flv.js"
import { connect } from "react-redux"
import { fetchStream } from "../../actions"

class StreamShow extends React.Component {
    constructor(props) {
        super(props)

        // We need to do this to get access to the video element in the DOM
        this.videoRef = React.createRef()
    }
    
    componentDidMount = () => {
        const { id } = this.props.match.params
        
        this.props.fetchStream(id)
        this.buildPlayer()
    }

    // componentDidMount is only called at first render - we create componentDidUpdate so we can call it again
    // in case the video wasn't ready by the time we did componentDidMount
    componentDidUpdate = () => {
        this.buildPlayer()
    }

    // Use this method as if we navigate away from stream we need to tell client to disconnect from stream
    // Without this even if we change page we will be connected in the background
    componentWillUnmount() {
        console.log('i was unmounted')
        this.player.destroy()
    }

    buildPlayer = () => {
        if (this.player || !this.props.stream) {
            return
        }

        const { id } = this.props.match.params
        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        })
        this.player.attachMediaElement(this.videoRef.current)
        this.player.load()
    }
    
    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }

        const { title, description } = this.props.stream

        return (
            <div>
                <video ref={this.videoRef} style={{ width: '100%' }} controls />
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        )

    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow)