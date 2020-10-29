import VideoList from "../components/Videos/VideoList"

const App = () => {
    return (
        <>
            <VideoList />
        </>
    )
}

// export async function getServerSideProps() {
//     const res = await videoService.getVideos()
//     const videos = await res.json()

//     return {
//         props: {
//             videos,
//         },
//     }
// }

export default App
