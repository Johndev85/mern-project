import VideoList from "../components/Videos/VideoList"

const App = ({ videos }) => {
    console.log(videos)

    return (
        <>
            <VideoList />
        </>
    )
}

// export async function getStaticProps() {
//     const res = await fetch("http://localhost:3001/videos")
//     const videos = await res.json()

//     return {
//         props: {
//             videos,
//         },
//     }
// }

export default App
