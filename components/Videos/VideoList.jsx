import { useEffect, useState } from "react"
import * as videoService from "../../services/videoService"
import styles from "./videosList.module.scss"

const VideoList = () => {
    const [videos, setVideos] = useState([])

    const loadVideos = async () => {
        const res = await videoService.getVideos()
        setVideos(res.data)
    }

    useEffect(() => {
        loadVideos()
    }, [])

    return videos.length !== 0 ? (
        <section className={styles.container}>
            {videos.map((video) => {
                return (
                    <div className={styles.container__cardVid}>
                        <h2>{video.title}</h2>
                        <h3>{video.description}</h3>
                        <span> {video.created_at}</span>
                    </div>
                )
            })}
        </section>
    ) : (
        <div className={styles.noVideos}>
            <span>No videos to view</span>
        </div>
    )
}

export default VideoList
