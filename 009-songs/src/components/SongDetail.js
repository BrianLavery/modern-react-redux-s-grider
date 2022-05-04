import React from "react"
import { connect } from "react-redux"

// We can make connect work with Class or Functional component
const SongDetail = ({ song }) => {
    if (!song) {
        return <div>Select a song</div>
    }

    return (
        <div>
            <h3>Details for:</h3>
            <p>Title: {song.title}</p>
            <p>Duration: {song.duration}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail)