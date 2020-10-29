import styles from "./videosList.module.scss"
import { useEffect, useState } from "react"
import * as videoService from "../../services/videoService"
import Loader from "../../components/Loader"

const VideoList = () => {
    const [videos, setVideos] = useState([])
    const [load, setLoad] = useState(false)

    const loadVideos = async () => {
        const res = await videoService.getVideos()
        setVideos(res.data)
        setLoad(true)
    }

    // const deleteVideo = async (videos) => {
    //     const res = await videoService.deleteVideo(videos._id)
    // }

    useEffect(() => {
        loadVideos()
    }, [])

    return load == false ? (
        <div className={styles.loader}>
            <Loader />
        </div>
    ) : videos.length !== 0 ? (
        <section className={styles.container}>
            {videos.map((video) => {
                return (
                    <div className={styles.container__cardVid}>
                        <div className={styles.container__cardVid__title}>
                            <h2>{video.title}</h2>
                            <img src="/images/delete.svg" alt="delete-icon" />
                        </div>
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
