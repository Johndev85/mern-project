import VideoForm from "../components/Videos/VideoForm"
import Header from "../components/Header/Header"

import styles from "../styles/videoadd.module.scss"

const VideoAdd = () => {
    return (
        <>
            <Header />
            <section className={styles.mainForm}>
                <VideoForm />
            </section>
        </>
    )
}

export default VideoAdd
