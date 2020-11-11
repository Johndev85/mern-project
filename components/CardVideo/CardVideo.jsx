import styles from "../CardVideo/cardVideo.module.scss"
import ReactPlayer from "react-player/youtube"
import { useRouter } from "next/router"
import { route } from "next/dist/next-server/server/router"

function CardVideo({ video }) {
    const Note = () => {
        const router = useRouter()
        const { id } = router.query
        router.push(`/${id}`)
    }

    const handleUpdate = () => {
        const id = video._id
        return id
    }

    return (
        <div className={styles.container__cardVid}>
            <div className={styles.container__cardVid__title}>
                <h2>{video.title}</h2>
            </div>
            <div className={styles.container__cardVid__body}>
                <ReactPlayer url={video.url} width={300} height={200} />
                <h3>{video.description}</h3>
                <span> Added: {video.created_at.substr(0, 10)}</span>
            </div>
            <div className={styles.container__cardVid__footerCard}>
                <ul>
                    <li>
                        <a>
                            <img
                                onClick={handleUpdate}
                                src="/images/edit.svg"
                                alt="edit icon"
                            />
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="/images/delete.svg" alt="delete-icon" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CardVideo
