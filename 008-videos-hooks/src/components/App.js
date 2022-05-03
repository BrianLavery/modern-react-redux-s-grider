import React, { useEffect, useState } from "react"
import SearchBar from "./SearchBar"
// import youtube from "../apis/youtube"
import VideoList from "./VideoList"
import VideoDetail from "./VideoDetail"
import useVideos from "../hooks/useVideos"

const App = () => {
    // const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [videos, search] = useVideos('buildings')

    useEffect(() => {
        setSelectedVideo(videos[0])
    }, [videos])

    // useEffect(() => {
    //     onTermSubmit('children stories')
    // }, [])

    // const onTermSubmit = async (term) => {
    //     const response = await youtube.get('/search', { params: { q: term } })

    //     setVideos(response.data.items)
    //     setSelectedVideo(response.data.items[0])
    // }

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo}></VideoDetail>
                    </div>
                    <div className="five wide column">
                        {/*<VideoList videos={videos} onVideoSelect={(video) => setSelectedVideo(video)} />*/}
                        {/* We can refactor the line above to the line below */}
                        <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
                    </div>
                </div>
            </div>
        </div>
    )
}

// class App extends React.Component {
    // state = { videos: [], selectedVideo: null }

    // We create this to make some sort of call once the screen loads
    // componentDidMount() {
    //     this.onTermSubmit('children stories')
    // }

    // onTermSubmit = async (term) => {
    //     const response = await youtube.get('/search', { params: { q: term } })

    //     this.setState({ 
    //         videos: response.data.items,
    //         selectedVideo: response.data.items[0]
    //     })
    // }

    // onVideoSelect = (video) => {
    //     this.setState({ selectedVideo: video })
    // }
    
//     render() {
//         return (
//             <div className="ui container">
//                 <SearchBar onFormSubmit={this.onTermSubmit} />
//                 <div className="ui grid">
//                     <div className="ui row">
//                         <div className="eleven wide column">
//                             <VideoDetail video={this.state.selectedVideo}></VideoDetail>
//                         </div>
//                         <div className="five wide column">
//                             <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

export default App