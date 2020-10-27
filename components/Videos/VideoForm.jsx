import { useState } from "react"
import styles from "../Videos/videoForm.module.scss"

const VideoForm = () => {
    const [video, setVideo] = useState({ title: "", url: "", description: "" })

    const handleInputChange = (e) => {
        setVideo({ ...video, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(video)
    }

    return (
        <>
            <div className={styles.card}>
                <div className={styles.card__body}>
                    <h3>New Video</h3>

                    <form
                        onSubmit={handleSubmit}
                        className={styles.card__body__form}
                    >
                        <input
                            type="text"
                            name="title"
                            placeholder="write a title for this video"
                            className={styles.card__body__form__title}
                            onChange={handleInputChange}
                            autoFocus={true}
                        />
                        <input
                            type="text"
                            name="url"
                            placeholder="https://somesite.com"
                            className={styles.card__body__form__Url}
                            onChange={handleInputChange}
                        />

                        <textarea
                            name="description"
                            cols="30"
                            rows={3}
                            placeholder="Write a description"
                            className={styles.card__body__form__textarea}
                            onChange={handleInputChange}
                        ></textarea>
                        <button className={styles.card__body__form__btn}>
                            Create Video
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default VideoForm
