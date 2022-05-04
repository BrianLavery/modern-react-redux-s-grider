import React, { Component } from "react"
import { connect } from 'react-redux'
import { selectSong } from '../actions'

class SongList extends Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={ () => this.props.selectSong(song) }
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            )
        })
    }

    render() {
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

// Name of this function is convention
// This function should run everytime that state is updated
const mapStateToProps = (state) => {
    // This will become a props object inside the SongList component (because of configuratin below)
    return { songs: state.songs } 
}

// export default connect(mapStateToProps, {
//     selectSong: selectSong
// })(SongList)

// Write more succinctly as below
// We pass our action creators into connect (not JSX directly as need to register function with Redux)
// connect function is setting up dispatch function
export default connect(mapStateToProps, { selectSong })(SongList)
