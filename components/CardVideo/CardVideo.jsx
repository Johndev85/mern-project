import styles from "../CardVideo/cardVideo.module.scss"
import ReactPlayer from "react-player/youtube"

function CardVideo({ video }) {
    return (
        <div className={styles.container__cardVid}>
            <div className={styles.container__cardVid__title}>
                <h2>{video.title}</h2>
                <img src="/images/delete.svg" alt="delete-icon" />
            </div>
            <div className={styles.container__cardVid__body}>
                <ReactPlayer url={video.url} width={300} height={200} />
                <h3>{video.description}</h3>
                <span> {video.created_at}</span>
            </div>
        </div>
    )
}

export default CardVideo
