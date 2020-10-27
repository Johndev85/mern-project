import { useEffect, useState } from "react"

const VideloList = () => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/videos")
            .then((response) => response.json())
            .then((data) => setVideos(data))
    }, [])
    console.log(videos)

    return (
        <div>
            {videos.map((video, i) => {
                return (
                    <>
                        <h2 key={i}>{video.title}</h2>
                        <h3>{video.description}</h3>
                        <span> {video.created_at}</span>
                    </>
                )
            })}
        </div>
    )
}

export default VideloList
