import { useEffect, useState } from "react"
import youtube from "../apis/youtube"

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        search(defaultSearchTerm)
    }, [defaultSearchTerm])

    const search = async (term) => {
        const response = await youtube.get('/search', { params: { q: term } })

        setVideos(response.data.items)
    }

    // To return from a custom hook can either return as Array (React convention)
    // Or alternatively return an object - also common in the community
    return [ videos, search ]
}

export default useVideos