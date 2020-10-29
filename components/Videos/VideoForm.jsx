import { useState } from "react"
import styles from "../Videos/videoForm.module.scss"
import * as videoService from "../../services/videoService"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useRouter } from "next/router"

const VideoForm = () => {
    const initialState = { title: "", url: "", description: "" }

    const router = useRouter()
    const [video, setVideo] = useState(initialState)

    const handleInputChange = (e) => {
        setVideo({ ...video, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await videoService.createVideo(video)
        if (res.data) {
            setVideo(res.data)
            console.log(video)
            toast.success("New Video Added", {
                autoClose: 2000,
            })
            setTimeout(() => {
                router.push("/")
            }, 2500)
        } else {
            toast.error("The URL already exists", {
                autoClose: 3000,
            })
        }
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
                        <ToastContainer />
                    </form>
                </div>
            </div>
        </>
    )
}

export default VideoForm
