import styles from "./videosList.module.scss"
import { useEffect, useState } from "react"
import * as videoService from "../../services/videoService"
import Loader from "../../components/Loader"
import CardVideo from "../../components/CardVideo/CardVideo"

const VideoList = () => {
    const [videos, setVideos] = useState([])
    const [load, setLoad] = useState(false)

    const loadVideos = async () => {
        const res = await videoService.getVideos()
        const formatedVideos = res.data
            .map((video) => {
                return {
                    ...video,
                    createdAt: video.created_at
                        ? new Date(video.created_at)
                        : new Date(),
                    updatedAt: video.updatedAt
                        ? new Date(video.updatedAt)
                        : new Date(),
                }
            })
            .sort((a, b) => b.createdAt.getTime() - a.updatedAt.getTime())
        setVideos(formatedVideos)
        setLoad(true)
    }

    useEffect(() => {
        loadVideos()
    }, [])

    return load == false ? (
        <div className={styles.loader}>
            <Loader />
        </div>
    ) : videos.length !== 0 ? (
        <section className={styles.container}>
            {videos.map((video) => (
                <CardVideo video={video} key={video._id} />
            ))}
        </section>
    ) : (
        <div className={styles.noVideos}>
            <span>No videos to view</span>
        </div>
    )
}

export default VideoList
