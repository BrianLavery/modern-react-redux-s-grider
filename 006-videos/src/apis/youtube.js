import axios from 'axios'

const KEY = 'AIzaSyBSnUw3UYTsL88XkRz_MyKQgjdqhdz0quA'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})
